import {getRepository} from 'typeorm';
import {v4 as uuid} from 'uuid';
import {MaterialType} from "../entities/material-type";
import {MaterialItem, MaterialState} from "../entities/material-item";
import {Warehouse} from "../entities/warehouse";
import {ProductType} from "../entities/product-type";
import {MaterialSpecification} from "../entities/material-specification";
import {IOrderSpec} from "../../mappers/order-specification";

export interface ProductTypeAndMaterialSpecs {
    productType: ProductType;
    materialSpecs: MaterialSpecification[];
}

export interface IMaterialQuantityByNameAndState {
    warehouseId: number;
    quantity: number;
    materialName: string;
    materialState: MaterialState,
}

export interface WarehouseQuantity {
    warehouseId: number;
    count: number;
    materialName: string;
}

export interface WarehouseDashboardContent {
    warehouses: Warehouse[];
    materialTypes: MaterialType[];
    productTypes: ProductType[];
    warehouseQuantities: WarehouseQuantity[];
}

export interface WarehouseCapacity {
    quantity: number;
    warehouseId: number;
    capacity: number;
}

class WarehouseRepository {
    addMaterialType = async (materialType: Partial<MaterialType>): Promise<MaterialType> => {
        return getRepository(MaterialType).save(materialType);
    };

    addMaterialItems = async (materialItems: Partial<MaterialItem>[]): Promise<MaterialItem[]> => {
        const warehouseRequirements: { [warehouseId: number] : number } = {};
        materialItems.forEach(mi => {
            if (!Object.keys(warehouseRequirements).includes(mi.warehouseId.toString())) {
                warehouseRequirements[mi.warehouseId] = 1;
            } else {
                warehouseRequirements[mi.warehouseId] += 1;
            }
        });

        const warehouseCapacities: WarehouseCapacity[] = await getRepository(MaterialItem).query(`
            select COUNT(*) as quantity,  mi."warehouseId", wh.capacity
            from material_item mi 
            inner join warehouse wh on wh.id = mi."warehouseId"
            group by mi."warehouseId", wh.capacity
        `);

        const warehousesAvailabilities = Object.keys(warehouseRequirements)
            .map(async (warehouseId) => {
                const warehouse = warehouseCapacities.find(whc => whc.warehouseId === +warehouseId);
                if (!warehouse) {
                    const whFromDb = await getRepository(Warehouse).findOne(warehouseId);
                    return whFromDb.capacity > warehouseRequirements[+warehouseId];
                }

                return (warehouse.capacity - warehouse.quantity) > warehouseRequirements[+warehouseId];
            });

        const warehousesAvailable = (await Promise.all(warehousesAvailabilities)).every(available => available);

        if (!warehousesAvailable) {
            throw new Error('Some of the warehouses cannot take this many materials.');
        }

        materialItems.forEach(mi => mi.serial = uuid());
        return getRepository(MaterialItem).save(materialItems);
    };

    getMaterialItemsByWarehouseId = async (warehouseId: number): Promise<MaterialItem[]> => {
        return getRepository(MaterialItem).createQueryBuilder('mi')
            .where("mi.warehouseId = :id", { id: warehouseId })
            .getMany();
    };

    addWarehouse = async (warehouse: Partial<Warehouse>): Promise<Warehouse> => {
        return getRepository(Warehouse).save(warehouse);
    };

    getWarehouseDashboardContent = async (): Promise<WarehouseDashboardContent> => {
        const warehouses = await getRepository(Warehouse).createQueryBuilder('wh').getMany();
        const productTypes = await getRepository(ProductType).createQueryBuilder('pt').getMany();
        const materialTypes = await getRepository(MaterialType).createQueryBuilder('mt').getMany();
        const warehouseQuantities = await getRepository(MaterialItem).query(`
            select COUNT(*), mt.name as "materialName",  mi."warehouseId"
            from material_item mi
            inner join material_type mt on mt.id = mi."materialTypeId"
            group by mt.name , mi."warehouseId"
        `);

        return {
            materialTypes,
            productTypes,
            warehouses,
            warehouseQuantities,
        };
    };

    addProductTypeAndMaterialSpecifications = async (
        productType: Partial<ProductType>,
        materialSpecs: Partial<MaterialSpecification>[]): Promise<ProductTypeAndMaterialSpecs> => {
        const savedProductType = await getRepository(ProductType).save(productType);

        materialSpecs.forEach(ms => ms.productType = savedProductType);
        const savedMaterialSpecs = await getRepository(MaterialSpecification).save(materialSpecs);

        return {
            materialSpecs: savedMaterialSpecs,
            productType: savedProductType
        }
    };

    checkOrderSpecsAndSetMaterials = async (orderSerial: string, orderSpecs: IOrderSpec[]) => {
        const matSpecs = await getRepository(MaterialSpecification).createQueryBuilder('ms')
            .where("ms.productTypeId in (:...ids)", { ids: orderSpecs.map(os => os.productTypeId) })
            .getMany();
        const matReq: { [materialTypeId: number] : number } = {};

        matSpecs.forEach(ms => {
            if (!matReq[ms.materialTypeId])
                matReq[ms.materialTypeId] = 0;
        });

        orderSpecs.forEach(os => {
            const matSpecsForProduct = matSpecs.filter(ms => ms.productTypeId === os.productTypeId);

            matSpecsForProduct.forEach(msp => {
                matReq[msp.materialTypeId] += msp.quantity * os.quantity;
            })
        });

        const materialItems = await getRepository(MaterialItem).createQueryBuilder('mi')
            .where('mi.materialType in (:...matTypes) and mi.materialState = :matState')
            .setParameters({
                matTypes: Object.keys(matReq),
                matState: MaterialState.available,
            })
            .getMany();

        const materialsAreAvailable = Object.keys(matReq).every(materialTypeId => {
           const availableMaterials = materialItems.reduce((sum, mi) => {
             return sum + (mi.materialTypeId === +materialTypeId ? 1 : 0)
           }, 0);

           return availableMaterials >= matReq[+materialTypeId];
        });

        if (!materialsAreAvailable) {
            throw new Error('There are insufficient materials.');
        }

        const matsForUpdate: MaterialItem[] = [];

        Object.keys(matReq).forEach(materialTypeId => {
            const materialsWithType = materialItems.filter(mi => mi.materialTypeId === +materialTypeId);
            matsForUpdate.push(...materialsWithType.filter((mi, index) => index < matReq[+materialTypeId]));
        });

        matsForUpdate.forEach(mi => {
            mi.orderSerial = orderSerial;
            mi.materialState = MaterialState.taken;
        });

        await getRepository(MaterialItem).save(matsForUpdate);
    };

    getMaterialQuantitiesByNameAndState = async (): Promise<IMaterialQuantityByNameAndState[]> => {
        return getRepository(MaterialItem).query(`
            select COUNT(*) as quantity,mt.Name as "materialName", mi."materialState" ,  mi."warehouseId"
            from material_item mi
            inner join material_type mt on mt.id = mi."materialTypeId"
            group by mt.name, mi."materialState", mi."warehouseId"
        `);
    };

    changeMaterialItemsState(orderSerial: string, materialState: MaterialState): Promise<boolean> {
        return new Promise((resolve) => {
            getRepository(MaterialItem)
                .createQueryBuilder()
                .update(MaterialItem)
                .set({ materialState: materialState })
                .where("orderSerial = :orderSerial", { orderSerial })
                .execute()
                .then(() => resolve(true))
                .catch(() => resolve(false));
        })
    }
}

export const warehouseRepository = new WarehouseRepository();

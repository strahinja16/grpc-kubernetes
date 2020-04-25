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

class WarehouseRepository {
    addMaterialType = async (materialType: Partial<MaterialType>): Promise<MaterialType> => {
        try {
            return await getRepository(MaterialType).save(materialType);
        }catch (e) {
            console.log(`warehouse-service: WarehouseRepository.addMaterialType error: ${e.toString()}`)
        }
    };

    addMaterialItems = async (materialItems: Partial<MaterialItem>[]): Promise<MaterialItem[]> => {
        try {
            materialItems.forEach(mi => mi.serial = uuid());
            return await getRepository(MaterialItem).save(materialItems);
        }catch (e) {
            console.log(`warehouse-service: WarehouseRepository.addMaterialItems error: ${e.toString()}`)
        }
    };

    addWarehouse = async (warehouse: Partial<Warehouse>): Promise<Warehouse> => {
        try {
            return await getRepository(Warehouse).save(warehouse);
        }catch (e) {
            console.log(`warehouse-service: WarehouseRepository.addWarehouse error: ${e.toString()}`)
        }
    };

    addProductTypeAndMaterialSpecifications = async (
        productType: Partial<ProductType>,
        materialSpecs: Partial<MaterialSpecification>[]): Promise<ProductTypeAndMaterialSpecs> => {
        try {
            const savedProductType = await getRepository(ProductType).save(productType);

            materialSpecs.forEach(ms => ms.productType = savedProductType);
            const savedMaterialSpecs = await getRepository(MaterialSpecification).save(materialSpecs);

            return {
                materialSpecs: savedMaterialSpecs,
                productType: savedProductType
            }
        }catch (e) {
            console.log(`warehouse-service: WarehouseRepository.addWarehouse error: ${e.toString()}`)
        }
    };

    checkOrderSpecsAndSetMaterials = async (orderSerial: string, orderSpecs: IOrderSpec[]): Promise<boolean> => {
        try {
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
                return;
            }

            materialItems.forEach(mi => {
                mi.orderSerial = orderSerial;
                mi.materialState = MaterialState.taken;
            });

            await getRepository(MaterialItem).save(materialItems);

            return true;
        }catch (e) {
            console.log(`warehouse-service: WarehouseRepository.checkOrderSpecsAndSetMaterials error: ${e.toString()}`)
        }
    };

    getMaterialQuantitiesByNameAndState = async (): Promise<IMaterialQuantityByNameAndState[]> => {
        try {
            const matQuantities = await getRepository(MaterialItem).query(`
                select COUNT(*) as quantity,mt.Name as "materialName", mi."materialState" ,  mi."warehouseId"
                from material_item mi
                inner join material_type mt on mt.id = mi."materialTypeId"
                group by mt.name, mi."materialState", mi."warehouseId"
            `);

            return matQuantities as IMaterialQuantityByNameAndState[];
        }catch (e) {
            console.log(`warehouse-service: WarehouseRepository.getMaterialQuantitiesByType error: ${e.toString()}`)
        }
    };

    changeMaterialItemsState(orderSerial: string, materialState: MaterialState): Promise<boolean> {
        try {
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
        }catch (e) {
            console.log(`warehouse-service: WarehouseRepository.getMaterialQuantitiesByType error: ${e.toString()}`)
        }
    }
}

export const warehouseRepository = new WarehouseRepository();

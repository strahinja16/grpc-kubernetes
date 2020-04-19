import {getRepository} from 'typeorm';
import { v4 as uuid } from 'uuid';
import {MaterialType} from "../entities/material-type";
import {MaterialItem} from "../entities/material-item";
import {Warehouse} from "../entities/warehouse";
import {ProductType} from "../entities/product-type";
import {MaterialSpecification} from "../entities/material-specification";

export interface ProductTypeAndMaterialSpecs {
    productType: ProductType;
    materialSpecs: MaterialSpecification[];
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

    setOrderForMaterialItems = async (orderSerial: string, materialItemIds: number[]): Promise<MaterialItem[]> => {
        try {
            const materialItemRepository = getRepository(MaterialItem);

            const materialItems: MaterialItem[] = await materialItemRepository.findByIds(materialItemIds);

            materialItems.forEach(mi => mi.orderSerial = orderSerial);

            return await materialItemRepository.save(materialItems);
        }catch (e) {
            console.log(`warehouse-service: WarehouseRepository.setOrderForMaterialItems error: ${e.toString()}`)
        }
    };

    checkIfThereAreMaterialsForOrder = async (): Promise<void> => {
        try {

        }catch (e) {
            console.log(`warehouse-service: WarehouseRepository.checkIfThereAreMaterialsForOrder error: ${e.toString()}`)
        }
    };

    getMaterialQuantitiesByType = async (): Promise<void> => {
        try {

        }catch (e) {
            console.log(`warehouse-service: WarehouseRepository.getMaterialQuantitiesByType error: ${e.toString()}`)
        }
    };
}

export const warehouseRepository = new WarehouseRepository();

import {MaterialStateEnum} from "./material-item";
import { IWarehouse } from "./warehouse";
import {IMaterialType} from "./material-type";
import {IProductType} from "./product-type";

export interface IMaterialQuantityByNameAndState {
    warehouseId: number;
    quantity: number;
    materialName: string;
    materialState: MaterialStateEnum,
}

export interface IWarehouseQuantity {
    warehouseId: number;
    count: number;
    materialName: string;
}

export interface IWarehouseDashboardContent {
    warehouses: IWarehouse[];
    materialTypes: IMaterialType[];
    productTypes: IProductType[];
    warehouseQuantities: IWarehouseQuantity[];
}

export const typeDef = `
    type MaterialQuantityByNameAndState {
        warehouseId: Int!
        quantity: Int!
        materialName: String!
        materialState: Int!
    }
    
    type WarehouseQuantity {
        count: Int!
        materialName: String!
        warehouseId: Int!
    }
    
    type WarehouseDashboardContent {
        warehouses: [Warehouse]!
        materialTypes: [MaterialType]!
        productTypes: [ProductType]!
        warehouseQuantities: [WarehouseQuantity]!
    }
`;

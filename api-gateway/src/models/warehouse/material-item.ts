import {IPersonnelCredentials} from "../shared/personnel-credentials";
import {IMaterialType} from "./material-type";
import { IWarehouse } from "./warehouse";

export enum MaterialStateEnum {
    available,
    taken,
    usedUp,
}

export interface IMaterialItem {
    id: number;
    serial: string;
    materialTypeId: number;
    warehouseId: number;
    orderSerial: string;
    materialState: MaterialStateEnum
}

export interface IAddMaterialItemDto {
    materialState: MaterialStateEnum,
    materialTypeId: number;
    warehouseId: number;
}

export interface InputAddMaterialItems {
    personnelCredentials: IPersonnelCredentials;
    materialItems: IMaterialItem[];
}

export interface InputSetOrderForMaterialItems {
    materialItemIds: number[];
    orderSerial: string;
}

export const typeDef = `
    type MaterialItem {
        id: Int!
        serial: String!
        materialTypeId: Int!
        warehouseId: Int!
        orderSerial: String
        materialState: Int!
    }
    
    input InputSetOrderForMaterialItems {
        materialItemIds: [Int!]!
        orderSerial: String!
        personnelCredentials: PersonnelCredentials!
    }   
    
    input InputAddMaterialItems {
       personnelCredentials: PersonnelCredentials!
       materialItems: [InputMaterialItemDto!]!
    }
    
    input InputMaterialItemDto {
       materialState: Int!
       materialTypeId: Int!
       warehouseId: Int!
    }
`;

import {IPersonnelCredentials} from "./user-credentials";
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
    materialType: IMaterialType;
    warehouse: IWarehouse;
    orderSerial: string;
    materialState: MaterialStateEnum
}

export interface InputAddMaterialItems {
    personnelCredentials: IPersonnelCredentials;
    materialItems: IMaterialItem[];
}


export const typeDef = `
  type MaterialItem {
    id: Int!
    serial: String!
    materialType: MaterialType!
    warehouse: Warehouse!
    orderSerial: String
    materialState: Int!
  }
  
  input InputMaterialItemDto {
    materialState: Int!
    materialType: InputMaterialType!
    warehouse: InputWarehouse!
  }

  input InputAddMaterialItems {
    personnelCredentials: PersonnelCredentials!
    materialItems: [InputMaterialItemDto!]!
  }   
`;

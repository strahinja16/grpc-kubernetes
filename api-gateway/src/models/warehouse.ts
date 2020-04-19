import {IPersonnelCredentials} from "./user-credentials";

export interface IWarehouse {
    id: number;
    name: string;
    capacity: number;
}

export interface InputAddWarehouse {
    personnelCredentials: IPersonnelCredentials;
    warehouse: IWarehouse;
}


export const typeDef = `
  type Warehouse {
    id: Int!
    name: String!
    capacity: Int!
  }
  
  input InputWarehouseDto {
    name: String!
    capacity: Int!
  }
  
  input InputWarehouse {
    id: Int!
    name: String!
    capacity: Int!
  }

  input InputAddWarehouse {
    personnelCredentials: PersonnelCredentials!
    warehouse: InputWarehouseDto!
  }   
`;

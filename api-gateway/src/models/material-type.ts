import {IPersonnelCredentials} from "./user-credentials";

export interface IMaterialType {
    id: number;
    name: string;
}

export interface InputAddMaterialType {
    personnelCredentials: IPersonnelCredentials;
    name: string;
}


export const typeDef = `
  type MaterialType {
    id: Int!
    name: String!
  }
  
  input InputMaterialType {
    id: Int!
    name: String!
  }
  
  input InputAddMaterialType {
    personnelCredentials: PersonnelCredentials!
    name: String!
  }   
`;

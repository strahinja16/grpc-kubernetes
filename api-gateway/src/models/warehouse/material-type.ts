
export interface IMaterialType {
    id: number;
    name: string;
}

export const typeDef = `
  type MaterialType {
    id: Int!
    name: String!
  }
  
  input InputAddMaterialType {
    name: String!
  }   
`;

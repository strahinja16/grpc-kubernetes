
export interface IMaterialSpecification {
    id: number;
    quantity: number;
    productTypeId: number;
    materialTypeId: number;
}

export interface IAddMaterialSpecificationDto {
    quantity: number;
    materialTypeId: number;
}

export const typeDef = `
  type MaterialSpecification {
    id: Int!
    quantity: Int!
    productTypeId: Int!
    materialTypeId: Int!
  }
  
  input InputAddMaterialSpecificationDto {
    quantity: Int!
    materialTypeId: Int!
  }
`;

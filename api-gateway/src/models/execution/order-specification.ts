
export interface IOrderSpecificationDto {
    productTypeId: number;
    quantity: number;
}

export const typeDef = `
  input InputOrderSpecificationDto {
    productTypeId: Int!
    quantity: Int!
  }
`;

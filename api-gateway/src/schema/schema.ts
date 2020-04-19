
export const typeDef = `
  type Query {
    helloWorld: String
  }

  type Mutation {
    addMaterialType(input: InputAddMaterialType!): MaterialType!
    addMaterialItems(input: InputAddMaterialItems!): [MaterialItem!]!
    addWarehouse(input: InputAddWarehouse!): Warehouse!
  }
`;

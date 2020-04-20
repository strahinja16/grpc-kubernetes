
export const typeDef = `
  type Query {
    getMaterialQuantitiesByNameAndState: [MaterialQuantityByNameAndState!]!
  }

  type Mutation {
    addMaterialType(input: InputAddMaterialType!): MaterialType!
    addWarehouse(input: InputAddWarehouse!): Warehouse!
    setOrderForMaterialItems(input: InputSetOrderForMaterialItems!): [MaterialItem!]!
    addMaterialItems(input: InputAddMaterialItems!): [MaterialItem!]!
    addProductTypeAndMaterialSpecifications(input: InputAddProductTypeAndMaterialSpecifications!): ProductTypeAndMaterialSpecifications!
    signUp(input: InputSignUp!): Personnel!
    login(input: InputLogin!): Personnel!
    changeRole(input: InputChangeRole!): Personnel!
  }
`;


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
    signUp(input: InputSignUp!): PersonnelWithJwt!
    login(input: InputLogin!): PersonnelWithJwt!
    changeRole(input: InputChangeRole!): Personnel!
  }
`;

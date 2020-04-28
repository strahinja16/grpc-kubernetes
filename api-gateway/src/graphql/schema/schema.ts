
export const typeDef = `
  scalar Date

  type Query {
    getMaterialQuantitiesByNameAndState: [MaterialQuantityByNameAndState!]!
    getWarehouseDashboardContent: WarehouseDashboardContent!
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
    getOrders(input: InputGetOrdersDto!): [Order]!
    placeOrder(input: InputPlaceOrderDto!): Order!
    changeOrderState(input: InputChangeOrderStateDto!): Order!
    finishOrder(input: InputFinishOrderDto!): Order!
  }
`;

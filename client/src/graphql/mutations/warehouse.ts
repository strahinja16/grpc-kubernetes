import { GET_WAREHOUSE_CONTENT, GET_WAREHOUSE_MATERIAL_ITEMS } from "../queries/warehouse";
import { gql } from "apollo-boost";
import { IMaterialItem, IMaterialType, IWarehouseQuantity } from "../../models/warehouse";

export const ADD_MATERIAL_TYPE = gql`
  mutation($input: InputAddMaterialType!) {
    addMaterialType(input: $input) {
      id,
      name,
    }
  }
`;

export const ADD_MATERIAL_TYPE_UPDATE = (callback: any) => (cache: any, {
  data: { addMaterialType }
}: any) => {
  const oldData = cache.readQuery({ query: GET_WAREHOUSE_CONTENT });

  const data = {
    getWarehouseDashboardContent: {
      ...oldData.getWarehouseDashboardContent,
      materialTypes: [
        ...oldData.getWarehouseDashboardContent.materialTypes,
        addMaterialType
      ]
    }
  };
  cache.writeQuery({ query: GET_WAREHOUSE_CONTENT, data });
  callback();
};

export const ADD_WAREHOUSE = gql`
  mutation($input: InputAddWarehouse!) {
    addWarehouse(input: $input) {
      id,
      name,
      capacity
    }
  }
`;

export const ADD_WAREHOUSE_UPDATE = (callback: any) => (cache: any, {
  data: { addWarehouse }
}: any) => {
  const oldData = cache.readQuery({ query: GET_WAREHOUSE_CONTENT });

  const data = {
    getWarehouseDashboardContent: {
      ...oldData.getWarehouseDashboardContent,
      warehouses: [...oldData.getWarehouseDashboardContent.warehouses, addWarehouse]
    }
  };
  cache.writeQuery({ query: GET_WAREHOUSE_CONTENT, data });
  callback();
};

export const ADD_PRODUCT_TYPE = gql`
  mutation($input: InputAddProductTypeAndMaterialSpecifications!) {
    addProductTypeAndMaterialSpecifications(input: $input) {
      productType {
        id,
        name, 
        price
      }
      materialSpecs {
        quantity 
        materialTypeId,
        productTypeId,
      }
    }
  }
`;

export const ADD_PRODUCT_TYPE_UPDATE = (callback: any) => (cache: any, {
  data: { addProductTypeAndMaterialSpecifications }
}: any) => {
  const oldData = cache.readQuery({ query: GET_WAREHOUSE_CONTENT });

  const data = {
    getWarehouseDashboardContent: {
      ...oldData.getWarehouseDashboardContent,
      productTypes: [
        ...oldData.getWarehouseDashboardContent.productTypes,
        addProductTypeAndMaterialSpecifications.productType
      ]
    }
  };
  cache.writeQuery({ query: GET_WAREHOUSE_CONTENT, data });
  callback();
};

export const ADD_MATERIAL_ITEMS = gql`
  mutation($input: InputAddMaterialItems!) {
    addMaterialItems(input: $input) {
      id,
      materialTypeId,
      warehouseId,
      serial,
      materialState
    }
  }
`;

export const ADD_MATERIAL_ITEMS_UPDATE = (warehouseId: number, callback: any) => (cache: any, {
  data: { addMaterialItems }
}: any) => {
  // update warehouse material items
  const oldData = cache.readQuery({ query: GET_WAREHOUSE_MATERIAL_ITEMS,
    variables: { input: { warehouseId: Number(warehouseId) } }
  });
  const data = {
    ...oldData,
    getMaterialItems: [...oldData.getMaterialItems, ...addMaterialItems],
  };
  cache.writeQuery({ query: GET_WAREHOUSE_MATERIAL_ITEMS, data,
    variables: { input: { warehouseId: Number(warehouseId) } }
  });


  // update warehouse quantity
  const oldWhData = cache.readQuery({ query: GET_WAREHOUSE_CONTENT });
  const materialTypes = oldWhData.getWarehouseDashboardContent.materialTypes;

  const warehouseQuantities: IWarehouseQuantity[] = [];
  addMaterialItems.forEach((mi: IMaterialItem) => {
    const materialName = materialTypes.find((mt: IMaterialType) => mt.id === mi.materialTypeId).name;

    const warehouseQuantity = warehouseQuantities
      .find(wq => wq.warehouseId === mi.warehouseId && wq.materialName === materialName);

    if (warehouseQuantity) {
      warehouseQuantity.count += 1;
      warehouseQuantities[warehouseQuantities.indexOf(warehouseQuantity)] = warehouseQuantity;
    } else {
      warehouseQuantities.push({ warehouseId: mi.warehouseId, count: 1, materialName, __typename: "WarehouseQuantity" });
    }
  });

  const quantities = oldWhData.getWarehouseDashboardContent.warehouseQuantities;
  warehouseQuantities.forEach(whq => {
    const existing = quantities
      .find((wq: IWarehouseQuantity) => wq.warehouseId === whq.warehouseId && wq.materialName === whq.materialName);

    if (existing) {
      quantities[quantities.indexOf(existing)] = { ...existing, count: existing.count + whq.count, __typename: "WarehouseQuantity" };
    } else {
      quantities.push(whq);
    }
  });


  const whData = {
    ...oldWhData,
    getWarehouseDashboardContent: {
      ...oldWhData.getWarehouseDashboardContent,
      warehouseQuantities: [
        ...quantities
      ]
    }
  };

  cache.writeQuery({ query: GET_WAREHOUSE_CONTENT, data: whData });
  callback();
};

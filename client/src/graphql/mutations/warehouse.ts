import { GET_WAREHOUSE_CONTENT } from "../queries/warehouse";
import { gql } from "apollo-boost";

export const ADD_MATERIAL_TYPE = gql`
  mutation($input: InputAddMaterialType!) {
    addMaterialType(input: $input) {
      id,
      name,
    }
  }
`;

export const ADD_MATERIAL_TYPE_UPDATE = (callback: any) => (cache: any, { data: { addMaterialType } }: any) => {
  const oldData = cache.readQuery({ query: GET_WAREHOUSE_CONTENT });

  const data = {
    getWarehouseDashboardContent: {
      ...oldData.getWarehouseDashboardContent,
      materialTypes: [...oldData.getWarehouseDashboardContent.materialTypes, addMaterialType]
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

export const ADD_WAREHOUSE_UPDATE = (callback: any) => (cache: any, { data: { addWarehouse } }: any) => {
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


import {gql} from "apollo-boost";

export const GET_WAREHOUSE_CONTENT = gql`
  query {
    getWarehouseDashboardContent {
      warehouses {
        id,
        name,
        capacity
      }
      materialTypes {
        id,
        name,
      },
      productTypes {
        id,
        name,
        price
      },
      warehouseQuantities {
        count,
        materialName
        warehouseId
      },
    }
  }
`;

export const GET_WAREHOUSE_MATERIAL_ITEMS = gql`
  query($input: InputGetMaterialItems!) {
    getMaterialItems(input: $input) {
      id,
      materialTypeId,
      warehouseId,
      serial,
      materialState
    }
  }
`;

export const GET_MATERIAL_TYPES_AND_WAREHOUSES_CLIENT = gql`
  query {
    getWarehouseDashboardContent @client {
      materialTypes {
        id,
        name,
      }
      warehouses {
        id,
        name
      }
    }
  }
`;


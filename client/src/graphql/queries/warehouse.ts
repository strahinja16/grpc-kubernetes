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

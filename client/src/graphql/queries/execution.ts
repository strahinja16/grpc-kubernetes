import {gql} from "apollo-boost";

export const GET_ORDERS = gql`
  query($input: InputGetOrdersDto!) {
    getOrders(input: $input) {
      id,
      state,
      startDate,
      endDate,
      serial
    }
  }
`;

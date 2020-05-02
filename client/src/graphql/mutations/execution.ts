import { gql } from "apollo-boost";
import { GET_ORDERS } from "../queries/execution";
import { IOrder, IOrderState, IOrderTimespan } from "../../models/execution";

export const CHANGE_ORDER_STATE = gql`
  mutation($input: InputChangeOrderStateDto!) {
    changeOrderState(input: $input) {
      id,
      state,
      startDate,
      endDate
    }
  }
`;

export const CHANGE_ORDER_STATE_UPDATE = () => (cache: any, {
  data: { changeOrderState }
}: any) => {
  const oldData = cache.readQuery({ query: GET_ORDERS, variables: {
      input: { state: Number(IOrderState.started), timespan: Number(IOrderTimespan.allUpcoming) }
    }});

  const data = {
    ...oldData,
    getOrders: [...oldData.getOrders.map((o: IOrder) => {
      return o.id === changeOrderState.id ? {...o, state: changeOrderState.state} : { ...o};
    })]
  };
  cache.writeQuery({ query: GET_ORDERS, data, variables: {
      input: { state: Number(IOrderState.started), timespan: Number(IOrderTimespan.allUpcoming) }
    }});
};

export const FINISH_ORDER = gql`
  mutation($input: InputFinishOrderDto!) {
    finishOrder(input: $input) {
      id,
      state,
      startDate,
      endDate
    }
  }
`;

export const FINISH_ORDER_UPDATE = () => (cache: any, {
  data: { finishOrder }
}: any) => {
  const oldData = cache.readQuery({ query: GET_ORDERS, variables: {
      input: { state: Number(IOrderState.started), timespan: Number(IOrderTimespan.allUpcoming) }
    }});

  const data = {
    ...oldData,
    getOrders: [...oldData.getOrders.map((o: IOrder) => {
      return o.id === finishOrder.id ? {...o, state: finishOrder.state} : { ...o};
    })]
  };
  cache.writeQuery({ query: GET_ORDERS, data, variables: {
      input: { state: Number(IOrderState.started), timespan: Number(IOrderTimespan.allUpcoming) }
    }});
};

export const PLACE_ORDER = gql`
  mutation($input: InputPlaceOrderDto!) {
    placeOrder(input: $input) {
      id,
      state,
      startDate,
      endDate,
      serial
    }
  }
`;

export const PLACE_ORDER_UPDATE = (callback: any) => (cache: any, {
  data: { placeOrder }
}: any) => {
  const oldData = cache.readQuery({ query: GET_ORDERS, variables: {
      input: { state: Number(IOrderState.started), timespan: Number(IOrderTimespan.allUpcoming) }
    }});

  const data = {
    ...oldData,
    getOrders: [...oldData.getOrders, placeOrder]
  };

  cache.writeQuery({ query: GET_ORDERS, data, variables: {
      input: { state: Number(IOrderState.started), timespan: Number(IOrderTimespan.allUpcoming) }
    }});

  callback();
};


import { StateEnum } from "../../graphql/models/execution/order";
import { OrderResponse } from "../../proto/execution_pb";
import { IOrderResponse } from "../../graphql/models/execution/order-response";

class OrderResponseMapper {
  toGql(orderResponse: OrderResponse): IOrderResponse {
    return {
      id: orderResponse.getId(),
      startDate: orderResponse.getStartdate()!.toDate(),
      endDate: orderResponse.getEnddate() ? orderResponse.getEnddate()!.toDate() : null,
      orderId: orderResponse.getOrderid(),
      state: (orderResponse.getState() as number) as StateEnum,
    };
  }
}

export const orderResponseMapper =  new OrderResponseMapper();

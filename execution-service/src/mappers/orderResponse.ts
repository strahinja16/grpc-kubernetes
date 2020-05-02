import {OrderResponse as OrderResponseEntity} from "../db/entities/order-response";
import {OrderResponse, State} from "../proto/execution_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";


class OrderResponseMapper {
  toGrpc(orderResp: Partial<OrderResponseEntity>): OrderResponse {
    const startDate = new Timestamp();
    startDate.fromDate(orderResp.startDate);
    const endDate = new Timestamp();
    if (orderResp.endDate) {
      endDate.fromDate(orderResp.endDate);
    }

    const orderResponse = new OrderResponse();
    orderResponse.setId(orderResp.id);
    orderResponse.setStartdate(startDate);
    orderResponse.setEnddate(endDate);
    orderResponse.setOrderid(orderResp.orderId);
    orderResponse.setState((orderResp.state as number) as State);

    return orderResponse;
  }
}

export const orderResponseMapper =  new OrderResponseMapper();

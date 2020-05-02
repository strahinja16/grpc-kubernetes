import * as grpc from 'grpc';
import {ExecutionClient, IExecutionClient} from "../../proto/execution_grpc_pb";
import {
    ChangeOrderStateRequest,
    ChangeOrderStateResponse,
    FinishOrderRequest,
    FinishOrderResponse,
    GetOrderResponsesRequest,
    GetOrderResponsesResponse,
    GetOrdersRequest,
    GetOrdersResponse,
    OrderDto,
    OrderSpecificationDto,
    OrderTimespan,
    PlaceOrderRequest,
    PlaceOrderResponse, State
} from "../../proto/execution_pb";
import {
    IChangeOrderStateDto,
    IFinishOrderDto,
    IGetOrdersDto,
    IOrder,
    IPlaceOrderDto,
} from "../../graphql/models/execution/order";
import {Timestamp} from "google-protobuf/google/protobuf/timestamp_pb";
import {IOrderSpecificationDto} from "../../graphql/models/execution/order-specification";
import {orderMapper} from "../../mappers/execution/order";
import {config} from "../../config";
import { orderResponseMapper } from "../../mappers/execution/orderResponse";
import { IOrderResponse } from "../../graphql/models/execution/order-response";

class ExecutionGrpcClient  {
    executionClient: IExecutionClient;

    constructor() {
        this.executionClient = new ExecutionClient(config.executionServiceGrpcUrl!, grpc.credentials.createInsecure());
    }

    getOrders(input: IGetOrdersDto): Promise<IOrder[]> {
        return new Promise((resolve ,reject) => {
            const request = new GetOrdersRequest();
            request.setTimespan((input.timespan as number) as OrderTimespan);
            request.setState((input.state as number) as State);

            this.executionClient.getOrders(
                request,
                (error: (grpc.ServiceError | null), response: GetOrdersResponse) => {
                    if (error != null) {
                        reject(error.details);
                        return;
                    }

                    resolve(response.getOrdersList().map(o => orderMapper.toGql(o)));
                });
        });
    }

    getOrderResponses(input: any): Promise<IOrderResponse[]> {
        return new Promise((resolve ,reject) => {
            const request = new GetOrderResponsesRequest();
            request.setOrderid(input.orderId);

            this.executionClient.getOrderResponses(
              request,
              (error: (grpc.ServiceError | null), response: GetOrderResponsesResponse) => {
                  if (error != null) {
                      reject(error.details);
                      return;
                  }

                  resolve(response.getOrderresponsesList().map(o => orderResponseMapper.toGql(o)));
              });
        });
    }

    placeOrder(input: IPlaceOrderDto): Promise<IOrder> {
        return new Promise((resolve ,reject) => {
            const request = new PlaceOrderRequest();
            const orderDto = new OrderDto();

            const endDate = new Timestamp();
            endDate.fromDate(input.endDate);

            orderDto.setEnddate(endDate);
            orderDto.setPersonnelid(input.personnelId);
            orderDto.setOrderspecsList(input.orderSpecs.map((os: IOrderSpecificationDto) => {
                const orderSpec = new OrderSpecificationDto();
                orderSpec.setQuantity(os.quantity);
                orderSpec.setProducttypeid(os.productTypeId);
                return orderSpec;
            }));
            request.setOrder(orderDto);

            this.executionClient.placeOrder(
                request,
                (error: (grpc.ServiceError | null), response: PlaceOrderResponse) => {
                    if (error != null) {
                        reject(error.details);
                        return;
                    }

                    resolve(orderMapper.toGql(response.getOrder()!));
                });
        });
    }

    changeOrderState(input: IChangeOrderStateDto): Promise<IOrder> {
        return new Promise((resolve ,reject) => {
            const request = new ChangeOrderStateRequest();
            request.setOrderid(input.orderId);
            request.setState((input.state as number) as State);

            this.executionClient.changeOrderState(
                request,
                (error: (grpc.ServiceError | null), response: ChangeOrderStateResponse) => {
                    if (error != null) {
                        reject(error.details);
                        return;
                    }

                    resolve(orderMapper.toGql(response.getOrder()!));
                });
        });
    }

    finishOrder(input: IFinishOrderDto): Promise<IOrder> {
        return new Promise((resolve ,reject) => {
            const request = new FinishOrderRequest();
            request.setOrderserial(input.orderSerial);
            request.setOrderid(input.orderId);

            this.executionClient.finishOrder(
                request,
                (error: (grpc.ServiceError | null), response: FinishOrderResponse) => {
                    if (error != null) {
                        reject(error.details);
                        return;
                    }

                    resolve(orderMapper.toGql(response.getOrder()!));
                });
        });
    }
}

export const executionGrpcClient = new ExecutionGrpcClient();

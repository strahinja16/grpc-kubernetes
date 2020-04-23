import * as grpc from 'grpc';
import {ExecutionService, IExecutionServer} from "../proto/execution/execution_grpc_pb";
import {
    ChangeOrderStateRequest,
    ChangeOrderStateResponse,
    FinishOrderRequest,
    FinishOrderResponse,
    GetOrdersRequest,
    GetOrdersResponse,
    PlaceOrderRequest,
    PlaceOrderResponse, State
} from "../proto/execution/execution_pb";
import {executionRepository, OrderTimespanEnum} from "../db/repositories";
import {State as StateEnum} from "../db/entities/order";
import { orderMapper } from '../mappers/order';

class ExecutionServer implements IExecutionServer {

    /**
     * Gets orders by the timespan and state
     * @param call
     * @param callback
     */
    getOrders = async (
        call: grpc.ServerUnaryCall<GetOrdersRequest>,
        callback: grpc.sendUnaryData<GetOrdersResponse>
    ): Promise<void> => {
        try {
            const timespan = (call.request.getTimespan() as number) as OrderTimespanEnum;
            const state = call.request.getState();
            const states = timespan === OrderTimespanEnum.allUpcoming || state === State.ANY
                ? [StateEnum.started, StateEnum.paused, StateEnum.finished]
                : [(state as number) as StateEnum];

            const orders = await executionRepository.getOrders(timespan, states);

            const response = new GetOrdersResponse();
            response.setOrdersList(orders.map(o => orderMapper.toGrpc(o)));

            callback(null, response);
        } catch (e) {
            console.log(`execution-service: ExecutionService.getOrders error: ${e.toString()}`);
            callback(e.toString(), null);
        }
    };

    /**
     * Places new order
     * @param call
     * @param callback
     */
    placeOrder = async (
        call: grpc.ServerUnaryCall<PlaceOrderRequest>,
        callback: grpc.sendUnaryData<PlaceOrderResponse>
    ): Promise<void> => {
        try {
            // ask if there is enough material

            const { order, orderSpecs } = orderMapper.placeOrderDtoToTs(call.request.getOrder());
            const savedOrder = await executionRepository.placeOrder(order, orderSpecs);

            const response = new PlaceOrderResponse();
            response.setOrder(orderMapper.toGrpc(savedOrder));

            callback(null, response);
        } catch (e) {
            console.log(`execution-service: ExecutionService.placeOrder error: ${e.toString()}`);
            callback(e.toString(), null);
        }
    };

    /**
     * Changes the state of order from active to inactive and vice versa
     * @param call
     * @param callback
     */
    changeOrderState = async (
        call: grpc.ServerUnaryCall<ChangeOrderStateRequest>,
        callback: grpc.sendUnaryData<ChangeOrderStateResponse>
    ): Promise<void> => {
        try {
            const orderId = call.request.getOrderid();
            const nextState = (call.request.getState() as number) as StateEnum;

            const changedOrder = await executionRepository.changeOrderState(orderId, nextState);
            const response = new ChangeOrderStateResponse();
            response.setOrder(orderMapper.toGrpc(changedOrder));

            callback(null, response);
        } catch (e) {
            console.log(`execution-service: ExecutionService.changeOrderState error: ${e.toString()}`);
            callback(e.toString(), null);
        }
    };

    /**
     * Completes the order
     * @param call
     * @param callback
     */
    finishOrder = async (
        call: grpc.ServerUnaryCall<FinishOrderRequest>,
        callback: grpc.sendUnaryData<FinishOrderResponse>
    ): Promise<void> => {
        try {
            const orderId = call.request.getOrderid();

            const finishedOrder = await executionRepository.finishOrder(orderId);
            const response = new FinishOrderResponse();
            response.setOrder(orderMapper.toGrpc(finishedOrder));

            callback(null, response);
        } catch (e) {
            console.log(`execution-service: ExecutionService.finishOrder error: ${e.toString()}`);
            callback(e.toString(), null);
        }
    };
}

export default {
    service: ExecutionService,
    implementation: new ExecutionServer(),
};

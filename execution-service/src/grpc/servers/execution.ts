import * as grpc from 'grpc';
import {ExecutionService, IExecutionServer} from "../../proto/execution_grpc_pb";
import {
    AddProductTypeRequest,
    AddProductTypeResponse,
    ChangeOrderStateRequest,
    ChangeOrderStateResponse,
    FinishOrderRequest,
    FinishOrderResponse, GetOrderResponsesRequest, GetOrderResponsesResponse,
    GetOrdersRequest,
    GetOrdersResponse,
    PlaceOrderRequest,
    PlaceOrderResponse,
    State
} from "../../proto/execution_pb";
import {executionRepository, OrderTimespanEnum} from "../../db/repositories";
import {State as StateEnum} from "../../db/entities/order";
import {orderMapper} from '../../mappers/order';
import warehouseGrpcClient from '../clients/warehouse';
import {v4 as uuid} from 'uuid';
import {
    ChangeMaterialItemsStateRequest,
    CheckOrderSpecsAndSetMaterialsRequest,
    MaterialState
} from "../../proto/warehouse_pb";
import { orderResponseMapper } from "../../mappers/orderResponse";

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
        } catch (error) {
            console.log(`[Execution.getOrders] ${error.message}`);
            callback(error, null);
        }
    };

    /**
     * Gets order responses by order id
     * @param call
     * @param callback
     */
    getOrderResponses = async (
      call: grpc.ServerUnaryCall<GetOrderResponsesRequest>,
      callback: grpc.sendUnaryData<GetOrderResponsesResponse>
    ): Promise<void> => {
        try {
            const orderResponses = await executionRepository.getOrderResponses(call.request.getOrderid());

            const response = new GetOrderResponsesResponse();
            response.setOrderresponsesList(orderResponses.map(o => orderResponseMapper.toGrpc(o)));

            callback(null, response);
        } catch (error) {
            console.log(`[Execution.getOrderResponses] ${error.message}`);
            callback(error, null);
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
            call.request.getOrder().setSerial(uuid());
            const checkOrderSpecsRequest = new CheckOrderSpecsAndSetMaterialsRequest();
            checkOrderSpecsRequest.setOrder(call.request.getOrder());

            const checkPassed = await warehouseGrpcClient.checkOrderSpecsAndSetMaterials(checkOrderSpecsRequest);
            if (!checkPassed) {
                callback(new Error('There are insufficient materials.'), null);
                return;
            }

            const { order, orderSpecs } = orderMapper.placeOrderDtoToTs(call.request.getOrder());
            const savedOrder = await executionRepository.placeOrder(order, orderSpecs);

            const response = new PlaceOrderResponse();
            response.setOrder(orderMapper.toGrpc(savedOrder));

            callback(null, response);
        } catch (error) {
            console.log(`[Execution.placeOrder] ${error.message}`);
            callback(error, null);
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
        } catch (error) {
            console.log({ error });
            console.log(`[Execution.changeOrderState] ${error.message}`);
            callback(error, null);
        }
    };

    /**
     * Creates new product type
     * @param call
     * @param callback
     */
    addProductType = async (
      call: grpc.ServerUnaryCall<AddProductTypeRequest>,
      callback: grpc.sendUnaryData<AddProductTypeResponse>
    ): Promise<void> => {
        try {
            const name = call.request.getName();
            const price = call.request.getPrice();
            const productType = await executionRepository.addProductType(name, price);
            const response = new AddProductTypeResponse();

            response.setId(productType.id);
            response.setPrice(productType.price);
            response.setName(productType.name);

            callback(null, response);
        } catch (error) {
            console.log({ error });
            console.log(`[Execution.addProductType] ${error.message}`);
            callback(error, null);
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
            const orderSerial = call.request.getOrderserial();
            const orderId = call.request.getOrderid();

            const changeMaterialStateRequest = new ChangeMaterialItemsStateRequest();
            changeMaterialStateRequest.setOrderserial(orderSerial);
            changeMaterialStateRequest.setMaterialstate(MaterialState.USEDUP);

            const materialStateChanged = await warehouseGrpcClient.changeMaterialItemsState(changeMaterialStateRequest);
            if (!materialStateChanged) {
                callback(new Error('Material items state change failed.'), null);
                return;
            }

            const finishedOrder = await executionRepository.finishOrder(orderId);
            const response = new FinishOrderResponse();
            response.setOrder(orderMapper.toGrpc(finishedOrder));

            callback(null, response);
        } catch (error) {
            console.log(`[Execution.finishOrder] ${error.message}`);
            callback(error, null);
        }
    };
}

export default {
    service: ExecutionService,
    implementation: new ExecutionServer(),
};

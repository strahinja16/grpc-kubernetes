// package: execution
// file: execution.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as execution_pb from "./execution_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IExecutionService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrders: IExecutionService_IgetOrders;
    placeOrder: IExecutionService_IplaceOrder;
    changeOrderState: IExecutionService_IchangeOrderState;
    finishOrder: IExecutionService_IfinishOrder;
    addProductType: IExecutionService_IaddProductType;
    getOrderResponses: IExecutionService_IgetOrderResponses;
}

interface IExecutionService_IgetOrders extends grpc.MethodDefinition<execution_pb.GetOrdersRequest, execution_pb.GetOrdersResponse> {
    path: string; // "/execution.Execution/getOrders"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<execution_pb.GetOrdersRequest>;
    requestDeserialize: grpc.deserialize<execution_pb.GetOrdersRequest>;
    responseSerialize: grpc.serialize<execution_pb.GetOrdersResponse>;
    responseDeserialize: grpc.deserialize<execution_pb.GetOrdersResponse>;
}
interface IExecutionService_IplaceOrder extends grpc.MethodDefinition<execution_pb.PlaceOrderRequest, execution_pb.PlaceOrderResponse> {
    path: string; // "/execution.Execution/placeOrder"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<execution_pb.PlaceOrderRequest>;
    requestDeserialize: grpc.deserialize<execution_pb.PlaceOrderRequest>;
    responseSerialize: grpc.serialize<execution_pb.PlaceOrderResponse>;
    responseDeserialize: grpc.deserialize<execution_pb.PlaceOrderResponse>;
}
interface IExecutionService_IchangeOrderState extends grpc.MethodDefinition<execution_pb.ChangeOrderStateRequest, execution_pb.ChangeOrderStateResponse> {
    path: string; // "/execution.Execution/changeOrderState"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<execution_pb.ChangeOrderStateRequest>;
    requestDeserialize: grpc.deserialize<execution_pb.ChangeOrderStateRequest>;
    responseSerialize: grpc.serialize<execution_pb.ChangeOrderStateResponse>;
    responseDeserialize: grpc.deserialize<execution_pb.ChangeOrderStateResponse>;
}
interface IExecutionService_IfinishOrder extends grpc.MethodDefinition<execution_pb.FinishOrderRequest, execution_pb.FinishOrderResponse> {
    path: string; // "/execution.Execution/finishOrder"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<execution_pb.FinishOrderRequest>;
    requestDeserialize: grpc.deserialize<execution_pb.FinishOrderRequest>;
    responseSerialize: grpc.serialize<execution_pb.FinishOrderResponse>;
    responseDeserialize: grpc.deserialize<execution_pb.FinishOrderResponse>;
}
interface IExecutionService_IaddProductType extends grpc.MethodDefinition<execution_pb.AddProductTypeRequest, execution_pb.AddProductTypeResponse> {
    path: string; // "/execution.Execution/addProductType"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<execution_pb.AddProductTypeRequest>;
    requestDeserialize: grpc.deserialize<execution_pb.AddProductTypeRequest>;
    responseSerialize: grpc.serialize<execution_pb.AddProductTypeResponse>;
    responseDeserialize: grpc.deserialize<execution_pb.AddProductTypeResponse>;
}
interface IExecutionService_IgetOrderResponses extends grpc.MethodDefinition<execution_pb.GetOrderResponsesRequest, execution_pb.GetOrderResponsesResponse> {
    path: string; // "/execution.Execution/getOrderResponses"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<execution_pb.GetOrderResponsesRequest>;
    requestDeserialize: grpc.deserialize<execution_pb.GetOrderResponsesRequest>;
    responseSerialize: grpc.serialize<execution_pb.GetOrderResponsesResponse>;
    responseDeserialize: grpc.deserialize<execution_pb.GetOrderResponsesResponse>;
}

export const ExecutionService: IExecutionService;

export interface IExecutionServer {
    getOrders: grpc.handleUnaryCall<execution_pb.GetOrdersRequest, execution_pb.GetOrdersResponse>;
    placeOrder: grpc.handleUnaryCall<execution_pb.PlaceOrderRequest, execution_pb.PlaceOrderResponse>;
    changeOrderState: grpc.handleUnaryCall<execution_pb.ChangeOrderStateRequest, execution_pb.ChangeOrderStateResponse>;
    finishOrder: grpc.handleUnaryCall<execution_pb.FinishOrderRequest, execution_pb.FinishOrderResponse>;
    addProductType: grpc.handleUnaryCall<execution_pb.AddProductTypeRequest, execution_pb.AddProductTypeResponse>;
    getOrderResponses: grpc.handleUnaryCall<execution_pb.GetOrderResponsesRequest, execution_pb.GetOrderResponsesResponse>;
}

export interface IExecutionClient {
    getOrders(request: execution_pb.GetOrdersRequest, callback: (error: grpc.ServiceError | null, response: execution_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    getOrders(request: execution_pb.GetOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execution_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    getOrders(request: execution_pb.GetOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execution_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    placeOrder(request: execution_pb.PlaceOrderRequest, callback: (error: grpc.ServiceError | null, response: execution_pb.PlaceOrderResponse) => void): grpc.ClientUnaryCall;
    placeOrder(request: execution_pb.PlaceOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execution_pb.PlaceOrderResponse) => void): grpc.ClientUnaryCall;
    placeOrder(request: execution_pb.PlaceOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execution_pb.PlaceOrderResponse) => void): grpc.ClientUnaryCall;
    changeOrderState(request: execution_pb.ChangeOrderStateRequest, callback: (error: grpc.ServiceError | null, response: execution_pb.ChangeOrderStateResponse) => void): grpc.ClientUnaryCall;
    changeOrderState(request: execution_pb.ChangeOrderStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execution_pb.ChangeOrderStateResponse) => void): grpc.ClientUnaryCall;
    changeOrderState(request: execution_pb.ChangeOrderStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execution_pb.ChangeOrderStateResponse) => void): grpc.ClientUnaryCall;
    finishOrder(request: execution_pb.FinishOrderRequest, callback: (error: grpc.ServiceError | null, response: execution_pb.FinishOrderResponse) => void): grpc.ClientUnaryCall;
    finishOrder(request: execution_pb.FinishOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execution_pb.FinishOrderResponse) => void): grpc.ClientUnaryCall;
    finishOrder(request: execution_pb.FinishOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execution_pb.FinishOrderResponse) => void): grpc.ClientUnaryCall;
    addProductType(request: execution_pb.AddProductTypeRequest, callback: (error: grpc.ServiceError | null, response: execution_pb.AddProductTypeResponse) => void): grpc.ClientUnaryCall;
    addProductType(request: execution_pb.AddProductTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execution_pb.AddProductTypeResponse) => void): grpc.ClientUnaryCall;
    addProductType(request: execution_pb.AddProductTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execution_pb.AddProductTypeResponse) => void): grpc.ClientUnaryCall;
    getOrderResponses(request: execution_pb.GetOrderResponsesRequest, callback: (error: grpc.ServiceError | null, response: execution_pb.GetOrderResponsesResponse) => void): grpc.ClientUnaryCall;
    getOrderResponses(request: execution_pb.GetOrderResponsesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execution_pb.GetOrderResponsesResponse) => void): grpc.ClientUnaryCall;
    getOrderResponses(request: execution_pb.GetOrderResponsesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execution_pb.GetOrderResponsesResponse) => void): grpc.ClientUnaryCall;
}

export class ExecutionClient extends grpc.Client implements IExecutionClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOrders(request: execution_pb.GetOrdersRequest, callback: (error: grpc.ServiceError | null, response: execution_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOrders(request: execution_pb.GetOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execution_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOrders(request: execution_pb.GetOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execution_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public placeOrder(request: execution_pb.PlaceOrderRequest, callback: (error: grpc.ServiceError | null, response: execution_pb.PlaceOrderResponse) => void): grpc.ClientUnaryCall;
    public placeOrder(request: execution_pb.PlaceOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execution_pb.PlaceOrderResponse) => void): grpc.ClientUnaryCall;
    public placeOrder(request: execution_pb.PlaceOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execution_pb.PlaceOrderResponse) => void): grpc.ClientUnaryCall;
    public changeOrderState(request: execution_pb.ChangeOrderStateRequest, callback: (error: grpc.ServiceError | null, response: execution_pb.ChangeOrderStateResponse) => void): grpc.ClientUnaryCall;
    public changeOrderState(request: execution_pb.ChangeOrderStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execution_pb.ChangeOrderStateResponse) => void): grpc.ClientUnaryCall;
    public changeOrderState(request: execution_pb.ChangeOrderStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execution_pb.ChangeOrderStateResponse) => void): grpc.ClientUnaryCall;
    public finishOrder(request: execution_pb.FinishOrderRequest, callback: (error: grpc.ServiceError | null, response: execution_pb.FinishOrderResponse) => void): grpc.ClientUnaryCall;
    public finishOrder(request: execution_pb.FinishOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execution_pb.FinishOrderResponse) => void): grpc.ClientUnaryCall;
    public finishOrder(request: execution_pb.FinishOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execution_pb.FinishOrderResponse) => void): grpc.ClientUnaryCall;
    public addProductType(request: execution_pb.AddProductTypeRequest, callback: (error: grpc.ServiceError | null, response: execution_pb.AddProductTypeResponse) => void): grpc.ClientUnaryCall;
    public addProductType(request: execution_pb.AddProductTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execution_pb.AddProductTypeResponse) => void): grpc.ClientUnaryCall;
    public addProductType(request: execution_pb.AddProductTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execution_pb.AddProductTypeResponse) => void): grpc.ClientUnaryCall;
    public getOrderResponses(request: execution_pb.GetOrderResponsesRequest, callback: (error: grpc.ServiceError | null, response: execution_pb.GetOrderResponsesResponse) => void): grpc.ClientUnaryCall;
    public getOrderResponses(request: execution_pb.GetOrderResponsesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: execution_pb.GetOrderResponsesResponse) => void): grpc.ClientUnaryCall;
    public getOrderResponses(request: execution_pb.GetOrderResponsesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: execution_pb.GetOrderResponsesResponse) => void): grpc.ClientUnaryCall;
}

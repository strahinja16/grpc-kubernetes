// package: warehouse
// file: warehouse.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as warehouse_pb from "./warehouse_pb";

interface IWarehouseService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IWarehouseService_ISayHello;
}

interface IWarehouseService_ISayHello extends grpc.MethodDefinition<warehouse_pb.HelloRequest, warehouse_pb.HelloResponse> {
    path: string; // "/warehouse.Warehouse/SayHello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<warehouse_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<warehouse_pb.HelloRequest>;
    responseSerialize: grpc.serialize<warehouse_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<warehouse_pb.HelloResponse>;
}

export const WarehouseService: IWarehouseService;

export interface IWarehouseServer {
    sayHello: grpc.handleUnaryCall<warehouse_pb.HelloRequest, warehouse_pb.HelloResponse>;
}

export interface IWarehouseClient {
    sayHello(request: warehouse_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: warehouse_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: warehouse_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class WarehouseClient extends grpc.Client implements IWarehouseClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: warehouse_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: warehouse_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: warehouse_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

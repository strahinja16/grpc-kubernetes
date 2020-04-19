// package: warehouse
// file: warehouse.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as warehouse_pb from "./warehouse_pb";

interface IWarehouseAndMaterialsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addMaterialType: IWarehouseAndMaterialsService_IaddMaterialType;
    addMaterialItems: IWarehouseAndMaterialsService_IaddMaterialItems;
    addWarehouse: IWarehouseAndMaterialsService_IaddWarehouse;
    addProductTypeAndMaterialSpecifications: IWarehouseAndMaterialsService_IaddProductTypeAndMaterialSpecifications;
    setOrderForMaterialItems: IWarehouseAndMaterialsService_IsetOrderForMaterialItems;
}

interface IWarehouseAndMaterialsService_IaddMaterialType extends grpc.MethodDefinition<warehouse_pb.AddMaterialTypeRequest, warehouse_pb.AddMaterialTypeResponse> {
    path: string; // "/warehouse.WarehouseAndMaterials/addMaterialType"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<warehouse_pb.AddMaterialTypeRequest>;
    requestDeserialize: grpc.deserialize<warehouse_pb.AddMaterialTypeRequest>;
    responseSerialize: grpc.serialize<warehouse_pb.AddMaterialTypeResponse>;
    responseDeserialize: grpc.deserialize<warehouse_pb.AddMaterialTypeResponse>;
}
interface IWarehouseAndMaterialsService_IaddMaterialItems extends grpc.MethodDefinition<warehouse_pb.AddMaterialItemsRequest, warehouse_pb.AddMaterialItemsResponse> {
    path: string; // "/warehouse.WarehouseAndMaterials/addMaterialItems"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<warehouse_pb.AddMaterialItemsRequest>;
    requestDeserialize: grpc.deserialize<warehouse_pb.AddMaterialItemsRequest>;
    responseSerialize: grpc.serialize<warehouse_pb.AddMaterialItemsResponse>;
    responseDeserialize: grpc.deserialize<warehouse_pb.AddMaterialItemsResponse>;
}
interface IWarehouseAndMaterialsService_IaddWarehouse extends grpc.MethodDefinition<warehouse_pb.AddWarehouseRequest, warehouse_pb.AddWarehouseResponse> {
    path: string; // "/warehouse.WarehouseAndMaterials/addWarehouse"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<warehouse_pb.AddWarehouseRequest>;
    requestDeserialize: grpc.deserialize<warehouse_pb.AddWarehouseRequest>;
    responseSerialize: grpc.serialize<warehouse_pb.AddWarehouseResponse>;
    responseDeserialize: grpc.deserialize<warehouse_pb.AddWarehouseResponse>;
}
interface IWarehouseAndMaterialsService_IaddProductTypeAndMaterialSpecifications extends grpc.MethodDefinition<warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse> {
    path: string; // "/warehouse.WarehouseAndMaterials/addProductTypeAndMaterialSpecifications"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest>;
    requestDeserialize: grpc.deserialize<warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest>;
    responseSerialize: grpc.serialize<warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse>;
    responseDeserialize: grpc.deserialize<warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse>;
}
interface IWarehouseAndMaterialsService_IsetOrderForMaterialItems extends grpc.MethodDefinition<warehouse_pb.SetOrderForMaterialItemsRequest, warehouse_pb.SetOrderForMaterialItemsResponse> {
    path: string; // "/warehouse.WarehouseAndMaterials/setOrderForMaterialItems"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<warehouse_pb.SetOrderForMaterialItemsRequest>;
    requestDeserialize: grpc.deserialize<warehouse_pb.SetOrderForMaterialItemsRequest>;
    responseSerialize: grpc.serialize<warehouse_pb.SetOrderForMaterialItemsResponse>;
    responseDeserialize: grpc.deserialize<warehouse_pb.SetOrderForMaterialItemsResponse>;
}

export const WarehouseAndMaterialsService: IWarehouseAndMaterialsService;

export interface IWarehouseAndMaterialsServer {
    addMaterialType: grpc.handleUnaryCall<warehouse_pb.AddMaterialTypeRequest, warehouse_pb.AddMaterialTypeResponse>;
    addMaterialItems: grpc.handleUnaryCall<warehouse_pb.AddMaterialItemsRequest, warehouse_pb.AddMaterialItemsResponse>;
    addWarehouse: grpc.handleUnaryCall<warehouse_pb.AddWarehouseRequest, warehouse_pb.AddWarehouseResponse>;
    addProductTypeAndMaterialSpecifications: grpc.handleUnaryCall<warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse>;
    setOrderForMaterialItems: grpc.handleUnaryCall<warehouse_pb.SetOrderForMaterialItemsRequest, warehouse_pb.SetOrderForMaterialItemsResponse>;
}

export interface IWarehouseAndMaterialsClient {
    addMaterialType(request: warehouse_pb.AddMaterialTypeRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialTypeResponse) => void): grpc.ClientUnaryCall;
    addMaterialType(request: warehouse_pb.AddMaterialTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialTypeResponse) => void): grpc.ClientUnaryCall;
    addMaterialType(request: warehouse_pb.AddMaterialTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialTypeResponse) => void): grpc.ClientUnaryCall;
    addMaterialItems(request: warehouse_pb.AddMaterialItemsRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    addMaterialItems(request: warehouse_pb.AddMaterialItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    addMaterialItems(request: warehouse_pb.AddMaterialItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    addWarehouse(request: warehouse_pb.AddWarehouseRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddWarehouseResponse) => void): grpc.ClientUnaryCall;
    addWarehouse(request: warehouse_pb.AddWarehouseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddWarehouseResponse) => void): grpc.ClientUnaryCall;
    addWarehouse(request: warehouse_pb.AddWarehouseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddWarehouseResponse) => void): grpc.ClientUnaryCall;
    addProductTypeAndMaterialSpecifications(request: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse) => void): grpc.ClientUnaryCall;
    addProductTypeAndMaterialSpecifications(request: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse) => void): grpc.ClientUnaryCall;
    addProductTypeAndMaterialSpecifications(request: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse) => void): grpc.ClientUnaryCall;
    setOrderForMaterialItems(request: warehouse_pb.SetOrderForMaterialItemsRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.SetOrderForMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    setOrderForMaterialItems(request: warehouse_pb.SetOrderForMaterialItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.SetOrderForMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    setOrderForMaterialItems(request: warehouse_pb.SetOrderForMaterialItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.SetOrderForMaterialItemsResponse) => void): grpc.ClientUnaryCall;
}

export class WarehouseAndMaterialsClient extends grpc.Client implements IWarehouseAndMaterialsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addMaterialType(request: warehouse_pb.AddMaterialTypeRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialTypeResponse) => void): grpc.ClientUnaryCall;
    public addMaterialType(request: warehouse_pb.AddMaterialTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialTypeResponse) => void): grpc.ClientUnaryCall;
    public addMaterialType(request: warehouse_pb.AddMaterialTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialTypeResponse) => void): grpc.ClientUnaryCall;
    public addMaterialItems(request: warehouse_pb.AddMaterialItemsRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    public addMaterialItems(request: warehouse_pb.AddMaterialItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    public addMaterialItems(request: warehouse_pb.AddMaterialItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    public addWarehouse(request: warehouse_pb.AddWarehouseRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddWarehouseResponse) => void): grpc.ClientUnaryCall;
    public addWarehouse(request: warehouse_pb.AddWarehouseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddWarehouseResponse) => void): grpc.ClientUnaryCall;
    public addWarehouse(request: warehouse_pb.AddWarehouseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddWarehouseResponse) => void): grpc.ClientUnaryCall;
    public addProductTypeAndMaterialSpecifications(request: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse) => void): grpc.ClientUnaryCall;
    public addProductTypeAndMaterialSpecifications(request: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse) => void): grpc.ClientUnaryCall;
    public addProductTypeAndMaterialSpecifications(request: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse) => void): grpc.ClientUnaryCall;
    public setOrderForMaterialItems(request: warehouse_pb.SetOrderForMaterialItemsRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.SetOrderForMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    public setOrderForMaterialItems(request: warehouse_pb.SetOrderForMaterialItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.SetOrderForMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    public setOrderForMaterialItems(request: warehouse_pb.SetOrderForMaterialItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.SetOrderForMaterialItemsResponse) => void): grpc.ClientUnaryCall;
}

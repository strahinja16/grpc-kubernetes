// package: warehouse
// file: warehouse.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as warehouse_pb from "./warehouse_pb";
import * as execution_pb from "./execution_pb";

interface IWarehouseAndMaterialsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addMaterialType: IWarehouseAndMaterialsService_IaddMaterialType;
    addMaterialItems: IWarehouseAndMaterialsService_IaddMaterialItems;
    getMaterialItemsByWarehouse: IWarehouseAndMaterialsService_IgetMaterialItemsByWarehouse;
    addWarehouse: IWarehouseAndMaterialsService_IaddWarehouse;
    addProductTypeAndMaterialSpecifications: IWarehouseAndMaterialsService_IaddProductTypeAndMaterialSpecifications;
    checkOrderSpecsAndSetMaterials: IWarehouseAndMaterialsService_IcheckOrderSpecsAndSetMaterials;
    getMaterialQuantitiesByNameAndState: IWarehouseAndMaterialsService_IgetMaterialQuantitiesByNameAndState;
    changeMaterialItemsState: IWarehouseAndMaterialsService_IChangeMaterialItemsState;
    getWarehouseDashboardContent: IWarehouseAndMaterialsService_IGetWarehouseDashboardContent;
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
interface IWarehouseAndMaterialsService_IgetMaterialItemsByWarehouse extends grpc.MethodDefinition<warehouse_pb.GetMaterialItemsByWarehouseRequest, warehouse_pb.GetMaterialItemsByWarehouseResponse> {
    path: string; // "/warehouse.WarehouseAndMaterials/getMaterialItemsByWarehouse"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<warehouse_pb.GetMaterialItemsByWarehouseRequest>;
    requestDeserialize: grpc.deserialize<warehouse_pb.GetMaterialItemsByWarehouseRequest>;
    responseSerialize: grpc.serialize<warehouse_pb.GetMaterialItemsByWarehouseResponse>;
    responseDeserialize: grpc.deserialize<warehouse_pb.GetMaterialItemsByWarehouseResponse>;
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
interface IWarehouseAndMaterialsService_IcheckOrderSpecsAndSetMaterials extends grpc.MethodDefinition<warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest, warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse> {
    path: string; // "/warehouse.WarehouseAndMaterials/checkOrderSpecsAndSetMaterials"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest>;
    requestDeserialize: grpc.deserialize<warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest>;
    responseSerialize: grpc.serialize<warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse>;
    responseDeserialize: grpc.deserialize<warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse>;
}
interface IWarehouseAndMaterialsService_IgetMaterialQuantitiesByNameAndState extends grpc.MethodDefinition<warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest, warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse> {
    path: string; // "/warehouse.WarehouseAndMaterials/getMaterialQuantitiesByNameAndState"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest>;
    requestDeserialize: grpc.deserialize<warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest>;
    responseSerialize: grpc.serialize<warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse>;
    responseDeserialize: grpc.deserialize<warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse>;
}
interface IWarehouseAndMaterialsService_IChangeMaterialItemsState extends grpc.MethodDefinition<warehouse_pb.ChangeMaterialItemsStateRequest, warehouse_pb.ChangeMaterialItemsStateResponse> {
    path: string; // "/warehouse.WarehouseAndMaterials/ChangeMaterialItemsState"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<warehouse_pb.ChangeMaterialItemsStateRequest>;
    requestDeserialize: grpc.deserialize<warehouse_pb.ChangeMaterialItemsStateRequest>;
    responseSerialize: grpc.serialize<warehouse_pb.ChangeMaterialItemsStateResponse>;
    responseDeserialize: grpc.deserialize<warehouse_pb.ChangeMaterialItemsStateResponse>;
}
interface IWarehouseAndMaterialsService_IGetWarehouseDashboardContent extends grpc.MethodDefinition<warehouse_pb.GetWarehouseDashboardContentRequest, warehouse_pb.GetWarehouseDashboardContentResponse> {
    path: string; // "/warehouse.WarehouseAndMaterials/GetWarehouseDashboardContent"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<warehouse_pb.GetWarehouseDashboardContentRequest>;
    requestDeserialize: grpc.deserialize<warehouse_pb.GetWarehouseDashboardContentRequest>;
    responseSerialize: grpc.serialize<warehouse_pb.GetWarehouseDashboardContentResponse>;
    responseDeserialize: grpc.deserialize<warehouse_pb.GetWarehouseDashboardContentResponse>;
}

export const WarehouseAndMaterialsService: IWarehouseAndMaterialsService;

export interface IWarehouseAndMaterialsServer {
    addMaterialType: grpc.handleUnaryCall<warehouse_pb.AddMaterialTypeRequest, warehouse_pb.AddMaterialTypeResponse>;
    addMaterialItems: grpc.handleUnaryCall<warehouse_pb.AddMaterialItemsRequest, warehouse_pb.AddMaterialItemsResponse>;
    getMaterialItemsByWarehouse: grpc.handleUnaryCall<warehouse_pb.GetMaterialItemsByWarehouseRequest, warehouse_pb.GetMaterialItemsByWarehouseResponse>;
    addWarehouse: grpc.handleUnaryCall<warehouse_pb.AddWarehouseRequest, warehouse_pb.AddWarehouseResponse>;
    addProductTypeAndMaterialSpecifications: grpc.handleUnaryCall<warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse>;
    checkOrderSpecsAndSetMaterials: grpc.handleUnaryCall<warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest, warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse>;
    getMaterialQuantitiesByNameAndState: grpc.handleUnaryCall<warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest, warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse>;
    changeMaterialItemsState: grpc.handleUnaryCall<warehouse_pb.ChangeMaterialItemsStateRequest, warehouse_pb.ChangeMaterialItemsStateResponse>;
    getWarehouseDashboardContent: grpc.handleUnaryCall<warehouse_pb.GetWarehouseDashboardContentRequest, warehouse_pb.GetWarehouseDashboardContentResponse>;
}

export interface IWarehouseAndMaterialsClient {
    addMaterialType(request: warehouse_pb.AddMaterialTypeRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialTypeResponse) => void): grpc.ClientUnaryCall;
    addMaterialType(request: warehouse_pb.AddMaterialTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialTypeResponse) => void): grpc.ClientUnaryCall;
    addMaterialType(request: warehouse_pb.AddMaterialTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialTypeResponse) => void): grpc.ClientUnaryCall;
    addMaterialItems(request: warehouse_pb.AddMaterialItemsRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    addMaterialItems(request: warehouse_pb.AddMaterialItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    addMaterialItems(request: warehouse_pb.AddMaterialItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    getMaterialItemsByWarehouse(request: warehouse_pb.GetMaterialItemsByWarehouseRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetMaterialItemsByWarehouseResponse) => void): grpc.ClientUnaryCall;
    getMaterialItemsByWarehouse(request: warehouse_pb.GetMaterialItemsByWarehouseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetMaterialItemsByWarehouseResponse) => void): grpc.ClientUnaryCall;
    getMaterialItemsByWarehouse(request: warehouse_pb.GetMaterialItemsByWarehouseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetMaterialItemsByWarehouseResponse) => void): grpc.ClientUnaryCall;
    addWarehouse(request: warehouse_pb.AddWarehouseRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddWarehouseResponse) => void): grpc.ClientUnaryCall;
    addWarehouse(request: warehouse_pb.AddWarehouseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddWarehouseResponse) => void): grpc.ClientUnaryCall;
    addWarehouse(request: warehouse_pb.AddWarehouseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddWarehouseResponse) => void): grpc.ClientUnaryCall;
    addProductTypeAndMaterialSpecifications(request: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse) => void): grpc.ClientUnaryCall;
    addProductTypeAndMaterialSpecifications(request: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse) => void): grpc.ClientUnaryCall;
    addProductTypeAndMaterialSpecifications(request: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse) => void): grpc.ClientUnaryCall;
    checkOrderSpecsAndSetMaterials(request: warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse) => void): grpc.ClientUnaryCall;
    checkOrderSpecsAndSetMaterials(request: warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse) => void): grpc.ClientUnaryCall;
    checkOrderSpecsAndSetMaterials(request: warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse) => void): grpc.ClientUnaryCall;
    getMaterialQuantitiesByNameAndState(request: warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse) => void): grpc.ClientUnaryCall;
    getMaterialQuantitiesByNameAndState(request: warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse) => void): grpc.ClientUnaryCall;
    getMaterialQuantitiesByNameAndState(request: warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse) => void): grpc.ClientUnaryCall;
    changeMaterialItemsState(request: warehouse_pb.ChangeMaterialItemsStateRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.ChangeMaterialItemsStateResponse) => void): grpc.ClientUnaryCall;
    changeMaterialItemsState(request: warehouse_pb.ChangeMaterialItemsStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.ChangeMaterialItemsStateResponse) => void): grpc.ClientUnaryCall;
    changeMaterialItemsState(request: warehouse_pb.ChangeMaterialItemsStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.ChangeMaterialItemsStateResponse) => void): grpc.ClientUnaryCall;
    getWarehouseDashboardContent(request: warehouse_pb.GetWarehouseDashboardContentRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetWarehouseDashboardContentResponse) => void): grpc.ClientUnaryCall;
    getWarehouseDashboardContent(request: warehouse_pb.GetWarehouseDashboardContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetWarehouseDashboardContentResponse) => void): grpc.ClientUnaryCall;
    getWarehouseDashboardContent(request: warehouse_pb.GetWarehouseDashboardContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetWarehouseDashboardContentResponse) => void): grpc.ClientUnaryCall;
}

export class WarehouseAndMaterialsClient extends grpc.Client implements IWarehouseAndMaterialsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addMaterialType(request: warehouse_pb.AddMaterialTypeRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialTypeResponse) => void): grpc.ClientUnaryCall;
    public addMaterialType(request: warehouse_pb.AddMaterialTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialTypeResponse) => void): grpc.ClientUnaryCall;
    public addMaterialType(request: warehouse_pb.AddMaterialTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialTypeResponse) => void): grpc.ClientUnaryCall;
    public addMaterialItems(request: warehouse_pb.AddMaterialItemsRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    public addMaterialItems(request: warehouse_pb.AddMaterialItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    public addMaterialItems(request: warehouse_pb.AddMaterialItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddMaterialItemsResponse) => void): grpc.ClientUnaryCall;
    public getMaterialItemsByWarehouse(request: warehouse_pb.GetMaterialItemsByWarehouseRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetMaterialItemsByWarehouseResponse) => void): grpc.ClientUnaryCall;
    public getMaterialItemsByWarehouse(request: warehouse_pb.GetMaterialItemsByWarehouseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetMaterialItemsByWarehouseResponse) => void): grpc.ClientUnaryCall;
    public getMaterialItemsByWarehouse(request: warehouse_pb.GetMaterialItemsByWarehouseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetMaterialItemsByWarehouseResponse) => void): grpc.ClientUnaryCall;
    public addWarehouse(request: warehouse_pb.AddWarehouseRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddWarehouseResponse) => void): grpc.ClientUnaryCall;
    public addWarehouse(request: warehouse_pb.AddWarehouseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddWarehouseResponse) => void): grpc.ClientUnaryCall;
    public addWarehouse(request: warehouse_pb.AddWarehouseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddWarehouseResponse) => void): grpc.ClientUnaryCall;
    public addProductTypeAndMaterialSpecifications(request: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse) => void): grpc.ClientUnaryCall;
    public addProductTypeAndMaterialSpecifications(request: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse) => void): grpc.ClientUnaryCall;
    public addProductTypeAndMaterialSpecifications(request: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse) => void): grpc.ClientUnaryCall;
    public checkOrderSpecsAndSetMaterials(request: warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse) => void): grpc.ClientUnaryCall;
    public checkOrderSpecsAndSetMaterials(request: warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse) => void): grpc.ClientUnaryCall;
    public checkOrderSpecsAndSetMaterials(request: warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse) => void): grpc.ClientUnaryCall;
    public getMaterialQuantitiesByNameAndState(request: warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse) => void): grpc.ClientUnaryCall;
    public getMaterialQuantitiesByNameAndState(request: warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse) => void): grpc.ClientUnaryCall;
    public getMaterialQuantitiesByNameAndState(request: warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse) => void): grpc.ClientUnaryCall;
    public changeMaterialItemsState(request: warehouse_pb.ChangeMaterialItemsStateRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.ChangeMaterialItemsStateResponse) => void): grpc.ClientUnaryCall;
    public changeMaterialItemsState(request: warehouse_pb.ChangeMaterialItemsStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.ChangeMaterialItemsStateResponse) => void): grpc.ClientUnaryCall;
    public changeMaterialItemsState(request: warehouse_pb.ChangeMaterialItemsStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.ChangeMaterialItemsStateResponse) => void): grpc.ClientUnaryCall;
    public getWarehouseDashboardContent(request: warehouse_pb.GetWarehouseDashboardContentRequest, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetWarehouseDashboardContentResponse) => void): grpc.ClientUnaryCall;
    public getWarehouseDashboardContent(request: warehouse_pb.GetWarehouseDashboardContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetWarehouseDashboardContentResponse) => void): grpc.ClientUnaryCall;
    public getWarehouseDashboardContent(request: warehouse_pb.GetWarehouseDashboardContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: warehouse_pb.GetWarehouseDashboardContentResponse) => void): grpc.ClientUnaryCall;
}

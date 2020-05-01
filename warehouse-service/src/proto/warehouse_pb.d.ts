// package: warehouse
// file: warehouse.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as execution_pb from "./execution_pb";

export class AddMaterialTypeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddMaterialTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddMaterialTypeRequest): AddMaterialTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddMaterialTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddMaterialTypeRequest;
    static deserializeBinaryFromReader(message: AddMaterialTypeRequest, reader: jspb.BinaryReader): AddMaterialTypeRequest;
}

export namespace AddMaterialTypeRequest {
    export type AsObject = {
        name: string,
    }
}

export class AddMaterialTypeResponse extends jspb.Message { 

    hasMaterialtype(): boolean;
    clearMaterialtype(): void;
    getMaterialtype(): MaterialType | undefined;
    setMaterialtype(value?: MaterialType): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddMaterialTypeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddMaterialTypeResponse): AddMaterialTypeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddMaterialTypeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddMaterialTypeResponse;
    static deserializeBinaryFromReader(message: AddMaterialTypeResponse, reader: jspb.BinaryReader): AddMaterialTypeResponse;
}

export namespace AddMaterialTypeResponse {
    export type AsObject = {
        materialtype?: MaterialType.AsObject,
    }
}

export class AddMaterialItemsRequest extends jspb.Message { 
    clearMaterialitemsList(): void;
    getMaterialitemsList(): Array<AddMaterialItemDto>;
    setMaterialitemsList(value: Array<AddMaterialItemDto>): void;
    addMaterialitems(value?: AddMaterialItemDto, index?: number): AddMaterialItemDto;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddMaterialItemsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddMaterialItemsRequest): AddMaterialItemsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddMaterialItemsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddMaterialItemsRequest;
    static deserializeBinaryFromReader(message: AddMaterialItemsRequest, reader: jspb.BinaryReader): AddMaterialItemsRequest;
}

export namespace AddMaterialItemsRequest {
    export type AsObject = {
        materialitemsList: Array<AddMaterialItemDto.AsObject>,
    }
}

export class AddMaterialItemsResponse extends jspb.Message { 
    clearMaterialitemsList(): void;
    getMaterialitemsList(): Array<MaterialItem>;
    setMaterialitemsList(value: Array<MaterialItem>): void;
    addMaterialitems(value?: MaterialItem, index?: number): MaterialItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddMaterialItemsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddMaterialItemsResponse): AddMaterialItemsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddMaterialItemsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddMaterialItemsResponse;
    static deserializeBinaryFromReader(message: AddMaterialItemsResponse, reader: jspb.BinaryReader): AddMaterialItemsResponse;
}

export namespace AddMaterialItemsResponse {
    export type AsObject = {
        materialitemsList: Array<MaterialItem.AsObject>,
    }
}

export class AddWarehouseRequest extends jspb.Message { 

    hasWarehouse(): boolean;
    clearWarehouse(): void;
    getWarehouse(): AddWarehouseDto | undefined;
    setWarehouse(value?: AddWarehouseDto): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddWarehouseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddWarehouseRequest): AddWarehouseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddWarehouseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddWarehouseRequest;
    static deserializeBinaryFromReader(message: AddWarehouseRequest, reader: jspb.BinaryReader): AddWarehouseRequest;
}

export namespace AddWarehouseRequest {
    export type AsObject = {
        warehouse?: AddWarehouseDto.AsObject,
    }
}

export class AddWarehouseResponse extends jspb.Message { 

    hasWarehouse(): boolean;
    clearWarehouse(): void;
    getWarehouse(): Warehouse | undefined;
    setWarehouse(value?: Warehouse): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddWarehouseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddWarehouseResponse): AddWarehouseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddWarehouseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddWarehouseResponse;
    static deserializeBinaryFromReader(message: AddWarehouseResponse, reader: jspb.BinaryReader): AddWarehouseResponse;
}

export namespace AddWarehouseResponse {
    export type AsObject = {
        warehouse?: Warehouse.AsObject,
    }
}

export class AddProductTypeAndMaterialSpecificationsRequest extends jspb.Message { 

    hasProducttype(): boolean;
    clearProducttype(): void;
    getProducttype(): AddProductTypeDto | undefined;
    setProducttype(value?: AddProductTypeDto): void;

    clearMaterialspecsList(): void;
    getMaterialspecsList(): Array<AddMaterialSpecificationDto>;
    setMaterialspecsList(value: Array<AddMaterialSpecificationDto>): void;
    addMaterialspecs(value?: AddMaterialSpecificationDto, index?: number): AddMaterialSpecificationDto;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddProductTypeAndMaterialSpecificationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddProductTypeAndMaterialSpecificationsRequest): AddProductTypeAndMaterialSpecificationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddProductTypeAndMaterialSpecificationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddProductTypeAndMaterialSpecificationsRequest;
    static deserializeBinaryFromReader(message: AddProductTypeAndMaterialSpecificationsRequest, reader: jspb.BinaryReader): AddProductTypeAndMaterialSpecificationsRequest;
}

export namespace AddProductTypeAndMaterialSpecificationsRequest {
    export type AsObject = {
        producttype?: AddProductTypeDto.AsObject,
        materialspecsList: Array<AddMaterialSpecificationDto.AsObject>,
    }
}

export class AddProductTypeAndMaterialSpecificationsResponse extends jspb.Message { 

    hasProducttype(): boolean;
    clearProducttype(): void;
    getProducttype(): ProductType | undefined;
    setProducttype(value?: ProductType): void;

    clearMaterialspecsList(): void;
    getMaterialspecsList(): Array<MaterialSpecification>;
    setMaterialspecsList(value: Array<MaterialSpecification>): void;
    addMaterialspecs(value?: MaterialSpecification, index?: number): MaterialSpecification;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddProductTypeAndMaterialSpecificationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddProductTypeAndMaterialSpecificationsResponse): AddProductTypeAndMaterialSpecificationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddProductTypeAndMaterialSpecificationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddProductTypeAndMaterialSpecificationsResponse;
    static deserializeBinaryFromReader(message: AddProductTypeAndMaterialSpecificationsResponse, reader: jspb.BinaryReader): AddProductTypeAndMaterialSpecificationsResponse;
}

export namespace AddProductTypeAndMaterialSpecificationsResponse {
    export type AsObject = {
        producttype?: ProductType.AsObject,
        materialspecsList: Array<MaterialSpecification.AsObject>,
    }
}

export class CheckOrderSpecsAndSetMaterialsRequest extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): execution_pb.OrderDto | undefined;
    setOrder(value?: execution_pb.OrderDto): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckOrderSpecsAndSetMaterialsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CheckOrderSpecsAndSetMaterialsRequest): CheckOrderSpecsAndSetMaterialsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckOrderSpecsAndSetMaterialsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckOrderSpecsAndSetMaterialsRequest;
    static deserializeBinaryFromReader(message: CheckOrderSpecsAndSetMaterialsRequest, reader: jspb.BinaryReader): CheckOrderSpecsAndSetMaterialsRequest;
}

export namespace CheckOrderSpecsAndSetMaterialsRequest {
    export type AsObject = {
        order?: execution_pb.OrderDto.AsObject,
    }
}

export class CheckOrderSpecsAndSetMaterialsResponse extends jspb.Message { 
    getCheckpassed(): boolean;
    setCheckpassed(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckOrderSpecsAndSetMaterialsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CheckOrderSpecsAndSetMaterialsResponse): CheckOrderSpecsAndSetMaterialsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckOrderSpecsAndSetMaterialsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckOrderSpecsAndSetMaterialsResponse;
    static deserializeBinaryFromReader(message: CheckOrderSpecsAndSetMaterialsResponse, reader: jspb.BinaryReader): CheckOrderSpecsAndSetMaterialsResponse;
}

export namespace CheckOrderSpecsAndSetMaterialsResponse {
    export type AsObject = {
        checkpassed: boolean,
    }
}

export class GetMaterialQuantitiesByNameAndStateRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMaterialQuantitiesByNameAndStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMaterialQuantitiesByNameAndStateRequest): GetMaterialQuantitiesByNameAndStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMaterialQuantitiesByNameAndStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMaterialQuantitiesByNameAndStateRequest;
    static deserializeBinaryFromReader(message: GetMaterialQuantitiesByNameAndStateRequest, reader: jspb.BinaryReader): GetMaterialQuantitiesByNameAndStateRequest;
}

export namespace GetMaterialQuantitiesByNameAndStateRequest {
    export type AsObject = {
    }
}

export class GetMaterialQuantitiesByNameAndStateResponse extends jspb.Message { 
    clearMaterialquantitiesList(): void;
    getMaterialquantitiesList(): Array<MaterialQuantityByNameAndState>;
    setMaterialquantitiesList(value: Array<MaterialQuantityByNameAndState>): void;
    addMaterialquantities(value?: MaterialQuantityByNameAndState, index?: number): MaterialQuantityByNameAndState;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMaterialQuantitiesByNameAndStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMaterialQuantitiesByNameAndStateResponse): GetMaterialQuantitiesByNameAndStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMaterialQuantitiesByNameAndStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMaterialQuantitiesByNameAndStateResponse;
    static deserializeBinaryFromReader(message: GetMaterialQuantitiesByNameAndStateResponse, reader: jspb.BinaryReader): GetMaterialQuantitiesByNameAndStateResponse;
}

export namespace GetMaterialQuantitiesByNameAndStateResponse {
    export type AsObject = {
        materialquantitiesList: Array<MaterialQuantityByNameAndState.AsObject>,
    }
}

export class ChangeMaterialItemsStateRequest extends jspb.Message { 
    getOrderserial(): string;
    setOrderserial(value: string): void;

    getMaterialstate(): MaterialState;
    setMaterialstate(value: MaterialState): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeMaterialItemsStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeMaterialItemsStateRequest): ChangeMaterialItemsStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeMaterialItemsStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeMaterialItemsStateRequest;
    static deserializeBinaryFromReader(message: ChangeMaterialItemsStateRequest, reader: jspb.BinaryReader): ChangeMaterialItemsStateRequest;
}

export namespace ChangeMaterialItemsStateRequest {
    export type AsObject = {
        orderserial: string,
        materialstate: MaterialState,
    }
}

export class ChangeMaterialItemsStateResponse extends jspb.Message { 
    getStatechangecompleted(): boolean;
    setStatechangecompleted(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeMaterialItemsStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeMaterialItemsStateResponse): ChangeMaterialItemsStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeMaterialItemsStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeMaterialItemsStateResponse;
    static deserializeBinaryFromReader(message: ChangeMaterialItemsStateResponse, reader: jspb.BinaryReader): ChangeMaterialItemsStateResponse;
}

export namespace ChangeMaterialItemsStateResponse {
    export type AsObject = {
        statechangecompleted: boolean,
    }
}

export class GetWarehouseDashboardContentRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWarehouseDashboardContentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWarehouseDashboardContentRequest): GetWarehouseDashboardContentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWarehouseDashboardContentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWarehouseDashboardContentRequest;
    static deserializeBinaryFromReader(message: GetWarehouseDashboardContentRequest, reader: jspb.BinaryReader): GetWarehouseDashboardContentRequest;
}

export namespace GetWarehouseDashboardContentRequest {
    export type AsObject = {
    }
}

export class GetWarehouseDashboardContentResponse extends jspb.Message { 
    clearWarehousesList(): void;
    getWarehousesList(): Array<Warehouse>;
    setWarehousesList(value: Array<Warehouse>): void;
    addWarehouses(value?: Warehouse, index?: number): Warehouse;

    clearWarehousequantitiesList(): void;
    getWarehousequantitiesList(): Array<WarehouseQuantity>;
    setWarehousequantitiesList(value: Array<WarehouseQuantity>): void;
    addWarehousequantities(value?: WarehouseQuantity, index?: number): WarehouseQuantity;

    clearMaterialtypesList(): void;
    getMaterialtypesList(): Array<MaterialType>;
    setMaterialtypesList(value: Array<MaterialType>): void;
    addMaterialtypes(value?: MaterialType, index?: number): MaterialType;

    clearProducttypesList(): void;
    getProducttypesList(): Array<ProductType>;
    setProducttypesList(value: Array<ProductType>): void;
    addProducttypes(value?: ProductType, index?: number): ProductType;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWarehouseDashboardContentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetWarehouseDashboardContentResponse): GetWarehouseDashboardContentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWarehouseDashboardContentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWarehouseDashboardContentResponse;
    static deserializeBinaryFromReader(message: GetWarehouseDashboardContentResponse, reader: jspb.BinaryReader): GetWarehouseDashboardContentResponse;
}

export namespace GetWarehouseDashboardContentResponse {
    export type AsObject = {
        warehousesList: Array<Warehouse.AsObject>,
        warehousequantitiesList: Array<WarehouseQuantity.AsObject>,
        materialtypesList: Array<MaterialType.AsObject>,
        producttypesList: Array<ProductType.AsObject>,
    }
}

export class GetMaterialItemsByWarehouseRequest extends jspb.Message { 
    getWarehouseid(): number;
    setWarehouseid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMaterialItemsByWarehouseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMaterialItemsByWarehouseRequest): GetMaterialItemsByWarehouseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMaterialItemsByWarehouseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMaterialItemsByWarehouseRequest;
    static deserializeBinaryFromReader(message: GetMaterialItemsByWarehouseRequest, reader: jspb.BinaryReader): GetMaterialItemsByWarehouseRequest;
}

export namespace GetMaterialItemsByWarehouseRequest {
    export type AsObject = {
        warehouseid: number,
    }
}

export class GetMaterialItemsByWarehouseResponse extends jspb.Message { 
    clearMaterialitemsList(): void;
    getMaterialitemsList(): Array<MaterialItem>;
    setMaterialitemsList(value: Array<MaterialItem>): void;
    addMaterialitems(value?: MaterialItem, index?: number): MaterialItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMaterialItemsByWarehouseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMaterialItemsByWarehouseResponse): GetMaterialItemsByWarehouseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMaterialItemsByWarehouseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMaterialItemsByWarehouseResponse;
    static deserializeBinaryFromReader(message: GetMaterialItemsByWarehouseResponse, reader: jspb.BinaryReader): GetMaterialItemsByWarehouseResponse;
}

export namespace GetMaterialItemsByWarehouseResponse {
    export type AsObject = {
        materialitemsList: Array<MaterialItem.AsObject>,
    }
}

export class AddMaterialItemDto extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getSerial(): string;
    setSerial(value: string): void;

    getMaterialtypeid(): number;
    setMaterialtypeid(value: number): void;

    getWarehouseid(): number;
    setWarehouseid(value: number): void;

    getOrderserial(): string;
    setOrderserial(value: string): void;

    getMaterialstate(): MaterialState;
    setMaterialstate(value: MaterialState): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddMaterialItemDto.AsObject;
    static toObject(includeInstance: boolean, msg: AddMaterialItemDto): AddMaterialItemDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddMaterialItemDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddMaterialItemDto;
    static deserializeBinaryFromReader(message: AddMaterialItemDto, reader: jspb.BinaryReader): AddMaterialItemDto;
}

export namespace AddMaterialItemDto {
    export type AsObject = {
        id: number,
        serial: string,
        materialtypeid: number,
        warehouseid: number,
        orderserial: string,
        materialstate: MaterialState,
    }
}

export class AddWarehouseDto extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getCapacity(): number;
    setCapacity(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddWarehouseDto.AsObject;
    static toObject(includeInstance: boolean, msg: AddWarehouseDto): AddWarehouseDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddWarehouseDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddWarehouseDto;
    static deserializeBinaryFromReader(message: AddWarehouseDto, reader: jspb.BinaryReader): AddWarehouseDto;
}

export namespace AddWarehouseDto {
    export type AsObject = {
        name: string,
        capacity: number,
    }
}

export class AddProductTypeDto extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getPrice(): number;
    setPrice(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddProductTypeDto.AsObject;
    static toObject(includeInstance: boolean, msg: AddProductTypeDto): AddProductTypeDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddProductTypeDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddProductTypeDto;
    static deserializeBinaryFromReader(message: AddProductTypeDto, reader: jspb.BinaryReader): AddProductTypeDto;
}

export namespace AddProductTypeDto {
    export type AsObject = {
        name: string,
        price: number,
    }
}

export class AddMaterialSpecificationDto extends jspb.Message { 
    getQuantity(): number;
    setQuantity(value: number): void;

    getMaterialtypeid(): number;
    setMaterialtypeid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddMaterialSpecificationDto.AsObject;
    static toObject(includeInstance: boolean, msg: AddMaterialSpecificationDto): AddMaterialSpecificationDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddMaterialSpecificationDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddMaterialSpecificationDto;
    static deserializeBinaryFromReader(message: AddMaterialSpecificationDto, reader: jspb.BinaryReader): AddMaterialSpecificationDto;
}

export namespace AddMaterialSpecificationDto {
    export type AsObject = {
        quantity: number,
        materialtypeid: number,
    }
}

export class MaterialQuantityByNameAndState extends jspb.Message { 
    getMaterialname(): string;
    setMaterialname(value: string): void;

    getQuantity(): number;
    setQuantity(value: number): void;

    getMaterialstate(): MaterialState;
    setMaterialstate(value: MaterialState): void;

    getWarehouseid(): number;
    setWarehouseid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaterialQuantityByNameAndState.AsObject;
    static toObject(includeInstance: boolean, msg: MaterialQuantityByNameAndState): MaterialQuantityByNameAndState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaterialQuantityByNameAndState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaterialQuantityByNameAndState;
    static deserializeBinaryFromReader(message: MaterialQuantityByNameAndState, reader: jspb.BinaryReader): MaterialQuantityByNameAndState;
}

export namespace MaterialQuantityByNameAndState {
    export type AsObject = {
        materialname: string,
        quantity: number,
        materialstate: MaterialState,
        warehouseid: number,
    }
}

export class Warehouse extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getCapacity(): number;
    setCapacity(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Warehouse.AsObject;
    static toObject(includeInstance: boolean, msg: Warehouse): Warehouse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Warehouse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Warehouse;
    static deserializeBinaryFromReader(message: Warehouse, reader: jspb.BinaryReader): Warehouse;
}

export namespace Warehouse {
    export type AsObject = {
        id: number,
        name: string,
        capacity: number,
    }
}

export class MaterialType extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaterialType.AsObject;
    static toObject(includeInstance: boolean, msg: MaterialType): MaterialType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaterialType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaterialType;
    static deserializeBinaryFromReader(message: MaterialType, reader: jspb.BinaryReader): MaterialType;
}

export namespace MaterialType {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class ProductType extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getPrice(): number;
    setPrice(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductType.AsObject;
    static toObject(includeInstance: boolean, msg: ProductType): ProductType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductType;
    static deserializeBinaryFromReader(message: ProductType, reader: jspb.BinaryReader): ProductType;
}

export namespace ProductType {
    export type AsObject = {
        id: number,
        name: string,
        price: number,
    }
}

export class MaterialSpecification extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getQuantity(): number;
    setQuantity(value: number): void;

    getProducttypeid(): number;
    setProducttypeid(value: number): void;

    getMaterialtypeid(): number;
    setMaterialtypeid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaterialSpecification.AsObject;
    static toObject(includeInstance: boolean, msg: MaterialSpecification): MaterialSpecification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaterialSpecification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaterialSpecification;
    static deserializeBinaryFromReader(message: MaterialSpecification, reader: jspb.BinaryReader): MaterialSpecification;
}

export namespace MaterialSpecification {
    export type AsObject = {
        id: number,
        quantity: number,
        producttypeid: number,
        materialtypeid: number,
    }
}

export class MaterialItem extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getSerial(): string;
    setSerial(value: string): void;

    getMaterialtypeid(): number;
    setMaterialtypeid(value: number): void;

    getWarehouseid(): number;
    setWarehouseid(value: number): void;

    getOrderserial(): string;
    setOrderserial(value: string): void;

    getMaterialstate(): MaterialState;
    setMaterialstate(value: MaterialState): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaterialItem.AsObject;
    static toObject(includeInstance: boolean, msg: MaterialItem): MaterialItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaterialItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaterialItem;
    static deserializeBinaryFromReader(message: MaterialItem, reader: jspb.BinaryReader): MaterialItem;
}

export namespace MaterialItem {
    export type AsObject = {
        id: number,
        serial: string,
        materialtypeid: number,
        warehouseid: number,
        orderserial: string,
        materialstate: MaterialState,
    }
}

export class WarehouseQuantity extends jspb.Message { 
    getCount(): number;
    setCount(value: number): void;

    getMaterialname(): string;
    setMaterialname(value: string): void;

    getWarehouseid(): number;
    setWarehouseid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WarehouseQuantity.AsObject;
    static toObject(includeInstance: boolean, msg: WarehouseQuantity): WarehouseQuantity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WarehouseQuantity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WarehouseQuantity;
    static deserializeBinaryFromReader(message: WarehouseQuantity, reader: jspb.BinaryReader): WarehouseQuantity;
}

export namespace WarehouseQuantity {
    export type AsObject = {
        count: number,
        materialname: string,
        warehouseid: number,
    }
}

export enum MaterialState {
    AVAILABLE = 0,
    TAKEN = 1,
    USEDUP = 2,
}

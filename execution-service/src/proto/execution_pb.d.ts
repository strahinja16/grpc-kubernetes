// package: execution
// file: execution.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetOrdersRequest extends jspb.Message { 
    getTimespan(): OrderTimespan;
    setTimespan(value: OrderTimespan): void;

    getState(): State;
    setState(value: State): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersRequest): GetOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersRequest;
    static deserializeBinaryFromReader(message: GetOrdersRequest, reader: jspb.BinaryReader): GetOrdersRequest;
}

export namespace GetOrdersRequest {
    export type AsObject = {
        timespan: OrderTimespan,
        state: State,
    }
}

export class GetOrdersResponse extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<Order>;
    setOrdersList(value: Array<Order>): void;
    addOrders(value?: Order, index?: number): Order;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersResponse): GetOrdersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrdersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersResponse;
    static deserializeBinaryFromReader(message: GetOrdersResponse, reader: jspb.BinaryReader): GetOrdersResponse;
}

export namespace GetOrdersResponse {
    export type AsObject = {
        ordersList: Array<Order.AsObject>,
    }
}

export class PlaceOrderRequest extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): OrderDto | undefined;
    setOrder(value?: OrderDto): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlaceOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PlaceOrderRequest): PlaceOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlaceOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlaceOrderRequest;
    static deserializeBinaryFromReader(message: PlaceOrderRequest, reader: jspb.BinaryReader): PlaceOrderRequest;
}

export namespace PlaceOrderRequest {
    export type AsObject = {
        order?: OrderDto.AsObject,
    }
}

export class PlaceOrderResponse extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): Order | undefined;
    setOrder(value?: Order): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlaceOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PlaceOrderResponse): PlaceOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlaceOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlaceOrderResponse;
    static deserializeBinaryFromReader(message: PlaceOrderResponse, reader: jspb.BinaryReader): PlaceOrderResponse;
}

export namespace PlaceOrderResponse {
    export type AsObject = {
        order?: Order.AsObject,
    }
}

export class ChangeOrderStateRequest extends jspb.Message { 
    getOrderid(): number;
    setOrderid(value: number): void;

    getState(): State;
    setState(value: State): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeOrderStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeOrderStateRequest): ChangeOrderStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeOrderStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeOrderStateRequest;
    static deserializeBinaryFromReader(message: ChangeOrderStateRequest, reader: jspb.BinaryReader): ChangeOrderStateRequest;
}

export namespace ChangeOrderStateRequest {
    export type AsObject = {
        orderid: number,
        state: State,
    }
}

export class ChangeOrderStateResponse extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): Order | undefined;
    setOrder(value?: Order): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeOrderStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeOrderStateResponse): ChangeOrderStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeOrderStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeOrderStateResponse;
    static deserializeBinaryFromReader(message: ChangeOrderStateResponse, reader: jspb.BinaryReader): ChangeOrderStateResponse;
}

export namespace ChangeOrderStateResponse {
    export type AsObject = {
        order?: Order.AsObject,
    }
}

export class FinishOrderRequest extends jspb.Message { 
    getOrderid(): number;
    setOrderid(value: number): void;

    getOrderserial(): string;
    setOrderserial(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FinishOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FinishOrderRequest): FinishOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FinishOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FinishOrderRequest;
    static deserializeBinaryFromReader(message: FinishOrderRequest, reader: jspb.BinaryReader): FinishOrderRequest;
}

export namespace FinishOrderRequest {
    export type AsObject = {
        orderid: number,
        orderserial: string,
    }
}

export class FinishOrderResponse extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): Order | undefined;
    setOrder(value?: Order): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FinishOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FinishOrderResponse): FinishOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FinishOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FinishOrderResponse;
    static deserializeBinaryFromReader(message: FinishOrderResponse, reader: jspb.BinaryReader): FinishOrderResponse;
}

export namespace FinishOrderResponse {
    export type AsObject = {
        order?: Order.AsObject,
    }
}

export class AddProductTypeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getPrice(): number;
    setPrice(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddProductTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddProductTypeRequest): AddProductTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddProductTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddProductTypeRequest;
    static deserializeBinaryFromReader(message: AddProductTypeRequest, reader: jspb.BinaryReader): AddProductTypeRequest;
}

export namespace AddProductTypeRequest {
    export type AsObject = {
        name: string,
        price: number,
    }
}

export class AddProductTypeResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getPrice(): number;
    setPrice(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddProductTypeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddProductTypeResponse): AddProductTypeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddProductTypeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddProductTypeResponse;
    static deserializeBinaryFromReader(message: AddProductTypeResponse, reader: jspb.BinaryReader): AddProductTypeResponse;
}

export namespace AddProductTypeResponse {
    export type AsObject = {
        id: number,
        name: string,
        price: number,
    }
}

export class GetOrderResponsesRequest extends jspb.Message { 
    getOrderid(): number;
    setOrderid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderResponsesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderResponsesRequest): GetOrderResponsesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderResponsesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderResponsesRequest;
    static deserializeBinaryFromReader(message: GetOrderResponsesRequest, reader: jspb.BinaryReader): GetOrderResponsesRequest;
}

export namespace GetOrderResponsesRequest {
    export type AsObject = {
        orderid: number,
    }
}

export class GetOrderResponsesResponse extends jspb.Message { 
    clearOrderresponsesList(): void;
    getOrderresponsesList(): Array<OrderResponse>;
    setOrderresponsesList(value: Array<OrderResponse>): void;
    addOrderresponses(value?: OrderResponse, index?: number): OrderResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderResponsesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderResponsesResponse): GetOrderResponsesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderResponsesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderResponsesResponse;
    static deserializeBinaryFromReader(message: GetOrderResponsesResponse, reader: jspb.BinaryReader): GetOrderResponsesResponse;
}

export namespace GetOrderResponsesResponse {
    export type AsObject = {
        orderresponsesList: Array<OrderResponse.AsObject>,
    }
}

export class OrderDto extends jspb.Message { 

    hasEnddate(): boolean;
    clearEnddate(): void;
    getEnddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getPersonnelid(): string;
    setPersonnelid(value: string): void;

    getSerial(): string;
    setSerial(value: string): void;

    clearOrderspecsList(): void;
    getOrderspecsList(): Array<OrderSpecificationDto>;
    setOrderspecsList(value: Array<OrderSpecificationDto>): void;
    addOrderspecs(value?: OrderSpecificationDto, index?: number): OrderSpecificationDto;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderDto.AsObject;
    static toObject(includeInstance: boolean, msg: OrderDto): OrderDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderDto;
    static deserializeBinaryFromReader(message: OrderDto, reader: jspb.BinaryReader): OrderDto;
}

export namespace OrderDto {
    export type AsObject = {
        enddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        personnelid: string,
        serial: string,
        orderspecsList: Array<OrderSpecificationDto.AsObject>,
    }
}

export class OrderSpecificationDto extends jspb.Message { 
    getProducttypeid(): number;
    setProducttypeid(value: number): void;

    getQuantity(): number;
    setQuantity(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderSpecificationDto.AsObject;
    static toObject(includeInstance: boolean, msg: OrderSpecificationDto): OrderSpecificationDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderSpecificationDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderSpecificationDto;
    static deserializeBinaryFromReader(message: OrderSpecificationDto, reader: jspb.BinaryReader): OrderSpecificationDto;
}

export namespace OrderSpecificationDto {
    export type AsObject = {
        producttypeid: number,
        quantity: number,
    }
}

export class Order extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getSerial(): string;
    setSerial(value: string): void;


    hasStartdate(): boolean;
    clearStartdate(): void;
    getStartdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartdate(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasEnddate(): boolean;
    clearEnddate(): void;
    getEnddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getState(): State;
    setState(value: State): void;

    getPersonnelid(): string;
    setPersonnelid(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
    export type AsObject = {
        id: number,
        serial: string,
        startdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        enddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        state: State,
        personnelid: string,
    }
}

export class OrderResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    hasStartdate(): boolean;
    clearStartdate(): void;
    getStartdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartdate(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasEnddate(): boolean;
    clearEnddate(): void;
    getEnddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getState(): State;
    setState(value: State): void;

    getOrderid(): number;
    setOrderid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrderResponse): OrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderResponse;
    static deserializeBinaryFromReader(message: OrderResponse, reader: jspb.BinaryReader): OrderResponse;
}

export namespace OrderResponse {
    export type AsObject = {
        id: number,
        startdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        enddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        state: State,
        orderid: number,
    }
}

export enum OrderTimespan {
    CURRENTWEEK = 0,
    LASTWEEK = 1,
    ALLUPCOMING = 2,
}

export enum State {
    ACTIVE = 0,
    PAUSED = 1,
    FINISHED = 2,
    ANY = 3,
}

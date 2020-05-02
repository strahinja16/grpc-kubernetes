// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var execution_pb = require('./execution_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_execution_AddProductTypeRequest(arg) {
  if (!(arg instanceof execution_pb.AddProductTypeRequest)) {
    throw new Error('Expected argument of type execution.AddProductTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execution_AddProductTypeRequest(buffer_arg) {
  return execution_pb.AddProductTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_execution_AddProductTypeResponse(arg) {
  if (!(arg instanceof execution_pb.AddProductTypeResponse)) {
    throw new Error('Expected argument of type execution.AddProductTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execution_AddProductTypeResponse(buffer_arg) {
  return execution_pb.AddProductTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_execution_ChangeOrderStateRequest(arg) {
  if (!(arg instanceof execution_pb.ChangeOrderStateRequest)) {
    throw new Error('Expected argument of type execution.ChangeOrderStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execution_ChangeOrderStateRequest(buffer_arg) {
  return execution_pb.ChangeOrderStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_execution_ChangeOrderStateResponse(arg) {
  if (!(arg instanceof execution_pb.ChangeOrderStateResponse)) {
    throw new Error('Expected argument of type execution.ChangeOrderStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execution_ChangeOrderStateResponse(buffer_arg) {
  return execution_pb.ChangeOrderStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_execution_FinishOrderRequest(arg) {
  if (!(arg instanceof execution_pb.FinishOrderRequest)) {
    throw new Error('Expected argument of type execution.FinishOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execution_FinishOrderRequest(buffer_arg) {
  return execution_pb.FinishOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_execution_FinishOrderResponse(arg) {
  if (!(arg instanceof execution_pb.FinishOrderResponse)) {
    throw new Error('Expected argument of type execution.FinishOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execution_FinishOrderResponse(buffer_arg) {
  return execution_pb.FinishOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_execution_GetOrderResponsesRequest(arg) {
  if (!(arg instanceof execution_pb.GetOrderResponsesRequest)) {
    throw new Error('Expected argument of type execution.GetOrderResponsesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execution_GetOrderResponsesRequest(buffer_arg) {
  return execution_pb.GetOrderResponsesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_execution_GetOrderResponsesResponse(arg) {
  if (!(arg instanceof execution_pb.GetOrderResponsesResponse)) {
    throw new Error('Expected argument of type execution.GetOrderResponsesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execution_GetOrderResponsesResponse(buffer_arg) {
  return execution_pb.GetOrderResponsesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_execution_GetOrdersRequest(arg) {
  if (!(arg instanceof execution_pb.GetOrdersRequest)) {
    throw new Error('Expected argument of type execution.GetOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execution_GetOrdersRequest(buffer_arg) {
  return execution_pb.GetOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_execution_GetOrdersResponse(arg) {
  if (!(arg instanceof execution_pb.GetOrdersResponse)) {
    throw new Error('Expected argument of type execution.GetOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execution_GetOrdersResponse(buffer_arg) {
  return execution_pb.GetOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_execution_PlaceOrderRequest(arg) {
  if (!(arg instanceof execution_pb.PlaceOrderRequest)) {
    throw new Error('Expected argument of type execution.PlaceOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execution_PlaceOrderRequest(buffer_arg) {
  return execution_pb.PlaceOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_execution_PlaceOrderResponse(arg) {
  if (!(arg instanceof execution_pb.PlaceOrderResponse)) {
    throw new Error('Expected argument of type execution.PlaceOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_execution_PlaceOrderResponse(buffer_arg) {
  return execution_pb.PlaceOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExecutionService = exports.ExecutionService = {
  getOrders: {
    path: '/execution.Execution/getOrders',
    requestStream: false,
    responseStream: false,
    requestType: execution_pb.GetOrdersRequest,
    responseType: execution_pb.GetOrdersResponse,
    requestSerialize: serialize_execution_GetOrdersRequest,
    requestDeserialize: deserialize_execution_GetOrdersRequest,
    responseSerialize: serialize_execution_GetOrdersResponse,
    responseDeserialize: deserialize_execution_GetOrdersResponse,
  },
  placeOrder: {
    path: '/execution.Execution/placeOrder',
    requestStream: false,
    responseStream: false,
    requestType: execution_pb.PlaceOrderRequest,
    responseType: execution_pb.PlaceOrderResponse,
    requestSerialize: serialize_execution_PlaceOrderRequest,
    requestDeserialize: deserialize_execution_PlaceOrderRequest,
    responseSerialize: serialize_execution_PlaceOrderResponse,
    responseDeserialize: deserialize_execution_PlaceOrderResponse,
  },
  changeOrderState: {
    path: '/execution.Execution/changeOrderState',
    requestStream: false,
    responseStream: false,
    requestType: execution_pb.ChangeOrderStateRequest,
    responseType: execution_pb.ChangeOrderStateResponse,
    requestSerialize: serialize_execution_ChangeOrderStateRequest,
    requestDeserialize: deserialize_execution_ChangeOrderStateRequest,
    responseSerialize: serialize_execution_ChangeOrderStateResponse,
    responseDeserialize: deserialize_execution_ChangeOrderStateResponse,
  },
  finishOrder: {
    path: '/execution.Execution/finishOrder',
    requestStream: false,
    responseStream: false,
    requestType: execution_pb.FinishOrderRequest,
    responseType: execution_pb.FinishOrderResponse,
    requestSerialize: serialize_execution_FinishOrderRequest,
    requestDeserialize: deserialize_execution_FinishOrderRequest,
    responseSerialize: serialize_execution_FinishOrderResponse,
    responseDeserialize: deserialize_execution_FinishOrderResponse,
  },
  addProductType: {
    path: '/execution.Execution/addProductType',
    requestStream: false,
    responseStream: false,
    requestType: execution_pb.AddProductTypeRequest,
    responseType: execution_pb.AddProductTypeResponse,
    requestSerialize: serialize_execution_AddProductTypeRequest,
    requestDeserialize: deserialize_execution_AddProductTypeRequest,
    responseSerialize: serialize_execution_AddProductTypeResponse,
    responseDeserialize: deserialize_execution_AddProductTypeResponse,
  },
  getOrderResponses: {
    path: '/execution.Execution/getOrderResponses',
    requestStream: false,
    responseStream: false,
    requestType: execution_pb.GetOrderResponsesRequest,
    responseType: execution_pb.GetOrderResponsesResponse,
    requestSerialize: serialize_execution_GetOrderResponsesRequest,
    requestDeserialize: deserialize_execution_GetOrderResponsesRequest,
    responseSerialize: serialize_execution_GetOrderResponsesResponse,
    responseDeserialize: deserialize_execution_GetOrderResponsesResponse,
  },
};

exports.ExecutionClient = grpc.makeGenericClientConstructor(ExecutionService);

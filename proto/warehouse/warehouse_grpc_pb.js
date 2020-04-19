// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var warehouse_pb = require('./warehouse_pb.js');

function serialize_warehouse_HelloRequest(arg) {
  if (!(arg instanceof warehouse_pb.HelloRequest)) {
    throw new Error('Expected argument of type warehouse.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_HelloRequest(buffer_arg) {
  return warehouse_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_HelloResponse(arg) {
  if (!(arg instanceof warehouse_pb.HelloResponse)) {
    throw new Error('Expected argument of type warehouse.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_HelloResponse(buffer_arg) {
  return warehouse_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WarehouseService = exports.WarehouseService = {
  sayHello: {
    path: '/warehouse.Warehouse/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: warehouse_pb.HelloRequest,
    responseType: warehouse_pb.HelloResponse,
    requestSerialize: serialize_warehouse_HelloRequest,
    requestDeserialize: deserialize_warehouse_HelloRequest,
    responseSerialize: serialize_warehouse_HelloResponse,
    responseDeserialize: deserialize_warehouse_HelloResponse,
  },
};

exports.WarehouseClient = grpc.makeGenericClientConstructor(WarehouseService);

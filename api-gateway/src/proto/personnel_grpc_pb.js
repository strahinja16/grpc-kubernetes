// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var personnel_pb = require('./personnel_pb.js');

function serialize_personnel_ChangeRoleRequest(arg) {
  if (!(arg instanceof personnel_pb.ChangeRoleRequest)) {
    throw new Error('Expected argument of type personnel.ChangeRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_personnel_ChangeRoleRequest(buffer_arg) {
  return personnel_pb.ChangeRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_personnel_ChangeRoleResponse(arg) {
  if (!(arg instanceof personnel_pb.ChangeRoleResponse)) {
    throw new Error('Expected argument of type personnel.ChangeRoleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_personnel_ChangeRoleResponse(buffer_arg) {
  return personnel_pb.ChangeRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_personnel_LoginRequest(arg) {
  if (!(arg instanceof personnel_pb.LoginRequest)) {
    throw new Error('Expected argument of type personnel.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_personnel_LoginRequest(buffer_arg) {
  return personnel_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_personnel_LoginResponse(arg) {
  if (!(arg instanceof personnel_pb.LoginResponse)) {
    throw new Error('Expected argument of type personnel.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_personnel_LoginResponse(buffer_arg) {
  return personnel_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_personnel_SignUpRequest(arg) {
  if (!(arg instanceof personnel_pb.SignUpRequest)) {
    throw new Error('Expected argument of type personnel.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_personnel_SignUpRequest(buffer_arg) {
  return personnel_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_personnel_SignUpResponse(arg) {
  if (!(arg instanceof personnel_pb.SignUpResponse)) {
    throw new Error('Expected argument of type personnel.SignUpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_personnel_SignUpResponse(buffer_arg) {
  return personnel_pb.SignUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PersonnelManagementService = exports.PersonnelManagementService = {
  signUp: {
    path: '/personnel.PersonnelManagement/signUp',
    requestStream: false,
    responseStream: false,
    requestType: personnel_pb.SignUpRequest,
    responseType: personnel_pb.SignUpResponse,
    requestSerialize: serialize_personnel_SignUpRequest,
    requestDeserialize: deserialize_personnel_SignUpRequest,
    responseSerialize: serialize_personnel_SignUpResponse,
    responseDeserialize: deserialize_personnel_SignUpResponse,
  },
  login: {
    path: '/personnel.PersonnelManagement/login',
    requestStream: false,
    responseStream: false,
    requestType: personnel_pb.LoginRequest,
    responseType: personnel_pb.LoginResponse,
    requestSerialize: serialize_personnel_LoginRequest,
    requestDeserialize: deserialize_personnel_LoginRequest,
    responseSerialize: serialize_personnel_LoginResponse,
    responseDeserialize: deserialize_personnel_LoginResponse,
  },
  changeRole: {
    path: '/personnel.PersonnelManagement/changeRole',
    requestStream: false,
    responseStream: false,
    requestType: personnel_pb.ChangeRoleRequest,
    responseType: personnel_pb.ChangeRoleResponse,
    requestSerialize: serialize_personnel_ChangeRoleRequest,
    requestDeserialize: deserialize_personnel_ChangeRoleRequest,
    responseSerialize: serialize_personnel_ChangeRoleResponse,
    responseDeserialize: deserialize_personnel_ChangeRoleResponse,
  },
};

exports.PersonnelManagementClient = grpc.makeGenericClientConstructor(PersonnelManagementService);

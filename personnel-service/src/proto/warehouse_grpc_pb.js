// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var warehouse_pb = require('./warehouse_pb.js');
var execution_pb = require('./execution_pb.js');

function serialize_warehouse_AddMaterialItemsRequest(arg) {
  if (!(arg instanceof warehouse_pb.AddMaterialItemsRequest)) {
    throw new Error('Expected argument of type warehouse.AddMaterialItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_AddMaterialItemsRequest(buffer_arg) {
  return warehouse_pb.AddMaterialItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_AddMaterialItemsResponse(arg) {
  if (!(arg instanceof warehouse_pb.AddMaterialItemsResponse)) {
    throw new Error('Expected argument of type warehouse.AddMaterialItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_AddMaterialItemsResponse(buffer_arg) {
  return warehouse_pb.AddMaterialItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_AddMaterialTypeRequest(arg) {
  if (!(arg instanceof warehouse_pb.AddMaterialTypeRequest)) {
    throw new Error('Expected argument of type warehouse.AddMaterialTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_AddMaterialTypeRequest(buffer_arg) {
  return warehouse_pb.AddMaterialTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_AddMaterialTypeResponse(arg) {
  if (!(arg instanceof warehouse_pb.AddMaterialTypeResponse)) {
    throw new Error('Expected argument of type warehouse.AddMaterialTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_AddMaterialTypeResponse(buffer_arg) {
  return warehouse_pb.AddMaterialTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_AddProductTypeAndMaterialSpecificationsRequest(arg) {
  if (!(arg instanceof warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest)) {
    throw new Error('Expected argument of type warehouse.AddProductTypeAndMaterialSpecificationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_AddProductTypeAndMaterialSpecificationsRequest(buffer_arg) {
  return warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_AddProductTypeAndMaterialSpecificationsResponse(arg) {
  if (!(arg instanceof warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse)) {
    throw new Error('Expected argument of type warehouse.AddProductTypeAndMaterialSpecificationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_AddProductTypeAndMaterialSpecificationsResponse(buffer_arg) {
  return warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_AddWarehouseRequest(arg) {
  if (!(arg instanceof warehouse_pb.AddWarehouseRequest)) {
    throw new Error('Expected argument of type warehouse.AddWarehouseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_AddWarehouseRequest(buffer_arg) {
  return warehouse_pb.AddWarehouseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_AddWarehouseResponse(arg) {
  if (!(arg instanceof warehouse_pb.AddWarehouseResponse)) {
    throw new Error('Expected argument of type warehouse.AddWarehouseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_AddWarehouseResponse(buffer_arg) {
  return warehouse_pb.AddWarehouseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_ChangeMaterialItemsStateRequest(arg) {
  if (!(arg instanceof warehouse_pb.ChangeMaterialItemsStateRequest)) {
    throw new Error('Expected argument of type warehouse.ChangeMaterialItemsStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_ChangeMaterialItemsStateRequest(buffer_arg) {
  return warehouse_pb.ChangeMaterialItemsStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_ChangeMaterialItemsStateResponse(arg) {
  if (!(arg instanceof warehouse_pb.ChangeMaterialItemsStateResponse)) {
    throw new Error('Expected argument of type warehouse.ChangeMaterialItemsStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_ChangeMaterialItemsStateResponse(buffer_arg) {
  return warehouse_pb.ChangeMaterialItemsStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_CheckOrderSpecsAndSetMaterialsRequest(arg) {
  if (!(arg instanceof warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest)) {
    throw new Error('Expected argument of type warehouse.CheckOrderSpecsAndSetMaterialsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_CheckOrderSpecsAndSetMaterialsRequest(buffer_arg) {
  return warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_CheckOrderSpecsAndSetMaterialsResponse(arg) {
  if (!(arg instanceof warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse)) {
    throw new Error('Expected argument of type warehouse.CheckOrderSpecsAndSetMaterialsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_CheckOrderSpecsAndSetMaterialsResponse(buffer_arg) {
  return warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_GetMaterialItemsByWarehouseRequest(arg) {
  if (!(arg instanceof warehouse_pb.GetMaterialItemsByWarehouseRequest)) {
    throw new Error('Expected argument of type warehouse.GetMaterialItemsByWarehouseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_GetMaterialItemsByWarehouseRequest(buffer_arg) {
  return warehouse_pb.GetMaterialItemsByWarehouseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_GetMaterialItemsByWarehouseResponse(arg) {
  if (!(arg instanceof warehouse_pb.GetMaterialItemsByWarehouseResponse)) {
    throw new Error('Expected argument of type warehouse.GetMaterialItemsByWarehouseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_GetMaterialItemsByWarehouseResponse(buffer_arg) {
  return warehouse_pb.GetMaterialItemsByWarehouseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_GetMaterialQuantitiesByNameAndStateRequest(arg) {
  if (!(arg instanceof warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest)) {
    throw new Error('Expected argument of type warehouse.GetMaterialQuantitiesByNameAndStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_GetMaterialQuantitiesByNameAndStateRequest(buffer_arg) {
  return warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_GetMaterialQuantitiesByNameAndStateResponse(arg) {
  if (!(arg instanceof warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse)) {
    throw new Error('Expected argument of type warehouse.GetMaterialQuantitiesByNameAndStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_GetMaterialQuantitiesByNameAndStateResponse(buffer_arg) {
  return warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_GetWarehouseDashboardContentRequest(arg) {
  if (!(arg instanceof warehouse_pb.GetWarehouseDashboardContentRequest)) {
    throw new Error('Expected argument of type warehouse.GetWarehouseDashboardContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_GetWarehouseDashboardContentRequest(buffer_arg) {
  return warehouse_pb.GetWarehouseDashboardContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_warehouse_GetWarehouseDashboardContentResponse(arg) {
  if (!(arg instanceof warehouse_pb.GetWarehouseDashboardContentResponse)) {
    throw new Error('Expected argument of type warehouse.GetWarehouseDashboardContentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_warehouse_GetWarehouseDashboardContentResponse(buffer_arg) {
  return warehouse_pb.GetWarehouseDashboardContentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WarehouseAndMaterialsService = exports.WarehouseAndMaterialsService = {
  addMaterialType: {
    path: '/warehouse.WarehouseAndMaterials/addMaterialType',
    requestStream: false,
    responseStream: false,
    requestType: warehouse_pb.AddMaterialTypeRequest,
    responseType: warehouse_pb.AddMaterialTypeResponse,
    requestSerialize: serialize_warehouse_AddMaterialTypeRequest,
    requestDeserialize: deserialize_warehouse_AddMaterialTypeRequest,
    responseSerialize: serialize_warehouse_AddMaterialTypeResponse,
    responseDeserialize: deserialize_warehouse_AddMaterialTypeResponse,
  },
  addMaterialItems: {
    path: '/warehouse.WarehouseAndMaterials/addMaterialItems',
    requestStream: false,
    responseStream: false,
    requestType: warehouse_pb.AddMaterialItemsRequest,
    responseType: warehouse_pb.AddMaterialItemsResponse,
    requestSerialize: serialize_warehouse_AddMaterialItemsRequest,
    requestDeserialize: deserialize_warehouse_AddMaterialItemsRequest,
    responseSerialize: serialize_warehouse_AddMaterialItemsResponse,
    responseDeserialize: deserialize_warehouse_AddMaterialItemsResponse,
  },
  getMaterialItemsByWarehouse: {
    path: '/warehouse.WarehouseAndMaterials/getMaterialItemsByWarehouse',
    requestStream: false,
    responseStream: false,
    requestType: warehouse_pb.GetMaterialItemsByWarehouseRequest,
    responseType: warehouse_pb.GetMaterialItemsByWarehouseResponse,
    requestSerialize: serialize_warehouse_GetMaterialItemsByWarehouseRequest,
    requestDeserialize: deserialize_warehouse_GetMaterialItemsByWarehouseRequest,
    responseSerialize: serialize_warehouse_GetMaterialItemsByWarehouseResponse,
    responseDeserialize: deserialize_warehouse_GetMaterialItemsByWarehouseResponse,
  },
  addWarehouse: {
    path: '/warehouse.WarehouseAndMaterials/addWarehouse',
    requestStream: false,
    responseStream: false,
    requestType: warehouse_pb.AddWarehouseRequest,
    responseType: warehouse_pb.AddWarehouseResponse,
    requestSerialize: serialize_warehouse_AddWarehouseRequest,
    requestDeserialize: deserialize_warehouse_AddWarehouseRequest,
    responseSerialize: serialize_warehouse_AddWarehouseResponse,
    responseDeserialize: deserialize_warehouse_AddWarehouseResponse,
  },
  addProductTypeAndMaterialSpecifications: {
    path: '/warehouse.WarehouseAndMaterials/addProductTypeAndMaterialSpecifications',
    requestStream: false,
    responseStream: false,
    requestType: warehouse_pb.AddProductTypeAndMaterialSpecificationsRequest,
    responseType: warehouse_pb.AddProductTypeAndMaterialSpecificationsResponse,
    requestSerialize: serialize_warehouse_AddProductTypeAndMaterialSpecificationsRequest,
    requestDeserialize: deserialize_warehouse_AddProductTypeAndMaterialSpecificationsRequest,
    responseSerialize: serialize_warehouse_AddProductTypeAndMaterialSpecificationsResponse,
    responseDeserialize: deserialize_warehouse_AddProductTypeAndMaterialSpecificationsResponse,
  },
  checkOrderSpecsAndSetMaterials: {
    path: '/warehouse.WarehouseAndMaterials/checkOrderSpecsAndSetMaterials',
    requestStream: false,
    responseStream: false,
    requestType: warehouse_pb.CheckOrderSpecsAndSetMaterialsRequest,
    responseType: warehouse_pb.CheckOrderSpecsAndSetMaterialsResponse,
    requestSerialize: serialize_warehouse_CheckOrderSpecsAndSetMaterialsRequest,
    requestDeserialize: deserialize_warehouse_CheckOrderSpecsAndSetMaterialsRequest,
    responseSerialize: serialize_warehouse_CheckOrderSpecsAndSetMaterialsResponse,
    responseDeserialize: deserialize_warehouse_CheckOrderSpecsAndSetMaterialsResponse,
  },
  getMaterialQuantitiesByNameAndState: {
    path: '/warehouse.WarehouseAndMaterials/getMaterialQuantitiesByNameAndState',
    requestStream: false,
    responseStream: false,
    requestType: warehouse_pb.GetMaterialQuantitiesByNameAndStateRequest,
    responseType: warehouse_pb.GetMaterialQuantitiesByNameAndStateResponse,
    requestSerialize: serialize_warehouse_GetMaterialQuantitiesByNameAndStateRequest,
    requestDeserialize: deserialize_warehouse_GetMaterialQuantitiesByNameAndStateRequest,
    responseSerialize: serialize_warehouse_GetMaterialQuantitiesByNameAndStateResponse,
    responseDeserialize: deserialize_warehouse_GetMaterialQuantitiesByNameAndStateResponse,
  },
  changeMaterialItemsState: {
    path: '/warehouse.WarehouseAndMaterials/ChangeMaterialItemsState',
    requestStream: false,
    responseStream: false,
    requestType: warehouse_pb.ChangeMaterialItemsStateRequest,
    responseType: warehouse_pb.ChangeMaterialItemsStateResponse,
    requestSerialize: serialize_warehouse_ChangeMaterialItemsStateRequest,
    requestDeserialize: deserialize_warehouse_ChangeMaterialItemsStateRequest,
    responseSerialize: serialize_warehouse_ChangeMaterialItemsStateResponse,
    responseDeserialize: deserialize_warehouse_ChangeMaterialItemsStateResponse,
  },
  getWarehouseDashboardContent: {
    path: '/warehouse.WarehouseAndMaterials/GetWarehouseDashboardContent',
    requestStream: false,
    responseStream: false,
    requestType: warehouse_pb.GetWarehouseDashboardContentRequest,
    responseType: warehouse_pb.GetWarehouseDashboardContentResponse,
    requestSerialize: serialize_warehouse_GetWarehouseDashboardContentRequest,
    requestDeserialize: deserialize_warehouse_GetWarehouseDashboardContentRequest,
    responseSerialize: serialize_warehouse_GetWarehouseDashboardContentResponse,
    responseDeserialize: deserialize_warehouse_GetWarehouseDashboardContentResponse,
  },
};

exports.WarehouseAndMaterialsClient = grpc.makeGenericClientConstructor(WarehouseAndMaterialsService);

import * as grpc from 'grpc';

import {
    AddMaterialItemsRequest,
    AddMaterialItemsResponse,
    AddMaterialTypeRequest,
    AddMaterialTypeResponse,
    AddProductTypeAndMaterialSpecificationsRequest,
    AddProductTypeAndMaterialSpecificationsResponse,
    AddWarehouseRequest,
    AddWarehouseResponse,
    SetOrderForMaterialItemsRequest,
    SetOrderForMaterialItemsResponse,
} from '../proto/warehouse/warehouse_pb';
import { WarehouseAndMaterialsService, IWarehouseAndMaterialsServer } from '../proto/warehouse/warehouse_grpc_pb';
import {warehouseRepository} from "../db/repositories/warehouse";
import {materialItemMapper} from "../mappers/material-item";
import {warehouseMapper} from "../mappers/warehouse";

class WarehouseServer implements IWarehouseAndMaterialsServer {

    /**
     * Creates new MaterialType
     * @param call
     * @param callback
     */
    addMaterialType = async (
        call: grpc.ServerUnaryCall<AddMaterialTypeRequest>,
        callback: grpc.sendUnaryData<AddMaterialTypeResponse>
    ): Promise<void> => {
        try {
            const savedMaterialType = await warehouseRepository.addMaterialType({
                name: call.request.getName(),
            });

            const response = new AddMaterialTypeResponse();
            response.setId(savedMaterialType.id);
            response.setName(savedMaterialType.name);

            callback(null, response);
        }catch (e) {
            console.log(`warehouse-service: WarehouseServer.addMaterialType error: ${e.toString()}`)
            callback(e.toString(), null);
        }
    };

    /**
     * Creates new MaterialItems
     * @param call
     * @param callback
     */
    addMaterialItems = async (
        call: grpc.ServerUnaryCall<AddMaterialItemsRequest>,
        callback: grpc.sendUnaryData<AddMaterialItemsResponse>
    ): Promise<void> => {
        try {
            const tsMaterialItems = call.request.getMaterialitemsList().map(mi => materialItemMapper.toTs(mi));
            const savedMaterialItems = await warehouseRepository.addMaterialItems(tsMaterialItems);

            const response = new AddMaterialItemsResponse();
            response.setMaterialitemsList(savedMaterialItems.map(mi => materialItemMapper.toGrpc(mi)));

            callback(null, response);
        }catch (e) {
            console.log(`warehouse-service: WarehouseServer.addMaterialItems error: ${e.toString()}`);
            callback(e.toString(), null);
        }
    };

    /**
     * Creates new Warehouse
     * @param call
     * @param callback
     */
    addWarehouse = async (
        call: grpc.ServerUnaryCall<AddWarehouseRequest>,
        callback: grpc.sendUnaryData<AddWarehouseResponse>
    ): Promise<void> => {
        try {
            const tsWarehouse = warehouseMapper.toTs(call.request.getWarehouse());
            const savedWarehouse = await warehouseRepository.addWarehouse(tsWarehouse);

            const response = new AddWarehouseResponse();
            response.setWarehouse(warehouseMapper.toGrpc(savedWarehouse));

            callback(null, response);
        }catch (e) {
            console.log(`warehouse-service: WarehouseServer.addWarehouse error: ${e.toString()}`);
            callback(e.toString(), null);
        }
    };

    /**
     * Creates new ProductType and his MaterialSpecifications
     * @param call
     * @param callback
     */
    addProductTypeAndMaterialSpecifications = async (
        call: grpc.ServerUnaryCall<AddProductTypeAndMaterialSpecificationsRequest>,
        callback: grpc.sendUnaryData<AddProductTypeAndMaterialSpecificationsResponse>
    ): Promise<void> => {

        const response = new AddProductTypeAndMaterialSpecificationsResponse();

        callback(null, response);
    };

    /**
     * Sets order serial for MaterialItems
     * @param call
     * @param callback
     */
    setOrderForMaterialItems = async (
        call: grpc.ServerUnaryCall<SetOrderForMaterialItemsRequest>,
        callback: grpc.sendUnaryData<SetOrderForMaterialItemsResponse>
    ): Promise<void> => {

        const response = new SetOrderForMaterialItemsResponse();

        callback(null, response);
    };
}

export default {
    service: WarehouseAndMaterialsService,
    implementation: new WarehouseServer(),
};

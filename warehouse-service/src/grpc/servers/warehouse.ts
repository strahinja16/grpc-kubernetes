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
    ChangeMaterialItemsStateRequest,
    ChangeMaterialItemsStateResponse,
    CheckOrderSpecsAndSetMaterialsRequest,
    CheckOrderSpecsAndSetMaterialsResponse, GetMaterialItemsByWarehouseRequest, GetMaterialItemsByWarehouseResponse,
    GetMaterialQuantitiesByNameAndStateRequest,
    GetMaterialQuantitiesByNameAndStateResponse,
    GetWarehouseDashboardContentRequest,
    GetWarehouseDashboardContentResponse,
    MaterialQuantityByNameAndState,
    MaterialState, WarehouseQuantity
} from "../../proto/warehouse_pb";
import { WarehouseAndMaterialsService, IWarehouseAndMaterialsServer } from '../../proto/warehouse_grpc_pb';
import {warehouseRepository} from "../../db/repositories";
import {materialItemMapper} from "../../mappers/material-item";
import { materialTypeMapper } from '../../mappers/material-type';
import {warehouseMapper} from "../../mappers/warehouse";
import {productTypeMapper} from "../../mappers/product-type";
import {materialSpecificationMapper} from "../../mappers/material-specification";
import {orderSpecMapper} from "../../mappers/order-specification";
import {MaterialState as MaterialStateEnum } from "../../db/entities/material-item";
import { executionGrpcClient } from "../clients/execution";

class WarehouseServer implements IWarehouseAndMaterialsServer {

    /**
     * Changes the state of material items with given order serial
     * @param call
     * @param callback
     */
    changeMaterialItemsState = async (
        call: grpc.ServerUnaryCall<ChangeMaterialItemsStateRequest>,
        callback: grpc.sendUnaryData<ChangeMaterialItemsStateResponse>
    ): Promise<void> => {
        try {
            const orderSerial = call.request.getOrderserial();
            const materialState = (call.request.getMaterialstate() as number) as MaterialStateEnum;

            const stateChanged = await warehouseRepository.changeMaterialItemsState(orderSerial, materialState);
            if (!stateChanged) {
                throw new Error('Material items state change failed.');
            }

            const response = new ChangeMaterialItemsStateResponse();
            response.setStatechangecompleted(true);

            callback(null, response);
        } catch (error) {
            console.log(`[Warehouse.changeMaterialItemsState] ${error.message}`);
            callback(error, null);
        }
    };

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
            response.setMaterialtype(materialTypeMapper.toGrpc(savedMaterialType));

            callback(null, response);
        } catch (error) {
            console.log(`[Warehouse.addMaterialType] ${error.message}`);
            callback(error, null);
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
            const tsMaterialItems = call.request.getMaterialitemsList().map(mi => materialItemMapper.addMaterialItemDtoToTs(mi));
            const savedMaterialItems = await warehouseRepository.addMaterialItems(tsMaterialItems);

            const response = new AddMaterialItemsResponse();
            response.setMaterialitemsList(savedMaterialItems.map(mi => materialItemMapper.toGrpc(mi)));

            callback(null, response);
        } catch (error) {
            console.log(`[Warehouse.addMaterialItems] ${error.message}`);
            callback(error, null);
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
            const tsWarehouse = warehouseMapper.addWarehouseDtoToTs(call.request.getWarehouse());
            const savedWarehouse = await warehouseRepository.addWarehouse(tsWarehouse);

            const response = new AddWarehouseResponse();
            response.setWarehouse(warehouseMapper.toGrpc(savedWarehouse));

            callback(null, response);
        } catch (error) {
            console.log(`[Warehouse.addWarehouse] ${error.message}`);
            callback(error, null);
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
        try {
            const tsProductType = productTypeMapper.addProductTypeDtoToTs(call.request.getProducttype());
            const executionProductType = await executionGrpcClient.addProductType(tsProductType);
            if (!executionProductType.id) {
                callback(new Error('Adding the product type in execution failed'), null);
            }

            const tsMaterialSpecs = call.request.getMaterialspecsList()
                .map(ms => materialSpecificationMapper.addMaterialSpecificationDtoToTs(ms));
            const {materialSpecs, productType} = await warehouseRepository
                .addProductTypeAndMaterialSpecifications(tsProductType, tsMaterialSpecs);

            const response = new AddProductTypeAndMaterialSpecificationsResponse();
            response.setProducttype(productTypeMapper.toGrpc(productType));
            response.setMaterialspecsList(materialSpecs.map(ms => materialSpecificationMapper.toGrpc(ms)));

            callback(null, response);
        } catch (error) {
            console.log(`[Warehouse.addProductTypeAndMaterialSpecifications] ${error.message}`);
            callback(error, null);
        }
    };

    /**
     * Checks order specs and sets order serial for materials consumed
     * @param call
     * @param callback
     */
    checkOrderSpecsAndSetMaterials = async (
        call: grpc.ServerUnaryCall<CheckOrderSpecsAndSetMaterialsRequest>,
        callback: grpc.sendUnaryData<CheckOrderSpecsAndSetMaterialsResponse>
    ): Promise<void> => {
        try {
            const orderSpecs = orderSpecMapper.orderSpecificationDtoToTs(call.request.getOrder().getOrderspecsList());
            await warehouseRepository
                .checkOrderSpecsAndSetMaterials(call.request.getOrder().getSerial(), orderSpecs);

            const response = new CheckOrderSpecsAndSetMaterialsResponse();
            response.setCheckpassed(true);

            callback(null, response);
        } catch (error) {
            console.log(`[Warehouse.checkOrderSpecsAndSetMaterials] ${error.message}`);
            callback(error, null);
        }
    };

    /**
     * Gets material quantities grouped by material name, state and warehouse
     * @param call
     * @param callback
     */
    getMaterialQuantitiesByNameAndState = async (
        call: grpc.ServerUnaryCall<GetMaterialQuantitiesByNameAndStateRequest>,
        callback: grpc.sendUnaryData<GetMaterialQuantitiesByNameAndStateResponse>
    ): Promise<void> => {
        try {
            const materialQuantities = await warehouseRepository.getMaterialQuantitiesByNameAndState();

            const response = new GetMaterialQuantitiesByNameAndStateResponse();
            response.setMaterialquantitiesList(materialQuantities.map(mq => {
                const matQuantity = new MaterialQuantityByNameAndState();
                matQuantity.setMaterialname(mq.materialName);
                matQuantity.setMaterialstate((mq.materialState as number) as MaterialState);
                matQuantity.setQuantity(mq.quantity);
                matQuantity.setWarehouseid(mq.warehouseId);

                return matQuantity;
            }));

            callback(null, response);
        } catch (error) {
            console.log(`[Warehouse.getMaterialQuantitiesByNameAndState] ${error.message}`);
            callback(error, null);
        }
    };

    /**
     * Gets warehouses, material distribution across warehouses, material types and product types
     * @param call
     * @param callback
     */
    getWarehouseDashboardContent = async (
        call: grpc.ServerUnaryCall<GetWarehouseDashboardContentRequest>,
        callback: grpc.sendUnaryData<GetWarehouseDashboardContentResponse>
    ): Promise<void> => {
        try {
            const content = await warehouseRepository.getWarehouseDashboardContent();

            const response = new GetWarehouseDashboardContentResponse();
            response.setWarehousesList(content.warehouses.map(wh => warehouseMapper.toGrpc(wh)));
            response.setMaterialtypesList(content.materialTypes.map(mt => materialTypeMapper.toGrpc(mt)));
            response.setProducttypesList(content.productTypes.map(pt => productTypeMapper.toGrpc(pt)));
            response.setWarehousequantitiesList(content.warehouseQuantities.map(whq => {
                const warehouseQuantity = new WarehouseQuantity();
                warehouseQuantity.setCount(whq.count);
                warehouseQuantity.setMaterialname(whq.materialName);
                warehouseQuantity.setWarehouseid(whq.warehouseId);

                return warehouseQuantity;
            }));

            callback(null, response);
        } catch (error) {
            console.log(`[Warehouse.getWarehouseDashboardContent] ${error.message}`);
            callback(error, null);
        }
    };

    /**
     * Gets material items by warehouse id
     * @param call
     * @param callback
     */
    getMaterialItemsByWarehouse = async (
        call: grpc.ServerUnaryCall<GetMaterialItemsByWarehouseRequest>,
        callback: grpc.sendUnaryData<GetMaterialItemsByWarehouseResponse>
    ): Promise<void> => {
        try {
            const materialItems = await warehouseRepository.getMaterialItemsByWarehouseId(call.request.getWarehouseid());

            const response = new GetMaterialItemsByWarehouseResponse();
            response.setMaterialitemsList(materialItems.map(mi => materialItemMapper.toGrpc(mi)));
            callback(null, response);
        } catch (error) {
            console.log(`[Warehouse.getMaterialItemsByWarehouse] ${error.message}`);
            callback(error, null);
        }
    };
}

export default {
    service: WarehouseAndMaterialsService,
    implementation: new WarehouseServer(),
};

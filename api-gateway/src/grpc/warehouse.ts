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
    GetMaterialQuantitiesByNameAndStateRequest, GetMaterialQuantitiesByNameAndStateResponse,
    SetOrderForMaterialItemsRequest,
    SetOrderForMaterialItemsResponse,
} from '../proto/warehouse/warehouse_pb';
import { WarehouseAndMaterialsClient, IWarehouseAndMaterialsClient } from '../proto/warehouse/warehouse_grpc_pb';
import {IMaterialType} from "../models/warehouse/material-type";
import {
    InputAddMaterialItems,
    IMaterialItem as IMaterialItem,
    InputSetOrderForMaterialItems, MaterialStateEnum
} from "../models/warehouse/material-item";
import {InputAddWarehouse, IWarehouse} from "../models/warehouse/warehouse";
import {
    InputAddProductTypeAndMaterialSpecifications,
    ProductTypeAndMaterialSpecifications
} from "../models/warehouse/product-type";
import { warehouseMappers } from "../mappers/warehouse";
import {IMaterialQuantityByNameAndState} from "../models/warehouse/custom";

const {
    materialItemMapper,
    materialSpecificationMapper,
    materialTypeMapper,
    productTypeMapper,
    warehouseMapper
} = warehouseMappers;

class WarehouseGrpcClient  {
    warehouseClient: IWarehouseAndMaterialsClient;

    constructor() {
        this.warehouseClient = new WarehouseAndMaterialsClient('warehouse-service:50051', grpc.credentials.createInsecure());
    }

    addMaterialType(input: any): Promise<IMaterialType> {
        return new Promise((resolve ,reject) => {
            const request = new AddMaterialTypeRequest();
            request.setName(input.name);

            this.warehouseClient.addMaterialType(
                request,
                (error: (grpc.ServiceError | null), response: AddMaterialTypeResponse) => {
                    if (error != null) {
                        reject(`api-gateway: WarehouseService.addMaterialType ${error.toString()}`);
                    }

                    resolve(materialTypeMapper.toGql(response.getMaterialtype()!));
                });
        });
    }

    addMaterialItems(input: InputAddMaterialItems): Promise<IMaterialItem[]> {
        return new Promise((resolve ,reject) => {
            const request = new AddMaterialItemsRequest();
            request.setMaterialitemsList(input.materialItems.map(mi => materialItemMapper.addMaterialItemDtoToGrpc(mi)));

            this.warehouseClient.addMaterialItems(
                request,
                (error: (grpc.ServiceError | null), response: AddMaterialItemsResponse) => {
                    if (error != null) {
                        reject(`api-gateway: WarehouseService.addMaterialItems ${error.toString()}`);
                    }

                    const savedMaterialItems = response.getMaterialitemsList().map(mi => materialItemMapper.toGql(mi));
                    resolve(savedMaterialItems);
                });
        });
    }

    addWarehouse(input: InputAddWarehouse): Promise<IWarehouse> {
        return new Promise((resolve ,reject) => {
            const request = new AddWarehouseRequest();
            request.setWarehouse(warehouseMapper.addWarehouseDtoToGrpc(input.warehouse));

            this.warehouseClient.addWarehouse(
                request,
                (error: (grpc.ServiceError | null), response: AddWarehouseResponse) => {
                    if (error != null) {
                        reject(`api-gateway: WarehouseService.addWarehouse ${error.toString()}`);
                    }
                    const savedWarehouse = warehouseMapper.toGql(response.getWarehouse()!);
                    resolve(savedWarehouse);
                });
        });
    }

    addProductTypeAndMaterialSpecifications(input: InputAddProductTypeAndMaterialSpecifications)
        : Promise<ProductTypeAndMaterialSpecifications> {
        return new Promise((resolve ,reject) => {
            const request = new AddProductTypeAndMaterialSpecificationsRequest();
            request.setProducttype(productTypeMapper.addProductTypeDtoToGrpc(input.productType));
            request.setMaterialspecsList(input.materialSpecs.map(ms => materialSpecificationMapper.addMaterialSpecDtoToGrpc(ms)));

            this.warehouseClient.addProductTypeAndMaterialSpecifications(
                request,
                (error: (grpc.ServiceError | null), response: AddProductTypeAndMaterialSpecificationsResponse) => {
                    if (error != null) {
                        reject(`api-gateway: WarehouseService.addProductTypeAndMaterialSpecifications ${error.toString()}`);
                    }

                    resolve({
                        productType: productTypeMapper.toGql(response.getProducttype()!),
                        materialSpecs: response.getMaterialspecsList().map(ms => materialSpecificationMapper.toGql(ms)),
                    });
                });
        });
    }

    setOrderForMaterialItems(input: InputSetOrderForMaterialItems)
        : Promise<IMaterialItem[]> {
        return new Promise((resolve ,reject) => {
            const request = new SetOrderForMaterialItemsRequest();
            request.setMaterialitemidsList(input.materialItemIds);
            request.setOrderserial(input.orderSerial);

            this.warehouseClient.setOrderForMaterialItems(
                request,
                (error: (grpc.ServiceError | null), response: SetOrderForMaterialItemsResponse) => {
                    if (error != null) {
                        reject(`api-gateway: WarehouseService.setOrderForMaterialItems ${error.toString()}`);
                    }

                    resolve(response.getMaterialitemsList().map(mi => materialItemMapper.toGql(mi)));
                });
        });
    }

    getOrderForMaterialItems()
        : Promise<IMaterialQuantityByNameAndState[]> {
        return new Promise((resolve ,reject) => {
            const request = new GetMaterialQuantitiesByNameAndStateRequest();

            this.warehouseClient.getMaterialQuantitiesByNameAndState(
                request,
                (error: (grpc.ServiceError | null), response: GetMaterialQuantitiesByNameAndStateResponse) => {
                    if (error != null) {
                        reject(`api-gateway: WarehouseService.getOrderForMaterialItems ${error.toString()}`);
                    }

                    resolve(
                        response.getMaterialquantitiesList().map(mq => {
                            return {
                                materialName: mq.getMaterialname(),
                                materialState: (mq.getMaterialstate() as number) as MaterialStateEnum,
                                quantity: mq.getQuantity(),
                                warehouseId: mq.getWarehouseid(),
                            } as IMaterialQuantityByNameAndState
                    }));
                });
        });
    }
}

export default new WarehouseGrpcClient();

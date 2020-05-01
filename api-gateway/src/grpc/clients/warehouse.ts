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
    GetMaterialQuantitiesByNameAndStateRequest,
    GetMaterialQuantitiesByNameAndStateResponse,
    GetWarehouseDashboardContentRequest,
    GetWarehouseDashboardContentResponse,
    GetMaterialItemsByWarehouseRequest,
    GetMaterialItemsByWarehouseResponse
} from '../../proto/warehouse_pb';
import { WarehouseAndMaterialsClient, IWarehouseAndMaterialsClient } from '../../proto/warehouse_grpc_pb';
import {IMaterialType} from "../../graphql/models/warehouse/material-type";
import {
    InputAddMaterialItems,
    IMaterialItem as IMaterialItem,
    MaterialStateEnum
} from "../../graphql/models/warehouse/material-item";
import {InputAddWarehouse, IWarehouse} from "../../graphql/models/warehouse/warehouse";
import {
    InputAddProductTypeAndMaterialSpecifications,
    ProductTypeAndMaterialSpecifications
} from "../../graphql/models/warehouse/product-type";
import { warehouseMappers } from "../../mappers/warehouse";
import {IMaterialQuantityByNameAndState, IWarehouseDashboardContent} from "../../graphql/models/warehouse/custom";
import {config} from "../../config";

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
        this.warehouseClient = new WarehouseAndMaterialsClient(config.warehouseServiceGrpcUrl!, grpc.credentials.createInsecure());
    }

    addMaterialType(input: any): Promise<IMaterialType> {
        return new Promise((resolve ,reject) => {
            const request = new AddMaterialTypeRequest();
            request.setName(input.name);

            this.warehouseClient.addMaterialType(
                request,
                (error: (grpc.ServiceError | null), response: AddMaterialTypeResponse) => {
                    if (error != null) {
                        reject(error.details);
                        return;
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
                        reject(error.details);
                        return;
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
                        reject(error.details);
                        return;
                    }

                    resolve(warehouseMapper.toGql(response.getWarehouse()!));
                });
        });
    }

    addProductTypeAndMaterialSpecifications(input: InputAddProductTypeAndMaterialSpecifications)
        : Promise<ProductTypeAndMaterialSpecifications> {
        return new Promise((resolve ,reject) => {
            if (!input.materialSpecs.length) {
              reject(new Error('Material specs are required'));
              return;
            }
            const request = new AddProductTypeAndMaterialSpecificationsRequest();
            request.setProducttype(productTypeMapper.addProductTypeDtoToGrpc(input.productType));
            request.setMaterialspecsList(input.materialSpecs.map(ms => materialSpecificationMapper.addMaterialSpecDtoToGrpc(ms)));

            this.warehouseClient.addProductTypeAndMaterialSpecifications(
                request,
                (error: (grpc.ServiceError | null), response: AddProductTypeAndMaterialSpecificationsResponse) => {
                    if (error != null) {
                        reject(error.details);
                        return;
                    }

                    resolve({
                        productType: productTypeMapper.toGql(response.getProducttype()!),
                        materialSpecs: response.getMaterialspecsList().map(ms => materialSpecificationMapper.toGql(ms)),
                    });
                });
        });
    }

    getMaterialQuantitiesByNameAndState()
        : Promise<IMaterialQuantityByNameAndState[]> {
        return new Promise((resolve ,reject) => {
            const request = new GetMaterialQuantitiesByNameAndStateRequest();

            this.warehouseClient.getMaterialQuantitiesByNameAndState(
                request,
                (error: (grpc.ServiceError | null), response: GetMaterialQuantitiesByNameAndStateResponse) => {
                    if (error != null) {
                        reject(error.details);
                        return;
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

    getWarehouseDashboardContent()
        : Promise<IWarehouseDashboardContent> {
        return new Promise((resolve ,reject) => {
            const request = new GetWarehouseDashboardContentRequest();

            this.warehouseClient.getWarehouseDashboardContent(
                request,
                (error: (grpc.ServiceError | null), response: GetWarehouseDashboardContentResponse) => {
                    if (error != null) {
                        reject(error.details);
                        return;
                    }

                    resolve(warehouseMapper.warehouseDashboardContentToGql(response));
                });
        });
    }

    getMaterialItems(warehouseId: number) {
        return new Promise((resolve ,reject) => {
            const request = new GetMaterialItemsByWarehouseRequest();
            request.setWarehouseid(warehouseId);
            this.warehouseClient.getMaterialItemsByWarehouse(
                request,
                (error: (grpc.ServiceError | null), response: GetMaterialItemsByWarehouseResponse) => {
                    if (error != null) {
                        reject(error);
                        return;
                    }

                    resolve(response.getMaterialitemsList().map(mi => materialItemMapper.toGql(mi)));
                });
        });
    }
}

export const warehouseGrpcClient = new WarehouseGrpcClient();

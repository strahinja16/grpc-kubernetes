import * as grpc from 'grpc';
import {
    AddMaterialItemsRequest,
    AddMaterialItemsResponse,
    AddMaterialTypeRequest,
    AddMaterialTypeResponse,
    AddWarehouseRequest,
    AddWarehouseResponse,
} from '../proto/warehouse/warehouse_pb';
import { WarehouseAndMaterialsClient, IWarehouseAndMaterialsClient } from '../proto/warehouse/warehouse_grpc_pb';
import {InputAddMaterialType, IMaterialType} from "../models/material-type";
import {InputAddMaterialItems, IMaterialItem as IMaterialItem} from "../models/material-item";
import {InputAddWarehouse, IWarehouse} from "../models/warehouse";
import {materialItemMapper} from "../mappers/material-item";
import {warehouseMapper} from "../mappers/warehouse";

class WarehouseGrpcClient  {
    warehouseClient: IWarehouseAndMaterialsClient;

    constructor() {
        this.warehouseClient = new WarehouseAndMaterialsClient('warehouse-service:50051', grpc.credentials.createInsecure());
    }

    addMaterialType(input: InputAddMaterialType): Promise<IMaterialType> {
        return new Promise((resolve ,reject) => {
            const request = new AddMaterialTypeRequest();
            request.setName(input.name);

            this.warehouseClient.addMaterialType(
                request,
                (error: (grpc.ServiceError | null), response: AddMaterialTypeResponse) => {
                    if (error != null) {
                        reject(`api-gateway: WarehouseService.addMaterialType ${error.toString()}`);
                    }

                    resolve({
                        id: response.getId(),
                        name: response.getName(),
                    });
                });

        });
    }

    addMaterialItems(input: InputAddMaterialItems): Promise<IMaterialItem[]> {
        return new Promise((resolve ,reject) => {
            const request = new AddMaterialItemsRequest();
            request.setMaterialitemsList(input.materialItems.map(mi => materialItemMapper.toGrpc(mi)));

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
            request.setWarehouse(warehouseMapper.toGrpc(input.warehouse));

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
}

export default new WarehouseGrpcClient();

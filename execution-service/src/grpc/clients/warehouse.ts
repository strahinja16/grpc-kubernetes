import * as grpc from 'grpc';
import { WarehouseAndMaterialsClient, IWarehouseAndMaterialsClient } from '../../proto/warehouse_grpc_pb';
import {
    ChangeMaterialItemsStateRequest,
    CheckOrderSpecsAndSetMaterialsRequest,
    CheckOrderSpecsAndSetMaterialsResponse,
    ChangeMaterialItemsStateResponse
} from '../../proto/warehouse_pb';

class WarehouseGrpcClient  {
    warehouseClient: IWarehouseAndMaterialsClient;

    constructor() {
        this.warehouseClient = new WarehouseAndMaterialsClient('warehouse-service:50051', grpc.credentials.createInsecure());
    }

    checkOrderSpecsAndSetMaterials(input: CheckOrderSpecsAndSetMaterialsRequest): Promise<boolean> {
        return new Promise((resolve ,reject) => {
            this.warehouseClient.checkOrderSpecsAndSetMaterials(
                input,
                (error: (grpc.ServiceError | null), response: CheckOrderSpecsAndSetMaterialsResponse) => {
                    if (error != null) {
                        reject(`api-gateway: WarehouseService.checkOrderSpecsAndSetMaterials ${error.toString()}`);
                    }

                    resolve(response.getCheckpassed());
                });
        });
    }

    changeMaterialItemsState(input: ChangeMaterialItemsStateRequest): Promise<boolean> {
        return new Promise((resolve ,reject) => {
            this.warehouseClient.changeMaterialItemsState(
                input,
                (error: (grpc.ServiceError | null), response: ChangeMaterialItemsStateResponse) => {
                    if (error != null) {
                        reject(`api-gateway: WarehouseService.changeMaterialItemsState ${error.toString()}`);
                    }

                    resolve(response.getStatechangecompleted());
                });
        });
    }
}

export default new WarehouseGrpcClient();

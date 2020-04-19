import * as grpc from 'grpc';
import { HelloRequest, HelloResponse } from '../proto/warehouse/warehouse_pb';
import { WarehouseClient, IWarehouseClient } from '../proto/warehouse/warehouse_grpc_pb';

class WarehouseGrpcClient  {
    warehouseClient: IWarehouseClient;

    constructor() {
        this.warehouseClient = new WarehouseClient('warehouse-service:50051', grpc.credentials.createInsecure());
    }

    helloWorld(): Promise<string> {
        return new Promise((resolve ,reject) => {
            const request = new HelloRequest();
            request.setName('Test');

            this.warehouseClient.sayHello(
                request,
                (error: (grpc.ServiceError | null), response: HelloResponse) => {
                if (error != null) {
                    reject(`api-gateway: got error from WarehouseService ${error.toString()}`);
                }

                resolve(response.getMessage());
            });

        });
    }
}

export default new WarehouseGrpcClient();

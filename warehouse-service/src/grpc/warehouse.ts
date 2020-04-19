import * as grpc from 'grpc';

import { HelloRequest, HelloResponse } from '../proto/warehouse/warehouse_pb';
import { WarehouseService, IWarehouseServer } from '../proto/warehouse/warehouse_grpc_pb';

class WarehouseServer implements IWarehouseServer {
    /**
     * Greet the user nicely
     * @param call
     * @param callback
     */
    sayHello = (call: grpc.ServerUnaryCall<HelloRequest>, callback: grpc.sendUnaryData<HelloResponse>): void => {
        const reply: HelloResponse = new HelloResponse();

        reply.setMessage(`Hello, ${ call.request.getName() }`);

        callback(null, reply);
    };
}

export default {
    service: WarehouseService,                // Service interface
    implementation: new WarehouseServer(),          // Service interface definitions
};

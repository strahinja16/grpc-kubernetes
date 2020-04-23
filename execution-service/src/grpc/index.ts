import 'dotenv/config';
import * as grpc from 'grpc';

import { protoInit } from '../proto';
import ExecutionService from './execution';

protoInit();

const port: string | number = process.env.PORT || 50051;

type StartGrpcServerType = () => void;
export const startGrpcServer: StartGrpcServerType = (): void => {
    // create a new gRPC server
    const server: grpc.Server = new grpc.Server();

    // register all the handler here...
    server.addService(ExecutionService.service, ExecutionService.implementation);

    // define the host/port for server
    server.bindAsync(
        `0.0.0.0:${ port }`,
        grpc.ServerCredentials.createInsecure(),
        (err: Error | null, port: number) => {
            if (err != null) {
                return console.error(err);
            }
            console.log(`\n🚀  gRPC listening on ${ port } on execution-service`);
        },
    );

    // start the gRPC server
    server.start();
};

export default startGrpcServer;

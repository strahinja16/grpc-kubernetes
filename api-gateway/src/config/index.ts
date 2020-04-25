import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`) });

const {
    PORT,
    SHARED_APP_KEY,
    EXECUTION_SERVICE_GRPC_URL,
    PERSONNEL_SERVICE_GRPC_URL,
    WAREHOUSE_SERVICE_GRPC_URL
} = process.env;

const port = PORT || 3000;

export const config  = {
    port,
    appKey: SHARED_APP_KEY,
    personnelServiceGrpcUrl: PERSONNEL_SERVICE_GRPC_URL,
    warehouseServiceGrpcUrl: WAREHOUSE_SERVICE_GRPC_URL,
    executionServiceGrpcUrl: EXECUTION_SERVICE_GRPC_URL,
};

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`) });

const {
    PORT,
    GRPC_PORT,
    SHARED_APP_KEY,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASS,
    DB_DATABASE,
    EXECUTION_SERVICE_GRPC_URL,
} = process.env;

const port = PORT || 3000;
const grpcPort = GRPC_PORT || 50051;
const dbPort = DB_PORT || 5432;

export const config  = {
    port,
    grpcPort,
    appKey: SHARED_APP_KEY,
    db: {
        host: DB_HOST,
        port: dbPort,
        user: DB_USER,
        pass: DB_PASS,
        database: DB_DATABASE,
    },
    executionServiceGrpcUrl: EXECUTION_SERVICE_GRPC_URL,
};

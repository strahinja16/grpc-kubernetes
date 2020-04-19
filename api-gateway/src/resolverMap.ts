import { IResolvers } from 'graphql-tools';
import warehouseGrpcClient from './grpc/warehouse';

const resolverMap: IResolvers = {
    Query: {
        helloWorld: (_: void, args: void) => warehouseGrpcClient.helloWorld()
    },
};
export default resolverMap;

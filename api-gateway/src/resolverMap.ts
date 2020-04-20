import { IResolvers } from 'graphql-tools';
import warehouseGrpcClient from './grpc/warehouse';
import { ApolloError } from 'apollo-server-express';

const resolverMap: IResolvers = {
    Query: {
        getMaterialQuantitiesByNameAndState:  async () => {
            try {
                return await warehouseGrpcClient.getOrderForMaterialItems();
            }catch (e) {
                throw new ApolloError(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },
    },
    Mutation: {
        addMaterialType:  async (root, { input }) => {
            try {
                return await warehouseGrpcClient.addMaterialType(input)
            }catch (e) {
                throw new ApolloError(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        addMaterialItems:  async (root, { input }) => {
            try {
                return await warehouseGrpcClient.addMaterialItems(input)
            }catch (e) {
                throw new ApolloError(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        addWarehouse:  async (root, { input }) => {
            try {
                return await warehouseGrpcClient.addWarehouse(input)
            }catch (e) {
                throw new ApolloError(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        addProductTypeAndMaterialSpecifications:  async (root, { input }) => {
            try {
                return await warehouseGrpcClient.addProductTypeAndMaterialSpecifications(input)
            }catch (e) {
                throw new ApolloError(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        setOrderForMaterialItems:  async (root, { input }) => {
            try {
                return await warehouseGrpcClient.setOrderForMaterialItems(input)
            }catch (e) {
                throw new ApolloError(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },
    }
};
export default resolverMap;

import {IResolvers} from 'graphql-tools';
import warehouseGrpcClient from './grpc/warehouse';
import personnelGrpcClient from './grpc/personnel';
import {authenticate, authorizeAdmin, authorizeManager} from "./auth";

const resolverMap: IResolvers = {
    Query: {
        getMaterialQuantitiesByNameAndState: async (root, args, { user }) => {
            try {
                authorizeManager(user);

                return await warehouseGrpcClient.getOrderForMaterialItems();
            }catch (e) {
                throw new Error(`api-gateway: Error: ${e.toString()}`);
            }
        },
    },
    Mutation: {
        addMaterialType: async (root, { input }, { user }) => {
            try {
                authorizeManager(user);

                return await warehouseGrpcClient.addMaterialType(input)
            }catch (e) {
                throw new Error(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        addMaterialItems: async (root, { input }, { user }) => {
            try {
                authorizeManager(user);

                return await warehouseGrpcClient.addMaterialItems(input)
            }catch (e) {
                throw new Error(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        addWarehouse: async (root, { input }, { user }) => {
            try {
                authorizeManager(user);

                return await warehouseGrpcClient.addWarehouse(input)
            }catch (e) {
                throw new Error(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        addProductTypeAndMaterialSpecifications: async (root, { input }, { user }) => {
            try {
                authorizeManager(user);

                return await warehouseGrpcClient.addProductTypeAndMaterialSpecifications(input)
            }catch (e) {
                throw new Error(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        setOrderForMaterialItems: async (root, { input }, { user }) => {
            try {
                authenticate(user);

                return await warehouseGrpcClient.setOrderForMaterialItems(input)
            }catch (e) {
                throw new Error(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        signUp: async (root, { input }) => {
            try {
                return await personnelGrpcClient.signUp(input)
            }catch (e) {
                throw new Error(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        login: async (root, { input }) => {
            try {
                return await personnelGrpcClient.login(input)
            }catch (e) {
                throw new Error(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        changeRole: async (root, { input }, { user }) => {
            try {
                authorizeAdmin(user);

                return await personnelGrpcClient.changeRole(input)
            }catch (e) {
                throw new Error(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },
    }
};
export default resolverMap;

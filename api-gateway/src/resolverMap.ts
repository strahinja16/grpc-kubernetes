import {IResolvers} from 'graphql-tools';
import warehouseGrpcClient from './grpc/warehouse';
import personnelGrpcClient from './grpc/personnel';
import executionGrpcClient from './grpc/execution';
import {authenticate, authorizeAdmin, authorizeManager} from "./auth";
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

const resolverMap: IResolvers = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return new Date(+ast.value) // ast value is always in string format
            }
            return null;
        },
    }),

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

        getOrders: async (root, { input }, { user }) => {
            try {
                authenticate(user);

                return await executionGrpcClient.getOrders(input)
            }catch (e) {
                throw new Error(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        placeOrder: async (root, { input }, { user }) => {
            try {
                authenticate(user);

                return await executionGrpcClient.placeOrder(input)
            }catch (e) {
                throw new Error(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        changeOrderState: async (root, { input }, { user }) => {
            try {
                authenticate(user);

                return await executionGrpcClient.changeOrderState(input)
            }catch (e) {
                throw new Error(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },

        finishOrder: async (root, { input }, { user }) => {
            try {
                authenticate(user);

                return await executionGrpcClient.finishOrder(input)
            }catch (e) {
                throw new Error(`api-gateway: GraphQL Error: ${e.toString()}`);
            }
        },
    }
};
export default resolverMap;

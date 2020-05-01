import {IResolvers} from 'graphql-tools';
import { warehouseGrpcClient } from '../../grpc/clients/warehouse';
import { personnelGrpcClient } from '../../grpc/clients/personnel';
import { executionGrpcClient } from '../../grpc/clients/execution';
import {authenticate, authorizeAdmin, authorizeManager} from "../auth";
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
        getMaterialQuantitiesByNameAndState: (root, args, { user }) => {
            authorizeManager(user);
            return warehouseGrpcClient.getMaterialQuantitiesByNameAndState();
        },
        getWarehouseDashboardContent: (root, args, { user }) => {
            authenticate(user);
            return warehouseGrpcClient.getWarehouseDashboardContent();
        },

        getMaterialItems: (root, { input }, { user }) => {
            authenticate(user);
            return warehouseGrpcClient.getMaterialItems(input.warehouseId);
        },
    },
    Mutation: {
        addMaterialType: (root, { input }, { user }) => {
            authorizeManager(user);
            return warehouseGrpcClient.addMaterialType(input);
        },

        addMaterialItems: (root, { input }, { user }) => {
            authorizeManager(user);
            return warehouseGrpcClient.addMaterialItems(input);
        },

        addWarehouse: (root, { input }, { user }) => {
            authorizeManager(user);
            return warehouseGrpcClient.addWarehouse(input);
        },

        addProductTypeAndMaterialSpecifications: (root, { input }, { user }) => {
            authorizeManager(user);
            return warehouseGrpcClient.addProductTypeAndMaterialSpecifications(input);
        },

        signUp: (root, { input }) => personnelGrpcClient.signUp(input),

        login: (root, { input }) => personnelGrpcClient.login(input),

        changeRole: (root, { input }, { user }) => {
            authorizeAdmin(user);
            return personnelGrpcClient.changeRole(input);
        },

        getOrders: (root, { input }, { user }) => {
            authenticate(user);
            return executionGrpcClient.getOrders(input);
        },

        placeOrder: (root, { input }, { user }) => {
            authenticate(user);
            return executionGrpcClient.placeOrder(input);
        },

        changeOrderState: (root, { input }, { user }) => {
            authenticate(user);
            return executionGrpcClient.changeOrderState(input);
        },

        finishOrder: (root, { input }, { user }) => {
            authenticate(user);
            return executionGrpcClient.finishOrder(input);
        },
    }
};
export default resolverMap;

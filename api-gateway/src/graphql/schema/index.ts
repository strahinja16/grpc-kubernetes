import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers/resolverMap';
import { GraphQLSchema } from 'graphql';

import { typeDef as Schema } from "./schema";
import { warehouseTypeDefs } from "../models/warehouse";
import { personnelTypeDefs } from "../models/personnel";
import { executionTypeDefs } from "../models/execution";

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [
        Schema,
        ...warehouseTypeDefs,
        ...personnelTypeDefs,
        ...executionTypeDefs,
    ],
    resolvers,
});

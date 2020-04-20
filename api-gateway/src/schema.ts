import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolverMap';
import { GraphQLSchema } from 'graphql';

import { typeDef as Schema } from "./schema/schema";
import { warehouseTypeDefs } from "./models/warehouse";
import { sharedTypeDefs } from "./models/shared";

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [
        Schema,
        ...warehouseTypeDefs,
        ...sharedTypeDefs,
    ],
    resolvers,
});

export default schema;

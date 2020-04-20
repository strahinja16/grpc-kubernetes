import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolverMap';
import { GraphQLSchema } from 'graphql';

import { typeDef as Schema } from "./schema/schema";
import { warehouseTypeDefs } from "./models/warehouse";
import { personnelTypeDefs } from "./models/personnel";

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [
        Schema,
        ...warehouseTypeDefs,
        ...personnelTypeDefs,
    ],
    resolvers,
});

export default schema;

import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolverMap';
import { GraphQLSchema } from 'graphql';

import { typeDef as Schema } from "./schema/schema";
import { warehouseTypeDefs } from "./models/warehouse";
import { personnelTypeDefs } from "./models/personnel";
import { sharedTypeDefs } from "./models/shared";

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [
        Schema,
        ...warehouseTypeDefs,
        ...sharedTypeDefs,
        ...personnelTypeDefs,
    ],
    resolvers,
});

export default schema;

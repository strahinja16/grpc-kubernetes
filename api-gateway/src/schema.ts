import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolverMap';
import { GraphQLSchema } from 'graphql';

import { typeDef as MaterialType } from './models/material-type';
import { typeDef as UserCredentials } from './models/user-credentials';
import { typeDef as Schema } from './schema/schema' ;
import { typeDef as MaterialItem } from './models/material-item' ;
import { typeDef as Warehouse } from './models/warehouse' ;

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [ Schema, MaterialType, UserCredentials, Warehouse, MaterialItem],
    resolvers,
});

export default schema;

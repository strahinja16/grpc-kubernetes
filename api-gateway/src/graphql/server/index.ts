import {ApolloServer} from "apollo-server-express";
import {schema} from "../schema";
import depthLimit from "graphql-depth-limit";
import {gqlRequestLogPlugin} from "../plugins/graphql-logging";
import {gqlContext} from "../auth/context";

export const apolloServer = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    plugins: [ gqlRequestLogPlugin ],
    context: gqlContext,
});

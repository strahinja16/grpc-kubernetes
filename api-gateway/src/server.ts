import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import * as jwt from 'jsonwebtoken';

import schema from './schema';
import graphqlLoggingPlugin from './plugins/graphql-logging';

const app = express();

const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    plugins: [
        graphqlLoggingPlugin,
    ],
    context: ({ req }) => {
        if (!req.headers.authorization || !req.headers.authorization.includes('Bearer')) {
            return {};
        }

        const user = jwt.verify(req.headers.authorization.substring(7), 'APP_KEY');
        return { user };
    },
});

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
httpServer.listen(
    { port: 3000 },
    (): void => console.log(`\n🚀  GraphQL is now running on api-gateway`));

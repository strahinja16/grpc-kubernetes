import express from 'express';
import compression from 'compression';
import cors from 'cors';
import {apolloServer} from "./graphql/server";
import {config} from "./config";

const app = express();

app.use('*', cors());
app.use(compression());

apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen(config.port, () => console.log(`\n🚀  GraphQL is now running on api-gateway`));

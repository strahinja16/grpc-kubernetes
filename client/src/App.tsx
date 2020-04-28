import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import {client} from "./graphql";
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes/Routes";

export const App = () => (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
);

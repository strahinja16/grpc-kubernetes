import ApolloClient, { InMemoryCache } from 'apollo-boost';

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://192.168.99.105:30644/graphql',
    request: (operation) => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    }
});


export const gqlRequestLogPlugin =  {
    // Fires whenever a GraphQL request is received from a client.
    requestDidStart(requestContext: any) {
        if (requestContext.request.query.includes('IntrospectionQuery')) return;

        console.log('GraphQL request started! Query:\n' +
            requestContext.request.query);
    },
};

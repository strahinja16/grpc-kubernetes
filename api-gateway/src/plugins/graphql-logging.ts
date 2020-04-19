export default {
    // Fires whenever a GraphQL request is received from a client.
    requestDidStart(requestContext: any) {
        console.log('GraphQL request started! Query:\n' +
            requestContext.request.query);
    },
};

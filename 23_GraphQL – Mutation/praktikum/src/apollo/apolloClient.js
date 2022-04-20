import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
  } from "@apollo/client";
  
  const client = new ApolloClient({
    uri: "https://premium-monitor-62.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
       'x-hasura-admin-secret' :
          '1q8G0wxCXlH9ug1rfWAu3BIfelDoOxCRnx9SMYMtXCIawH6CbsWhjQOHzT0eaAJf', 
    },
  });
  
  export default client
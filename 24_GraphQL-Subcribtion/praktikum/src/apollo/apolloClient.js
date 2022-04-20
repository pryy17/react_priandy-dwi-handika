import {
  ApolloProvider,
  useQuery,
  gql,
  InMemoryCache,
  ApolloClient
} from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: "https://premium-monitor-62.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
     'x-hasura-admin-secret' :
        '1q8G0wxCXlH9ug1rfWAu3BIfelDoOxCRnx9SMYMtXCIawH6CbsWhjQOHzT0eaAJf', 
  },
});

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://premium-monitor-62.hasura.app/v1/graphql',
  connectionParams: {
    headers: {
      'x-hasura-admin-secret' :
        '1q8G0wxCXlH9ug1rfWAu3BIfelDoOxCRnx9SMYMtXCIawH6CbsWhjQOHzT0eaAJf', 
    },
  }
  
}));

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret' :
       '1q8G0wxCXlH9ug1rfWAu3BIfelDoOxCRnx9SMYMtXCIawH6CbsWhjQOHzT0eaAJf', 
 },
});

export default client
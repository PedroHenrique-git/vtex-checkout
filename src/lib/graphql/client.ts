import { GraphQLClient } from 'graphql-request';
import storeConfig from '../../../store.config';

export const graphqlClient = new GraphQLClient(storeConfig.api.graphql, {
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

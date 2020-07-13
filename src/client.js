import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const delay = setContext(
  (request) =>
    new Promise((success, fail) => {
      setTimeout(() => {
        success();
      }, 0);
      // }, 800);
    })
);

const cache = new InMemoryCache();
const http = new HttpLink({
  uri: process.env.REACT_APP_API,
});

const link = ApolloLink.from([delay, http]);

const client = new ApolloClient({
  link,
  cache,
});

export default client;

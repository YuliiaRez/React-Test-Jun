import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";

import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
      return alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:4000/",
  }),
]);

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

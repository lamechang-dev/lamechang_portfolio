// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://graphql-pokemon2.vercel.app", // ここにGraphQLエンドポイントを設定
});

const apolloClient = new ApolloClient({
  cache,
  link,
});

export default apolloClient;

import React from "react";
import { createStore, Provider as JotaiProvider } from "jotai";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { useEffect } from "react";
import apolloClient from "src/apolloClient";
import PageTemplate from "src/components/ui/PageTemplate";
import { MovieList } from "src/domain/movies/model";
import "tailwind/tailwind.css";
import { stateMyFavoriteMovieList } from "src/context/model/movies";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ myFavoriteMovieList: MovieList }>) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  const store = createStore();

  store.set(stateMyFavoriteMovieList, pageProps.myFavoriteMovieList);

  return (
    <React.Fragment>
      <JotaiProvider store={store}>
        <ApolloProvider client={apolloClient}>
          <PageTemplate>
            <Component {...pageProps} />
          </PageTemplate>
        </ApolloProvider>
      </JotaiProvider>
    </React.Fragment>
  );
}

export default MyApp;

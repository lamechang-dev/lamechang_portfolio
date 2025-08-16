import React from "react";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
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

  return (
    <RecoilRoot
      initializeState={(snapshot) => {
        snapshot.set(stateMyFavoriteMovieList, pageProps.myFavoriteMovieList);
      }}
    >
      <React.Fragment>
        <ApolloProvider client={apolloClient}>
          <PageTemplate>
            <Component {...pageProps} />
          </PageTemplate>
        </ApolloProvider>
      </React.Fragment>
    </RecoilRoot>
  );
}

export default MyApp;

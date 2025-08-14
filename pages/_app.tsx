import React from "react";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import apolloClient from "src/apolloClient";
import PageTemplate from "src/components/ui/PageTemplate";
import { useStateMyFavoriteMovieListActions } from "src/context/model/movies/actions";
import { MovieList } from "src/domain/movies/model";
import "tailwind/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <RecoilRoot>
      <React.Fragment>
        <GlobalStateInitializer pageProps={pageProps} />
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

const GlobalStateInitializer = ({ pageProps }: { pageProps: any }) => {
  const { setStateMyFavoriteMovieList } = useStateMyFavoriteMovieListActions();

  useEffect(() => {
    const { myFavoriteMovieList } = pageProps as {
      myFavoriteMovieList: MovieList;
    };
    setStateMyFavoriteMovieList(myFavoriteMovieList);
  }, [pageProps]);

  return null;
};

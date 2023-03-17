import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import apolloClient from "src/apolloClient";
import PageTemplate from "src/components/ui/PageTemplate";
import "tailwind/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <PageTemplate>
          <Component {...pageProps} />
        </PageTemplate>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;

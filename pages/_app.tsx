import { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import PageTemplate from "components/layout/PageTemplate";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <RecoilRoot>
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </RecoilRoot>
  );
}

export default MyApp;

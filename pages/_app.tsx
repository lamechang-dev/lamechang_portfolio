import { Theme } from "@material-ui/core/styles";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { RecoilRoot } from "recoil";
import PageTemplate from "components/layout/PageTemplate";
import "tailwindcss/tailwind.css";

const useStyles = makeStyles((theme: Theme) => ({
  animate: {
    "& *": {
      "-webkit-transition": "color 0.3s",
      "-moz-transition": "color 0.3s",
      "-o-transition": "color 0.3s",
      transition: "color 0.3s"
    }
  }
}));

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  const classes = useStyles();

  return (
    <RecoilRoot>
      <PageTemplate>
        <div className={classes.animate}>
          <Component {...pageProps} />
        </div>
      </PageTemplate>
    </RecoilRoot>
  );
}

export default MyApp;

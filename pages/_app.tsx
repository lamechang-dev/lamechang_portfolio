import { createTheme, Theme, ThemeProvider } from "@material-ui/core/styles";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useRecoilValue, RecoilRoot } from "recoil";
import { muiThemeType } from "../global/context/index";
import PageTemplate from "components/layout/PageTemplate";

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

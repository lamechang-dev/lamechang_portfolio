import { createTheme, Theme, ThemeProvider } from "@material-ui/core/styles";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    allVariants: {
      color: "#035169"
    }
  },
  palette: {
    primary: {
      main: "#035169"
    },
    type: "light"
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

import { createTheme, Theme, ThemeProvider } from "@material-ui/core/styles";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { makeStyles, Typography, CssBaseline } from "@material-ui/core";
import { useRecoilValue, RecoilRoot } from "recoil";
import { muiThemeType } from "global/context/index";

type PageTemplateProps = {
  children: React.ReactNode;
};

const PageTemplate: React.VFC<PageTemplateProps> = ({ children }) => {
  const themeType = useRecoilValue(muiThemeType);

  const lightTheme = createTheme({
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
      background: {
        default: "#cbdfe0"
      },
      primary: {
        main: "#035169",
        contrastText: "#BCBA70"
      },
      secondary: {
        main: "#027FA3"
      },
      grey: {
        50: "#FFFFFF"
      }
    }
  });

  const darkTheme = createTheme({
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
        color: "#FFFFFF"
      }
    },
    palette: {
      background: {
        default: "#11202c",
        paper: "#096c8b"
      },
      primary: {
        main: "#FFFFFF",
        contrastText: "#BCBA70"
      },
      secondary: {
        main: "#FFFFFF"
      },
      grey: {
        50: "#FFFFFF"
      }
    }
  });

  return (
    <ThemeProvider theme={themeType === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default PageTemplate;

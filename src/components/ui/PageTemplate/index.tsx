import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import { muiThemeType } from "src/context/ui/theme/index";

type PageTemplateProps = {
  children: React.ReactNode;
};

const PageTemplate: React.VFC<PageTemplateProps> = ({ children }) => {
  const themeType = useRecoilValue(muiThemeType);
  const { darkTheme, lightTheme } = useThemeValue();

  return (
    <ThemeProvider theme={themeType === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default PageTemplate;

export const useThemeValue = () => {
  const commonTheme = createTheme({
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
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  const lightTheme = createTheme({
    typography: {
      fontFamily: commonTheme.typography.fontFamily,
      allVariants: {
        color: "#035169",
      },
    },
    palette: {
      type: "light",
      background: {
        default: "#cbdfe0",
      },
      primary: {
        main: "#035169",
        contrastText: "#BCBA70",
      },
      secondary: {
        main: "#027FA3",
      },
      grey: {
        50: "#FFFFFF",
      },
    },
  });

  const darkTheme = createTheme({
    typography: {
      fontFamily: commonTheme.typography.fontFamily,
      allVariants: {
        color: "#FFFFFF",
      },
    },
    palette: {
      type: "dark",
      background: {
        default: "#11202c",
        paper: "#096c8b",
      },
      primary: {
        main: "#FFFFFF",
        contrastText: "#BCBA70",
      },
      secondary: {
        main: "#FFFFFF",
      },
      grey: {
        50: "#FFFFFF",
      },
    },
  });

  const completelyDarkTheme = createTheme({
    typography: {
      fontFamily: commonTheme.typography.fontFamily,
      allVariants: {
        color: "#FFFFFF",
      },
    },
    palette: {
      type: "dark",
      background: {
        default: "#000",
        paper: "#000",
      },
      primary: {
        main: "#FFFFFF",
        contrastText: "#BCBA70",
      },
      secondary: {
        main: "#FFFFFF",
      },
      grey: {
        50: "#FFFFFF",
      },
    },
  });

  return { darkTheme, completelyDarkTheme, lightTheme };
};

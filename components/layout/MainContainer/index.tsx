import { makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    maxWidth: "720px",
    margin: "0 auto",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

const MainContainer: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.mainContainer}>{children}</div>;
};

export default MainContainer;

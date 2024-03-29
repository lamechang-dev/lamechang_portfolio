import { makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { FooterSection } from "../FooterSection";

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    maxWidth: "720px",
    margin: "0 auto",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
}));

const PageContainer: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.mainContainer)}>
      {children}
      <FooterSection />
    </div>
  );
};

export default PageContainer;

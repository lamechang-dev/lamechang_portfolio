import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  summaryContainer: {
    background: theme.palette.background.paper,
    borderRadius: "24px",
    width: "85%",
  },
}));

export type Props = {
  className?: string;
  children: React.ReactNode;
};

const SummarySection: React.FC<Props> = ({ children, className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.summaryContainer, className)}>{children}</div>
  );
};

export default SummarySection;

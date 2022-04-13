import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { IconButton, IconButtonProps } from "@material-ui/core";
import React from "react";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import LightButton from "components/atoms/LightButton";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  summaryContainer: {
    background: theme.palette.background.paper,
    margin: "0 auto",
    borderRadius: "24px",
    width: "85%"
  }
}));

export type Props = {
  className?: string;
};

const SummarySection: React.FC<Props> = ({ children, className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.summaryContainer, className)}>{children}</div>
  );
};

export default SummarySection;

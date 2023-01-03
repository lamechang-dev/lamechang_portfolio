import { makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  year: {
    fontWeight: 700,
    textIndent: "-3.4rem",
    paddingLeft: "3.4rem"
  }
}));

export type Props = {
  className?: string;
  yearNum: number;
  text: string;
};

const YearData: React.FC<Props> = ({ className, yearNum, text }) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.year} variant="body2">
        {text}
      </Typography>
    </>
  );
};

export default YearData;
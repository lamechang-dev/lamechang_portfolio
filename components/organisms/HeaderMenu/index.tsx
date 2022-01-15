import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { IconButton, IconButtonProps } from "@material-ui/core";
import React from "react";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import LightButton from "components/atoms/LightButton";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  headerContainer: {
    padding: theme.spacing(1)
  },
  authorNameContainer: {
    alignSelf: "center"
  },
  authorName: {
    fontFamily: "'Comfortaa', cursive"
  }
}));

export type Props = {
  className?: string;
};

const HeaderMenuBar: React.FC<Props> = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.headerContainer, className)}>
      <Grid container justify="space-between">
        <Grid item className={classes.authorNameContainer}>
          <Typography
            className={classes.authorName}
            color="primary"
            variant="h6"
          >
            TestName
          </Typography>
        </Grid>
        <Grid item>
          <LightButton />
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderMenuBar;

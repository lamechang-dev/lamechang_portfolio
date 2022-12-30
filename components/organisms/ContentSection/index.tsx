import { makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  contentSectionContainer: {
    padding: theme.spacing(1)
  },
  title: {
    fontFamily: "'Comfortaa', cursive",
    marginBottom: theme.spacing(2),
    textUnderlineOffset: theme.spacing(0.5) + "px"
  },
  content: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 200
  }
}));

export type Props = {
  className?: string;
  title: string;
  content: React.ReactNode;
};

const ContentSection: React.FC<Props> = ({ className, title, content }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.contentSectionContainer)}>
      <Typography className={classes.title} variant="body1">
        {title}
      </Typography>
      <div className={classes.content}>{content}</div>
    </div>
  );
};

export default ContentSection;

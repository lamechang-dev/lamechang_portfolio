import { makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontFamily: "'Comfortaa', cursive",
    textUnderlineOffset: theme.spacing(0.5) + "px",
  },
}));

export type Props = {
  className?: string;
  title?: string;
  subActionText?: string;
  onClickSubActionText?: () => void;
  content: React.ReactNode;
};

const ContentSection: React.FC<Props> = ({
  className,
  title,
  content,
  subActionText,
  onClickSubActionText,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(className)}>
      {(title || subActionText) && (
        <div className={clsx("flex items-end mb-4", "justify-between")}>
          {title && (
            <Typography className={clsx(classes.title)} variant="body1">
              {title}
            </Typography>
          )}
          {subActionText && (
            <div onClick={onClickSubActionText}>
              <Typography
                className={clsx(
                  "text-[12px]",
                  "cursor-pointer",
                  "hover:text-gray-300",
                  "transition-colors"
                )}
                variant="body1"
              >
                {subActionText}
              </Typography>
            </div>
          )}
        </div>
      )}
      <div>{content}</div>
    </div>
  );
};

export default ContentSection;

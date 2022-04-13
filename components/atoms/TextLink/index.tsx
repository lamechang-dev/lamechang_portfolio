import React from "react";
import { makeStyles, Theme, Link, LinkProps } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      fontSize: "17.5px",
      transition: "color 0.25s",
      "&.MuiLink-underlineHover:hover": {
        color: theme.palette.primary.contrastText
      }
    }
  };
});

export type Props = {
  showBorder?: boolean;
  children: React.ReactNode;
} & LinkProps;

export const TextLink: React.VFC<Props> = ({
  showBorder = false,
  children,
  ...linkProps
}) => {
  const classes = useStyles();
  return (
    <Link classes={{ root: classes.root }} {...linkProps}>
      {children}
    </Link>
  );
};

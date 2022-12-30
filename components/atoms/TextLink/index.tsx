import React from "react";
import { Link, LinkProps } from "@material-ui/core";

export type Props = {
  showBorder?: boolean;
  children: React.ReactNode;
} & LinkProps;

export const TextLink: React.VFC<Props> = ({
  showBorder = false,
  children,
  ...linkProps
}) => {
  return <Link {...linkProps}>{children}</Link>;
};


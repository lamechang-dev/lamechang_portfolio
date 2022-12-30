import React from "react";
import { Link, LinkProps } from "@material-ui/core";
import clsx from "clsx";

export type Props = {
  showBorder?: boolean;
  children: React.ReactNode;
  className?: string;
} & Omit<LinkProps, "className">;

export const TextLink: React.VFC<Props> = ({
  showBorder = false,
  children,
  className,
  ...linkProps
}) => {
  return (
    <Link
      {...linkProps}
      className={clsx(className, "underline", "hover:no-underline")}
    >
      {children}
    </Link>
  );
};

import React from "react";
import { Link, LinkProps } from "@mui/material";

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
      className={className}
      sx={{
        textDecoration: "underline",
        "&:hover": {
          textDecoration: "none",
        },
        ...(showBorder && {
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          px: 1,
          py: 0.5,
        }),
      }}
    >
      {children}
    </Link>
  );
};

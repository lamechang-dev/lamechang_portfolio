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
        textDecoration: "none",
        backgroundImage: "linear-gradient(currentColor, currentColor)",
        backgroundSize: "100% 1px",
        backgroundPosition: "0 100%",
        backgroundRepeat: "no-repeat",
        transition: "background-size 0.3s ease",
        "&:hover": {
          textDecoration: "none",
          backgroundSize: "0% 1px",
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

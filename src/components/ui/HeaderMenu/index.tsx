"use client";

import { Typography, MenuItem, Menu, Box } from "@mui/material";
import React from "react";
import LightButton from "src/components/ui/LightButton";
import MenuButton from "src/components/ui/MenuButton";
import clsx from "clsx";
import { muiThemeType } from "src/context/ui/theme";
import Link from "next/link";
import { useSetGlobalState } from "src/context/hooks";

export type Props = {
  className?: string;
};

const HeaderMenuBar: React.FC<Props> = ({ className }) => {
  const setTheme = useSetGlobalState(muiThemeType);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = React.useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClickLightButton = React.useCallback(() => {
    setTheme((prev: string) => {
      if (prev === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  }, [setTheme]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenuButton = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  return (
    <Box
      className={className}
      sx={{
        padding: (theme) => theme.spacing(1),
        marginRight: (theme) => -theme.spacing(2),
        marginLeft: (theme) => -theme.spacing(2),
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ alignSelf: "center" }}>
          <Link href="/" passHref>
            <Typography
              className={clsx("no-underline", "cursor-pointer")}
              color="primary"
              variant="h6"
              sx={{
                fontFamily: "var(--font-comfortaa), cursive",
                fontSize: "1rem",
                marginLeft: (theme) => theme.spacing(1.5),
              }}
            >
              Lamechang
            </Typography>
          </Link>
        </Box>
        <Box>
          <LightButton color="secondary" onClick={handleClickLightButton} />
          <MenuButton
            color="secondary"
            aria-haspopup="true"
            onClick={handleClickMenuButton}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Link href="/" passHref>
              <MenuItem onClick={handleClose}>Top</MenuItem>
            </Link>
            <Link href="/movies" passHref>
              <MenuItem onClick={handleClose}>Movies</MenuItem>
            </Link>
            <a
              href="https://linktr.ee/lamechang"
              target={"_blank"}
              rel="noreferrer"
            >
              <MenuItem onClick={handleClose}>Links</MenuItem>
            </a>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderMenuBar;

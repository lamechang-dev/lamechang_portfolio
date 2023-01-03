import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  MenuItem,
  Menu,
} from "@material-ui/core";
import React from "react";
import LightButton from "src/components/atoms/LightButton";
import MenuButton from "src/components/atoms/MenuButton";
import clsx from "clsx";
import { muiThemeType } from "src/context";
import { useSetRecoilState } from "recoil";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) => ({
  headerContainer: {
    padding: theme.spacing(1),
    marginRight: -theme.spacing(2),
    marginLeft: -theme.spacing(2),
  },
  authorNameContainer: {
    alignSelf: "center",
  },
  authorName: {
    fontFamily: "'Comfortaa', cursive",
    fontSize: "1rem",
    marginLeft: theme.spacing(1.5),
  },
}));

export type Props = {
  className?: string;
};

const HeaderMenuBar: React.FC<Props> = ({ className }) => {
  const classes = useStyles();
  const setTheme = useSetRecoilState(muiThemeType);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = React.useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClickLightButton = React.useCallback(() => {
    setTheme((prev) => {
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

  const handleClickMenuButton = React.useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  return (
    <div className={clsx(classes.headerContainer, className)}>
      <Grid container justify="space-between">
        <Grid item className={classes.authorNameContainer}>
          <Link href="/" passHref>
            <Typography
              className={clsx(
                classes.authorName,
                "no-underline",
                "cursor-pointer"
              )}
              color="primary"
              variant="h6"
            >
              Lamechang
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <LightButton color="secondary" onClick={handleClickLightButton} />
          <MenuButton
            color="secondary"
            aria-haspopup="true"
            onClick={handleClickMenuButton}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            getContentAnchorEl={null}
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
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderMenuBar;

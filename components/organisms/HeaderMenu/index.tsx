import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  MenuItem,
  Menu
} from "@material-ui/core";
import React from "react";
import LightButton from "components/atoms/LightButton";
import MenuButton from "components/atoms/MenuButton";
import clsx from "clsx";
import { muiThemeType } from "global/context";
import { useRecoilState } from "recoil";

const useStyles = makeStyles((theme: Theme) => ({
  headerContainer: {
    padding: theme.spacing(1),
    marginRight: -theme.spacing(2),
    marginLeft: -theme.spacing(2)
  },
  authorNameContainer: {
    alignSelf: "center"
  },
  authorName: {
    fontFamily: "'Comfortaa', cursive",
    fontSize: "1rem",
    marginLeft: theme.spacing(1.5)
  }
}));

export type Props = {
  className?: string;
};

const HeaderMenuBar: React.FC<Props> = ({ className }) => {
  const classes = useStyles();
  const [theme, setTheme] = useRecoilState(muiThemeType);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = React.useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClickLightButton = React.useCallback(event => {
    console.log("clicked");
    setTheme(prev => {
      if (prev === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenuButton = React.useCallback(event => {
    setAnchorEl(event.currentTarget);
  }, []);

  return (
    <div className={clsx(classes.headerContainer, className)}>
      <Grid container justify="space-between">
        <Grid item className={classes.authorNameContainer}>
          <Typography
            className={classes.authorName}
            color="primary"
            variant="h6"
          >
            Lamechang
          </Typography>
        </Grid>
        <Grid item>
          <LightButton color="secondary" onClick={handleClickLightButton} />
          <MenuButton
            color="secondary"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            id="basic-button"
            onClick={handleClickMenuButton}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            open={open}
            onClose={handleClose}
            aria-controls={open ? "basic-menu" : undefined}
            MenuListProps={{
              "aria-labelledby": "basic-button"
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Twitter</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderMenuBar;

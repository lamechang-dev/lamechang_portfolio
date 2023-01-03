import {
  IconButton,
  IconButtonProps
} from "@material-ui/core";
import React from "react";
import { MenuOutlined } from "@material-ui/icons";

export type Props = {} & IconButtonProps;

const MenuButton: React.VFC<Props> = props => {
  return (
    <IconButton {...props}>
      <MenuOutlined />
    </IconButton>
  );
};

export default MenuButton;

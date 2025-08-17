import { IconButton, IconButtonProps } from "@mui/material";
import React from "react";
import { MenuOutlined } from "@mui/icons-material";

export type Props = {} & IconButtonProps;

const MenuButton: React.VFC<Props> = (props) => {
  return (
    <IconButton {...props}>
      <MenuOutlined />
    </IconButton>
  );
};

export default MenuButton;

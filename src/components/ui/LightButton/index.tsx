"use client";

import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import React from "react";
import { IconButton, Props as IconButtonProps } from "../IconButton";

export type Props = {} & IconButtonProps;

const LightButton: React.VFC<Props> = ({ ...props }) => {
  return (
    <IconButton {...props}>
      <WbIncandescentOutlinedIcon />
    </IconButton>
  );
};

export default LightButton;

import { IconButton, IconButtonProps } from "@material-ui/core";
import React from "react";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";

export type Props = {} & IconButtonProps;

const LightButton: React.VFC<Props> = ({ ...props }) => {
  return (
    <IconButton {...props}>
      <WbIncandescentOutlinedIcon />
    </IconButton>
  );
};

export default LightButton;

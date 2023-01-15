import React from "react";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
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

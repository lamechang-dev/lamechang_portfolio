import {
  Grid,
  IconButton,
  IconButtonProps,
  Typography
} from "@material-ui/core";
import React from "react";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";

export type Props = {} & IconButtonProps;

const LightButton: React.FC<Props> = props => {
  return (
    <IconButton {...props}>
      <WbIncandescentOutlinedIcon />
    </IconButton>
  );
};

export default LightButton;

import {
  Grid,
  IconButton,
  IconButtonProps,
  Typography
} from "@material-ui/core";
import React from "react";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import { useRecoilState } from "recoil";
import { muiThemeType } from "../../../global/context/";
export type Props = {} & IconButtonProps;

const LightButton: React.VFC<Props> = ({ ...props }) => {
  const [theme, setTheme] = useRecoilState(muiThemeType);

  return (
    <IconButton {...props}>
      <WbIncandescentOutlinedIcon />
    </IconButton>
  );
};

export default LightButton;

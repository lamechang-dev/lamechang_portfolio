import {
  IconButton,
  IconButtonProps
} from "@material-ui/core";
import React from "react";
import Image, { ImageProps } from "next/image";

export type Props = {
  src: ImageProps["src"];
} & IconButtonProps;

const SkillImage: React.VFC<Props> = props => {
  return (
    <IconButton {...props}>
      <Image width="80" height="80" src="/img/materialui-original.svg" />
    </IconButton>
  );
};

export default SkillImage;

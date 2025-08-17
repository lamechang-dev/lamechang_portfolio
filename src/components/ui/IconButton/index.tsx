import { IconButtonProps, IconButton as MuiIconButton } from "@mui/material";

export type Props = IconButtonProps;

export const IconButton: React.VFC<Props> = (props) => {
  return <MuiIconButton {...props} />;
};

import {
  IconButtonProps,
  IconButton as MuiIconButton,
} from "@material-ui/core";

export type Props = IconButtonProps;

export const IconButton: React.VFC<Props> = (props) => {
  return <MuiIconButton {...props} />;
};

import { DialogProps, Dialog as MuiDialog } from "@material-ui/core";

type Props = DialogProps;

export const Dialog: React.VFC<Props> = (props) => {
  return <MuiDialog {...props} />;
};

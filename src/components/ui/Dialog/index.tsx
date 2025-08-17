import { DialogProps, Dialog as MuiDialog } from "@mui/material";

type Props = DialogProps;

export const Dialog: React.VFC<Props> = (props) => {
  return <MuiDialog {...props} />;
};

import { Typography as MuiTypography, TypographyProps } from "@mui/material";

type Props = TypographyProps;

export const Typography: React.VFC<Props> = (props) => {
  return <MuiTypography {...props} />;
};

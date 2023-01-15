import {
  Typography as MuiTypography,
  TypographyProps,
} from "@material-ui/core";

type Props = TypographyProps;

export const Typography: React.VFC<Props> = (props) => {
  return <MuiTypography {...props} />;
};

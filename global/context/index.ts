import { atom } from "recoil";
import { PaletteType } from "@material-ui/core";

export const muiThemeType = atom<PaletteType>({
  key: "themeType",
  default: "dark"
});

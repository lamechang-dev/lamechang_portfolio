import { atom } from "jotai";
import { PaletteType } from "@material-ui/core";

export const muiThemeType = atom<PaletteType>("dark");

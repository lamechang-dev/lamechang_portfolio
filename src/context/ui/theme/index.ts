import { atom } from "jotai";
import { PaletteMode } from "@mui/material";

export const muiThemeType = atom<PaletteMode>("dark");

import { Comfortaa, Roboto } from "next/font/google";

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comfortaa",
});

export const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

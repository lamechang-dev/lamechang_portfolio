/** @type {import('tailwindcss').Config} */

const SCREENS = {
  XS: "360px",
  SM: "600px",
  MD: "980px",
  LG: "1280px",
  XL: "1920px",
  MOBILE: "414px",
  TABLET: "768px",
};

module.exports = {
  mode: "jit",
  important: true,
  content: [
    "./public/index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "lt-sm": { max: SCREENS.SM },
    },
    extend: {
      colors: {
        lightDefault: "#cbdfe0",
        lightPrimaryMain: "#035169",
        lightSecondaryMain: "#027FA3",
        lightPaper: "#FFFFFF",
        darkDefault: "#11202c",
        darkPaper: "#096c8b",
        darkPrimaryMain: "#FFFFFF",
        darkSecondaryMain: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

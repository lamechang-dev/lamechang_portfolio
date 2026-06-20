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
      short: { raw: "(max-height: 700px)" },
    },
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s ease-out both",
      },
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

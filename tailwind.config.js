/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  important: true,
  content: [
    "./public/index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

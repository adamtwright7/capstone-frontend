/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkPink: "rgb(242,113,161)",
        lightPink: "rgb(255,190,221)",
        offBlack: "rgb(19,21,27)",
        DnDRed: "rgb(188,15,15)",
      },
    },
  },
  plugins: [],
};

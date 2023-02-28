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
        goldAccents: "#D6AD60",
        backgroundColor: "#1C1C1D",
        blueSecondary: "#222639",
      },
    },
  },
  plugins: [],
};

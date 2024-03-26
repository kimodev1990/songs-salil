/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        paleBrown: "#FEFFEE",
        colorTitle: "#EF8B08",
        borderColor: "#CC9966",
        borderLineColor: "#870040",
        textColor: "#800040",
        bgColor: "#FFFFFF",
        boderColorTable: "#808080",
      },
      gridTemplateRows: {
        44: "repeat(44, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/animation.css"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Mulish",
      anek: ["Anek Gujarati"],
      dancing: ["Dancing Script", "cursive"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".2em",
      // widest: '.25em',
    },
    extend: {
      colors: {
        brown: {
          500: "#8B4513",
          200: "#C4A484",
          300: "#E1C16E",
          400: "#C19A6B",
          customColor: "#E1C16E",
        },
        spacing: {
          "15px": "15px",
        },
        primary: "#0E1112",
        grey: "#484B4B",
        accent: "#EEF7F9",
      },
    },
    container: {
      padding: {
        md: "10rem",
      },
    },
  },
  plugins: [],
};

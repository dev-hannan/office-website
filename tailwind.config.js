const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6215F9",
        secondary: "#FAD707",
        light: "#FFFFFF",
        dark: "#000000",
        text: {
          DEFAULT: "#000000",
          light: "#FFFFFF",
        },
        accent: "#FAD707",
      },
      fontFamily: {
        main: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        primary: 600,
        secondary: 400,
        text: 400,
        accent: 500,
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;

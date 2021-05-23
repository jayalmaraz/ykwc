module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Montserrat"', "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      lineHeight: {
        15: "3.5rem",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["hover"],
    },
  },
  plugins: [],
};

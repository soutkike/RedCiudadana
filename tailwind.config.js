// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueTheme: "#5271FF",
      },
    },
  },
  variants: {
    extend: {
      border: ["hover"],
    },
  },
  plugins: [],
};

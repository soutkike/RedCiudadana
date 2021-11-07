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
      display: ["group-hover"],
      scale: ["group-hover"],
      border: ["group-hover"],
      font: ["group-hover"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        changebackground: {
          "0%": {
            "background-color": "rgb(30 64 175)",
          },
          "20%": {
            "background-color": "rgb(55 48 163)",
          },
          "40%": {
            "background-color": "rgb(6 95 70)",
          },
          "60%": {
            "background-color": "rgb(30 64 175)",
          },
          "80%": {
            "background-color": "rgb(153 27 27)",
          },
          "100%": {
            "background-color": "rgb(159 18 57)",
          },
        },
      },
      animation: {
        changebackground:
          "changebackground 120s ease-in-out infinite alternate",
      },
      plugins: [],
    },
  },
};

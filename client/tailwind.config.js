/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif", "group-focus"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontFamily: {
        Foldit: ["Abril Fatface", "cursive"],
        MyFont: ["Rubik Pixels", "cursive"],
        Boogaloo: ["Boogaloo", "cursive"],
        scnd:[ 'Comfortaa', 'sans-serif'],
        char:[ 'Roboto', 'sans-serif'],
        SourceSansPro: ["Source Sans Pro", "sans-serif"],
        italic:["WindSong", "cursive"],
        scnditalic: ["Great Vibes", "cursive"],
      },
      colors: {
        light6: "#a5ddda",
        dark1: "#003a70",
        light1: "#00acb3",
        dark2: "#00a5a7",
        mainpara: "#a6aeb4",
        gfgmaincolor: "#5b68bb",
      },
    },
    theme: {
      extend: {
        transitionProperty: {
          width: "width",
        },
      },
    },
  },
  plugins: [],
};

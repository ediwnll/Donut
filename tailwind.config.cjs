/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "wheat": "#f4e1ac",
        "wheat-50": "#f5e7bb",
        "darkgrey": "#272727",
        "lightgrey": "#a6b4ac",
        "greygreen": "#293f45",
        "lightgrey-50": "#a3b3ac",
        "greygreen-50": "#436670",
        "greygreen-1": "#3f616b"

      },
      backgroundImage:(theme) =>({
        "mobile-home": "url('./assets/background image.png)"
      }),
      fontFamily:{
        archivo: ["Archivo Black", "sans-serif"],
        montserrat: ['Montserrat', "sans-serif"]
      },
      content:{
        curvyarrow: "url('./assets/curvyarrow.png)"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
};

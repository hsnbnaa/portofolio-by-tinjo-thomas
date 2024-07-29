/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lavender-color": "#7456FF",
        "red-color": "#FF6464",
        "blue-light": "#EDF7FA",
        "light-grey": "#8695A4",
        "dark-grey": "#21243D",
        "light-white": "#E0E0E0",
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
      width: {
        62: "62px",
        497: "497px",
        208: "208px",
        243: "243px",
        246: "246px",
        418: "418px",
      },
      height: {
        180: "180px",
        243: "243px",
      },
      fontSize: {
        20: "20px",
        26: "26px",
        44: "44px",
      },
      padding: {
        18: "18px",
        38: "38px",
        47: "47px",
        71: "71px",
      },
      margin: {
        51: "51px",
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "container": "1170px",
      },
      fontFamily:{
        "poppins": ['DM Sans-serif']
      },
      fontSize: {
        "16": "16px"
      },
      colors: {
        "white": "#fff",
        "black": "#111",
        "red": "#DB4444",
        "logo": "#1990CB",
        "yellow": "#FFAD33",
        "green" : "#00FF66",
        "gray" : "#828282",
        "gray2" : "#F5F5F5"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {},
      height: {
        690: "690px",
        234: "234px",
        270: "270px",
        850 : "850px",
        456: "456px",
        352: "352px"
        
      },
      width : {
        370 : "370px",
        310 : "310px",
      }
    },
  },
  plugins: [],
};
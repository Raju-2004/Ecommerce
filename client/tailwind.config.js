/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        primary:"#22B5D5",
        secondary:"#8ED6E6"
      },
      container:{
        center:true,
        padding:{
          DEFAULT : '1rem',
          sm : '3rem'
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {

    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
       
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
      backgroundImage: {
        "desktopBcg": "url(/assets/bg-header-desktop.png)",
        "mobileBcg": "url(/assets/bg-header-mobile.png)",
      }

    },
  },
  plugins: [],
}


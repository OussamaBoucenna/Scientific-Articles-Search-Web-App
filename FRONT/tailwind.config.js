/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       'myBlue':'#D4F2F4',
       'darkBlue':'#04445F',
       "blue-light":"#189AB4"
      },
      screens:{
        'sm':'300px',
         'md':'650px', 
      }
    },
  },
  plugins: [],
}


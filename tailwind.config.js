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
      },
      screens:{
        'sm':'300px',
        'md':'650px', 
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1280px',
      }
    },
  },
  plugins: [],
}


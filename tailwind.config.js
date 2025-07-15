module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        inter: ['Inter', 'sans-serif'], // customize name as needed
        josefin: ['Josefin Sans', 'sans-serif'], // customize name as needed
      },
      colors : {
        primaryColor: '#DADADA',
        secondaryColor: '#B7B7B7',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};

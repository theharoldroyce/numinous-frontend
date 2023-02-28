/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],  
  theme: {
    extend: {},
    fontFamily: {
      sfbold: ['sf-bold'],
      sfmid: ['sf-medium"'],
      sfreg: ['sf-regular'],
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

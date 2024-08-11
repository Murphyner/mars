/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayWithOpacity: 'rgba(255, 255, 255, .1)', 
      },
    },
  },
  plugins: [],
}
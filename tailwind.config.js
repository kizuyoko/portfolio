/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/background_jumbotron.png')", 
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}


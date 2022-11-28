/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './modules/*.{html, js}',
    './main.js',
    './index.html'
  ],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")]
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#15508B"
      },

      screens: {
        "xxl": "1150px"
      }
    },
  },
  plugins: [],
}

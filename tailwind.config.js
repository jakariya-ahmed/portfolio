/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 IMPORTANT
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // update paths as needed
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3AB0FF',
          DEFAULT: '#008CFF',
          dark: '#005FCC',
        },
        customBlue: '#1E40AF',
      },
    },
  },
  plugins: [],
}

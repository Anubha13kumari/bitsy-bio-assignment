/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'black': '#030303',
      'purple': '#8866F0',
      'white': '#FFFFFF',
      'levender': '#9EB5FB',
      'levender-light': '#F5F7FD',
      'gray': '#111111',
      'gray-light': '#F5F5F5',
      'pink':'#C333F8',
      'blue':'#1BC5E2',
      'dark-gray':'#A4A4A4',
      'brown':'#1E1E1E',
      'yellow':'#FFAC49',
      "grey":"#424141"
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}
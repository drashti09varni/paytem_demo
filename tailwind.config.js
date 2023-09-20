/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'xl':'375px',
      'sm':'504px',
      'xsm':'768px',
      'md': '960px',
      'xmd':'1024px',
      'lg': '1440px',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}
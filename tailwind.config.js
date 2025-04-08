/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tinta: '#0D0D0D',
        'tinta-negra': '#1A1A1A',
        crema: '#FDF6E3',
        dorado: '#f3eacb',
        fondo: '#121212',
      },
    },
  },
  plugins: [],
}

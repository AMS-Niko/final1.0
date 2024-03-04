/** @type {import('tailwindcss').Config} */
module.exports = {
  content:['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend:{
      backgroundImage: {
        'bg-signup': "url('/components/bg.jpg')",
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "375px",
        "2xs": "280px"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

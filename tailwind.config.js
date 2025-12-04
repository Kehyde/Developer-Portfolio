/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // disable dark mode completely
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8E7", // very light brown / cream
        darkbrown: "#4B2E2A", // dark brown for highlights
        accent: "#7B5E57", // optional medium brown accent
      },
    },
  },
  plugins: [],
};

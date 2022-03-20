module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#d946ef",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

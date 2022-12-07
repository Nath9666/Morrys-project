/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffae00",
        alpha: "#ffae007a",
        secondary: "#d5960e",
        button: "#d39e2b",
      },
    },
  },
  plugins: [],
};

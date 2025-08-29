/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#5A3FFF",           // Royal Purple
        "primary-light": "#7D5FFF",   // Light Royal Purple
        "primary-dark": "#3A2ACC",    // Deep Purple

        secondary: "#1E90FF",         // Bright Blue
        "secondary-light": "#4DA6FF", // Light Blue
        "secondary-dark": "#0056B3",  // Dark Blue
      },
    },
  },
  plugins: [],
}

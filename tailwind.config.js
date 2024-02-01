/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      yellow: "#f9ac4e",
      vanilla: "#fefcad",
      rose: "#ff0f80",
      black: "#0d1b1e",
      lavender: "#cfcfea",
    },
  },
  plugins: [],
};

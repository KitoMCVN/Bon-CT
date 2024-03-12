/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        highlight: "inset 0 1px 0 0 #ffffff0d",
      },
    },
  },
  plugins: [],
};

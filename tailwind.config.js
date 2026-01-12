/** @type {import('tailwindcss').Config} */
export default {
  // THIS IS THE KEY: It tells Tailwind to toggle dark mode 
  // when it sees the "dark" class on the <html> tag
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
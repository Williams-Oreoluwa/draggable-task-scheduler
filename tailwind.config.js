/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBackgroundColor": '#1A2029',
        "columnBackgroundColor": '#34404D'
      }
    },
  },
  plugins: [],
}


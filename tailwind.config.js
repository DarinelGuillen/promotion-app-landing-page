/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'GA': ['Gaoel', 'sans-serif']
      }
    }
  },
  plugins: [],
}

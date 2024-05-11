/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // add the css variable and include fallback fonts from tailwind default theme
        Roboto: ["Roboto", "sans-serif"],
        Rancho: ["Rancho", "cursive"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "night"],
  },
}
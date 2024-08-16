const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}" // Añade esta línea
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#00FF00',
        accent: '#0000FF',
        background: '#FFFFFF',
        surface: '#F5F5F5',
        backgroundDark: '#121212',
        surfaceDark: '#1E1E1E',
      },
    },
  },
  plugins: [nextui()],
}
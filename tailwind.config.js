/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Añade esta línea para habilitar el modo oscuro basado en clases
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // Rojo
        secondary: '#00FF00', // Verde
        accent: '#0000FF', // Azul
        background: '#FFFFFF', // Fondo claro
        surface: '#F5F5F5', // Superficie clara
        backgroundDark: '#121212', // Fondo oscuro
        surfaceDark: '#1E1E1E', // Superficie oscura
      },
    },
  },
  plugins: [],
}

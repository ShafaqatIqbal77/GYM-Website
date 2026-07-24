/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4500', // Orange Red
          dark: '#CC3700',
          light: '#FF6B35'
        },
        dark: {
          bg: '#0F0F0F',
          card: '#1A1A1A',
          border: '#2A2A2A',
          text: '#FFFFFF',
          muted: '#A0A0A0'
        }
      }
    },
  },
  plugins: [],
}

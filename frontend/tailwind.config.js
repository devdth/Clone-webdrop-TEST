/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#50E3C2',
        background: '#FFFFFF',
        text: '#333333',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 2px 5px rgba(0,0,0,0.2)',
        'custom-hover': '0 4px 8px rgba(0,0,0,0.2)',
      },
      borderRadius: {
        'custom': '5px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
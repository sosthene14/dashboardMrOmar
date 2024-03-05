/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'success': '#D8F4e8', 
        'error': '#FEEBEE',
        'warning': '#F9ECE1',
      },
      textColor: {
        'success': '#4CAF50',
        'error': '#FF5722',
        'warning': '#E9A96E',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#DD4900',
          50: '#FFB896',
          100: '#FFAB81',
          200: '#FF8F58',
          300: '#FF7430',
          400: '#FF5907',
          500: '#DD4900',
          600: '#A53600',
          700: '#6D2400',
          800: '#351100',
          900: '#000000',
          950: '#000000'
        },
      },
      boxShadow: {
        'light': '0 0 50px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        hand: ['"Comic Sans MS"', '"Marker Felt"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sketch: '4px 4px 0 #111827',
      },
    },
  },
  plugins: [],
}

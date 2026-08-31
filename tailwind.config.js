/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
        display: ['Instrument Sans', 'sans-serif'],
        body: ['Instrument Sans', 'sans-serif']
      },
      keyframes: {
        'home-marquee': {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-50%, 0, 0)' }
        },
        'culture-marquee': {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-50%, 0, 0)' }
        },
        'culture-marquee-reverse': {
          from: { transform: 'translate3d(-50%, 0, 0)' },
          to: { transform: 'translate3d(0, 0, 0)' }
        }
      },
      animation: {
        'home-marquee': 'home-marquee 30s linear infinite',
        'culture-marquee': 'culture-marquee 28s linear infinite',
        'culture-marquee-reverse': 'culture-marquee-reverse 22s linear infinite'
      },
      colors: {
        brand: {
          50: '#006AFF',
          100: '#006AFF',
          700: '#006AFF',
          800: '#006AFF',
          900: '#006AFF'
        }
      }
    }
  },
  plugins: []
}

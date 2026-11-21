/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Spider-Verse palette
        ink: {
          950: '#07070a',
          900: '#0d0d12',
          800: '#16161d',
          700: '#24242e',
        },
        paper: '#f6f1e4',
        spidey: {
          red: '#e4202e',
          'red-dark': '#b5121d',
          blue: '#1f4fff',
          cyan: '#00e1ff',
          yellow: '#ffe14d',
          magenta: '#ff2e93',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        comic: ['Bangers', 'Impact', 'sans-serif'],
      },
      boxShadow: {
        comic: '6px 6px 0 0 #000',
        'comic-sm': '3px 3px 0 0 #000',
        'comic-red': '6px 6px 0 0 #e4202e',
        'comic-cyan': '6px 6px 0 0 #00e1ff',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glitch: {
          '0%, 88%, 100%': { textShadow: '3px 3px 0 #e4202e, -3px -3px 0 #00e1ff', transform: 'translate(0)' },
          '90%': { textShadow: '-5px 2px 0 #e4202e, 5px -2px 0 #00e1ff', transform: 'translate(2px, -1px)' },
          '92%': { textShadow: '5px -3px 0 #e4202e, -5px 3px 0 #00e1ff', transform: 'translate(-2px, 1px)' },
          '94%': { textShadow: '-2px 0 0 #e4202e, 2px 0 0 #00e1ff', transform: 'translate(1px, 0)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.6) rotate(-8deg)' },
          '70%': { opacity: '1', transform: 'scale(1.08) rotate(2deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(-3deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        glitch: 'glitch 3.5s steps(1) infinite',
        'pop-in': 'pop-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tokyo: {
          bg: '#1a1b26',
          'bg-dark': '#16161e',
          fg: '#a9b1d6',
          primary: '#7aa2f7',
          secondary: '#bb9af7',
          accent: '#7dcfff',
          green: '#9ece6a',
          yellow: '#e0af68',
          red: '#f7768e',
          dark: '#24283b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #7aa2f7' },
          '100%': { boxShadow: '0 0 20px #bb9af7, 0 0 10px #7aa2f7' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: 'hsl(var(--purple))',
        lavender: 'hsl(var(--lavender))',
        grey: 'hsl(var(--grey))',
        white: 'hsl(var(--white))',
        black: 'hsl(var(--black))',
        'background': '#160F0E'
      },
      fontFamily: {
        'pt-serif': ['PT Serif', 'serif'],
        'work-sans-slab': ['Work Sans', 'sans-serif'], 
        'fraunces-slab': ['Fraunces', 'serif']
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}


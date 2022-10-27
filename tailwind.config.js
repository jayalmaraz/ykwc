/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    fontFamily: {
      sans: ['"Montserrat"', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['monospace'],
    },
    extend: {
      lineHeight: {
        15: '3.5rem',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover'],
    },
  },
  plugins: [],
};

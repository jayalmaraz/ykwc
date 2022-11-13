const fallbackSans = [
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  '"Noto Sans"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const disabledCss = {
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false,
  'code::before': false,
  'code::after': false,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM_Sans"', ...fallbackSans],
        // serif: ['Merriweather', 'serif'],
        // mono: ['monospace'],
      },
      lineHeight: {
        15: '3.5rem',
      },
      typography: {
        // Disable the default code block styling so that we can overwrite with hljs styles via tailwind.css
        // Thanks https://building.hellonext.co/blog/disable-tailwind-prose-code
        DEFAULT: {
          css: {
            ...disabledCss,
            a: {
              '&:hover': {
                'text-decoration': 'none',
              },
            },
          },
        },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        '2xl': { css: disabledCss },
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

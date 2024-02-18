const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': {
            opacity: '0.05',
            transform: 'translateX(-60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 1s ease-in-out',
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

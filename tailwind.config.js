const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  safelist: [/type/],
  theme: {
    extend: {},
  },
  plugins: [typography],
}
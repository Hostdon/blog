const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  safelist: [/type/],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"ヒラギノ角ゴ ProN"', '"Hiragino Kaku Gothic ProN"', '"メイリオ"', 'Meiryo', 'Osaka', '"ＭＳ Ｐゴシック"', '"MS PGothic"', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}
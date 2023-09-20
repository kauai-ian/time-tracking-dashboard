/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'], }
    },
    backgroundImage: {
      'icon-work': 'url("images/icon-work.svg")',
      'icon-play': 'url("images/icon-play.svg")',
      'icon-exercise': 'url("images/icon-exercise.svg")',
      'icon-self-care': 'url("images/icon-self-care.svg")',
      'icon-study': 'url("images/icon-study.svg")',
      'icon-social': 'url("images/icon-social.svg")',

    },
  },
  plugins: [],
}

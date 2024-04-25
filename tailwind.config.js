/** @type {import('tailwindcss').Config} */

const preset = require('@leedomjs/tailwindcss-preset')

module.exports = {
  presets: [
    preset({ mp: true }),
  ],
  content: ['./fixtures/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

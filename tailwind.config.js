import leedom from '@leedomjs/tailwindcss-preset'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    leedom(),
  ],
  content: ['./fixtures/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

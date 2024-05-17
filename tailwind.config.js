import preset from '@leedomjs/tailwindcss-preset'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    preset({ mp: false }),
  ],
  content: ['./fixtures/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

import preset from '@leedomjs/tailwindcss-preset'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    preset({
      mp: true,
      element: true,
      naive: true,
      vant: true,
    }),
  ],
  content: ['./fixtures/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

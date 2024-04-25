const color = require('@leedomjs/tailwindcss-color-preset')
const mp = require('@leedomjs/tailwindcss-miniprogram-preset')

module.exports = (opt = { mp: false }) => ({
  presets: [
    color,
    mp({
      mp: opt.mp,
    }),
  ],
})

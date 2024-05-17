import color from '@leedomjs/tailwindcss-color-preset'
import mp from '@leedomjs/tailwindcss-miniprogram-preset'

export default (opt = { mp: false }) => ({
  presets: [
    color,
    mp({
      enable: opt.mp,
    }),
  ],
})

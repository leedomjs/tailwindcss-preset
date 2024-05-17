import type { ColorOption } from '@leedomjs/tailwindcss-color-preset'
import color from '@leedomjs/tailwindcss-color-preset'
import mp from '@leedomjs/tailwindcss-miniprogram-preset'

const colors: ColorOption = {
  element: false,
  naive: false,
  vant: false,
}
export default (opt = { mp: false, ...colors }) => ({
  presets: [
    color({
      element: opt.element,
      naive: opt.naive,
      vant: opt.vant,
    }),
    mp({
      enable: opt.mp,
    }),
  ],
})

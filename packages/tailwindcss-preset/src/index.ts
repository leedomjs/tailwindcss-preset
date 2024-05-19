import { isPackageExists } from 'local-pkg'
import color from '@leedomjs/tailwindcss-color-preset'
import mp from '@leedomjs/tailwindcss-miniprogram-preset'

import type { Color, ColorOption } from '@leedomjs/tailwindcss-color-preset'

import type * as miniprogram from '@leedomjs/tailwindcss-miniprogram-preset'

/**
 * combine color and mp types
 *
 * @example
 * {
 *    mp?: boolean
 *    element?: boolean
 *    naive?: boolean
 *    vant?: boolean
 * }
 */
export type PresetOption = ColorOption & {
  mp?: boolean
}

const ELEMENT: boolean = isPackageExists('element-ui') || isPackageExists('element-plus')
const NAIVE: boolean = isPackageExists('naive-ui')
const VANT: boolean = isPackageExists('vant')

export default (opt: PresetOption = {
  mp: false,
  element: ELEMENT,
  naive: NAIVE,
  vant: VANT,
}) => ({
  presets: [
    color({
      element: opt.element ?? ELEMENT,
      naive: opt.naive ?? NAIVE,
      vant: opt.vant ?? VANT,
    }),
    mp({
      enable: opt.mp,
    }),
  ],
})

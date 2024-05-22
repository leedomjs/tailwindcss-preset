import { isPackageExists } from 'local-pkg'
import type { Config } from 'tailwindcss'
import {
  ElColors,
  NaiveColors,
  VanBackground,
  VanColors,
} from './colors'
import type { ColorOption } from './colors/types'

const ELEMENT: boolean = isPackageExists('element-ui') || isPackageExists('element-plus')
const NAIVE: boolean = isPackageExists('naive-ui')
const VANT: boolean = isPackageExists('vant')

export default (opt: ColorOption = {
  element: ELEMENT,
  naive: NAIVE,
  vant: VANT,
}): Config => ({
  content: [],
  theme: {
    extend: {
      colors: {
        ...(opt.element ?? ELEMENT ? ElColors : {}),
        ...(opt.naive ?? NAIVE ? NaiveColors : {}),
        ...(opt.vant ?? VANT ? VanColors : {}),
      },
      backgroundImage: {
        ...(opt.vant ?? VANT ? VanBackground : {}),
      },
    },
  },
})

export type * from './colors/types'

import { isPackageExists } from 'local-pkg'
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
}) => ({
  theme: {
    extend: {
      colors: {
        ...(opt.element ? ElColors : {}),
        ...(opt.naive ? NaiveColors : {}),
        ...(opt.vant ? VanColors : {}),
      },
      backgroundImage: {
        ...(opt.vant ? VanBackground : {}),
      },
    },
  },
})

export type * from './colors/types'

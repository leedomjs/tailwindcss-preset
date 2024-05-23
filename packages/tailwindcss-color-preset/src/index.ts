import { isPackageExists } from 'local-pkg'
import type { Config } from 'tailwindcss'
import {
  ElColors,
  NaiveColors,
  VanBackground,
  VanColors,
} from './colors'
import type { Option } from './colors/types'

const ELEMENT: boolean = isPackageExists('element-ui') || isPackageExists('element-plus')
const NAIVE: boolean = isPackageExists('naive-ui')
const VANT: boolean = isPackageExists('vant')

export default (opt?: Option): Config => {
  const colors = typeof opt === 'boolean' ? (opt ? { ...ElColors, ...NaiveColors, ...VanColors } : {}) : {
    ...(opt?.element ?? ELEMENT ? ElColors : {}),
    ...(opt?.naive ?? NAIVE ? NaiveColors : {}),
    ...(opt?.vant ?? VANT ? VanColors : {}),
  }

  const backgroundImage = typeof opt === 'boolean' ? (opt ? { ...VanBackground } : {}) : {
    ...(opt?.vant ?? VANT ? VanBackground : {}),
  }

  return {
    content: [],
    theme: {
      extend: {
        colors,
        backgroundImage,
      },
    },
  }
}

export type * from './colors/types'

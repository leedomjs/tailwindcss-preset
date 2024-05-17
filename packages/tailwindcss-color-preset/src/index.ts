import {
  ElColors,
  NaiveColors,
  VanBackground,
  VanColors,
} from './colors'

export default {
  theme: {
    extend: {
      colors: {
        ...ElColors,
        ...NaiveColors,
        ...VanColors,
      },
      backgroundImage: {
        ...VanBackground,
      },
    },
  },
}

export type * from './colors/types'

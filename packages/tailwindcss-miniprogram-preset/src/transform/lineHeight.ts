import { lineHeight } from 'tailwindcss/defaultTheme'
import type { CommonParam } from './types'

export default Object.entries(lineHeight).reduce((obj: CommonParam, [key, value]) => {
  if (Number.isInteger(+key)) {
    obj[key] = `${+value.replace('rem', '') * 32}rpx`
  } else {
    obj[key] = value
  }
  return obj
}, {})

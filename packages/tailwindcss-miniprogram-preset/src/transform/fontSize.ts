import { fontSize } from 'tailwindcss/defaultTheme'
import type { FontSizeValue } from './types'

export default Object.entries(fontSize).reduce((obj: FontSizeValue, [key, value]) => {
  const [size, { lineHeight }] = value
  const rpxSize = `${(+size.replace('rem', '')) * 32}rpx`
  const rpxLineHeight: string = lineHeight === '1' ? lineHeight : `${(+lineHeight.replace('rem', '')) * 32}rpx`
  obj[key] = [rpxSize, { lineHeight: rpxLineHeight }]
  return obj
}, {})

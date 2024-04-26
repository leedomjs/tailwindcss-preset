const { fontSize } = require('tailwindcss/defaultTheme')

module.exports = Object.entries(fontSize).reduce((obj, [key, value]) => {
  const [size, { lineHeight }] = value
  const rpxSize = `${(+size.replace('rem', '')) * 32}rpx`
  const rpxLineHeight = lineHeight === '1' ? lineHeight : `${(+lineHeight.replace('rem', '')) * 32}rpx`
  obj[key] = [rpxSize, { lineHeight: rpxLineHeight }]
  return obj
}, {})

const { lineHeight } = require('tailwindcss/defaultTheme')

module.exports = Object.entries(lineHeight).reduce((obj, [key, value]) => {
  if (Number.isInteger(+key)) {
    obj[key] = `${+value.replace('rem', '') * 32}rpx`
  } else {
    obj[key] = value
  }
  return obj
}, {})

const { spacing } = require('tailwindcss/defaultTheme')

module.exports = Object.entries(spacing).reduce((obj, [key, value]) => {
  if (!['0', 'px', '0.5', '1.5', '2.5', '3.5'].includes(key)) {
    obj[key] = `${+value.replace('rem', '') * 32}rpx`
  } else if (['0', 'px'].includes(key)) {
    obj[key] = value
  } else {
    obj[key.replace('.', '-')] = `${+value.replace('rem', '') * 32}rpx`
  }
  return obj
}, {})

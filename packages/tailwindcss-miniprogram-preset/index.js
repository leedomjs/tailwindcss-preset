const defaultTheme = require('tailwindcss/defaultTheme')
const transformFontSize = require('./transformFontSize')

const defaultFontSize = transformFontSize(defaultTheme.fontSize)

module.exports = (opt = {
  mp: true,
}) => opt.mp ? {
  theme: {
    /**
     * refer to https://tailwindcss.com/docs/customizing-spacing
     *
     * By default the spacing scale is inherited by the padding, margin, width, minWidth, maxWidth, height, minHeight, maxHeight, gap, inset, space, translate, scrollMargin, and scrollPadding core plugins.
     *
     * tailwindcss 0.25rem = 4px
     * IPhone6 1px = 2rpx
     * So with tailwindcss in mp, 0.25rem = 8rpx
     */
    spacing: Array.from({ length: 101 }).reduce((obj, _, i) => {
      obj[i] = `${i * 8}rpx;`
      obj[i + 0.5] = `${(i + 0.5) * 8}rpx;`
      return obj
    }, defaultTheme.spacing),

    fontSize: Array.from({ length: 101 }).reduce((obj, _, index) => {
      obj[index] = `${index * 8}rpx`
      return obj
    }, defaultFontSize),

    lineHeight: Array.from({ length: 20 }).reduce((obj, _, i) => {
      obj[i + 1] = `${(i + 1) * 8}rpx;`
      return obj
    }, defaultTheme.lineHeight),
    screens: [], // mp doesn't need screens.
    extend: {},
  },
  corePlugins: {
    preflight: false, // mp doesn't need base styles.
  },
} : {}

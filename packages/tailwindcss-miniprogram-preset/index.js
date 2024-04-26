const {
  spacing,
  fontSize,
  lineHeight,
} = require('./transform')

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
    spacing,
    fontSize,
    lineHeight,
    screens: [], // mp doesn't need screens.
    extend: {},
  },
  corePlugins: {
    preflight: false, // mp doesn't need base styles.
  },
} : {}

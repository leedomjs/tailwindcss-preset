# @leedomjs/tailwindcss-miniprogram-preset

[![npm](https://img.shields.io/npm/v/@leedomjs/tailwindcss-miniprogram-preset?color=333&label=)](https://www.npmjs.com/package/@leedomjs/tailwindcss-miniprogram-preset)

This package is designed for miniprogram, and transforms `px` to  `rpx`.
`0.25rem` = `4px` = `8rpx`

## Usage

### Install

```bash
pnpm add -D tailwindcss @leedomjs/tailwindcss-miniprogram-preset
```

### Config `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */

const mp = require('@leedomjs/tailwindcss-miniprogram-preset')

module.exports = {
  presets: [
    /**
     * You can also set an object param that contains a field called `enable`.
     * `enable` defaults to `true`, setting `enable` be `false` will enable default config of tailwindcss and disable the preset meanwhile.
     * 
     * mp({
     *  enable: false
     * })
     */
    mp(),
  ],
  content: [...],
  theme: {
    extend: {},
  },
  plugins: [],
  ...
}
```

## Tips

1. Use `-dv-` instead of `/` to generate percentage
2. Use `-` instead of `.`

For example:
``` html
<!-- w-1/2 = w-1-dv-2 -->
<div class="w-1/2 w-1-dv-2">hello, world.</div>

<!-- w-1.5 = w-1-5 -->
<div class="w-1.5 w-1-5">hello, world.</div>
```

## License

[MIT](https://github.com/leedomjs/tailwindcss-preset/blob/main/LICENSE) License © 2024-present [Leedom](https://github.com/leedom92)
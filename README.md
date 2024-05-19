# @leedomjs/tailwindcss-preset

[![npm](https://img.shields.io/npm/v/@leedomjs/tailwindcss-preset?color=333&label=)](https://www.npmjs.com/package/@leedomjs/tailwindcss-preset)

This package contains:
- [`@leedomjs/tailwindcss-miniprogram-preset`](https://www.npmjs.com/package/@leedomjs/tailwindcss-miniprogram-preset) is designed for miniprogram, and transforms `px` to  `rpx`.
- [`@leedomjs/tailwindcss-color-preset`](https://www.npmjs.com/package/@leedomjs/tailwindcss-color-preset) collects some UI Frameworks' theme colors for Tailwind CSS.

## Usage

### Install

```bash
pnpm add -D tailwindcss @leedomjs/tailwindcss-preset
```

### Config `tailwind.config.js`

> There is an object param that contains some fields `mp`, `element`, `naive`, `vant`.
> 
> `mp` defaults to `false`, setting `mp` be `true` will enable the preset, 
> otherwise will enable default config of tailwindcss and disable the preset meanwhile.
>
> `element`, `naive`, `vant`, these params default to dependencies that your project uses.
>
> If your project depends on `element-ui`, `element-plus`, `naive-ui`, `vant-ui`,the color will be enable automatically. Setting to false will disable the color, otherwise will enabled.

```js
const leedom = require('@leedomjs/tailwindcss-preset')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    leedom({
      mp: true,
      element: true,
      naive: true,
      vant: true,
    }),
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
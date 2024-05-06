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

```js
/** @type {import('tailwindcss').Config} */

const preset = require('@leedomjs/tailwindcss-preset')

module.exports = {
  presets: [
    /**
     * You can also set an object param that contains a field called `mp`.
     * `mp` defaults to `false`, setting `mp` be `true` will enable the preset, 
     * otherwise will enable default config of tailwindcss and disable the preset meanwhile
     * 
     * preset({ mp: true })
     */
    preset(),
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
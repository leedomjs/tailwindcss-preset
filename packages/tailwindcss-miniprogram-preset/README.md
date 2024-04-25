# @leedomjs/tailwindcss-miniprogram-preset

[![npm](https://img.shields.io/npm/v/@leedomjs/tailwindcss-miniprogram-preset?color=333&label=)](https://www.npmjs.com/package/@leedomjs/tailwindcss-miniprogram-preset)

This package is designed for miniprogram, and transforms `px` to  `rpx`.

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
     * You can also set an object param that contains a field called `mp`.
     * `mp` defaults to `true`, setting `mp` be `false` will enable default config of tailwindcss and disable the preset meanwhile.
     * 
     * mp({
     *  mp: false
     * })
     */
    mp,
  ],
  content: [...],
  theme: {
    extend: {},
  },
  plugins: [],
  ...
}
```

## License

[MIT](https://github.com/leedomjs/tailwindcss-preset/blob/main/LICENSE) License © 2024-present [Leedom](https://github.com/leedom92)
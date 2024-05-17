# @leedomjs/tailwindcss-color-preset

[![npm](https://img.shields.io/npm/v/@leedomjs/tailwindcss-color-preset?color=333&label=)](https://www.npmjs.com/package/@leedomjs/tailwindcss-color-preset)

Collect some UI Frameworks' theme colors for Tailwind CSS.

## Usage

### Install

```bash
pnpm add -D tailwindcss @leedomjs/tailwindcss-color-preset
```

### Config `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */

const color = require('@leedomjs/tailwindcss-color-preset')


/**
 * There is an object param that contains some fields `element`, `naive`, `vant`.
 * 
 * These params default to false, setting to true will enable the color.
 * If your project depends on `element-ui`, `element-plus`, `naive-ui`, `vant-ui`, the color will be enable automatically, even though you set value to false.
 * 
 */
module.exports = {
  presets: [
    color({
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

## License

[MIT](https://github.com/leedomjs/tailwindcss-preset/blob/main/LICENSE) License © 2024-present [Leedom](https://github.com/leedom92)
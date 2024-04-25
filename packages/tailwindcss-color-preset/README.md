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

module.exports = {
  presets: [
    color,
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
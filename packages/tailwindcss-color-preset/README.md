# @leedomjs/tailwindcss-color-preset

[![npm](https://img.shields.io/npm/v/@leedomjs/tailwindcss-color-preset?color=333&label=)](https://www.npmjs.com/package/@leedomjs/tailwindcss-color-preset)

Collect some UI Frameworks' theme colors for Tailwind CSS.

## Usage

### Install

```bash
pnpm add -D tailwindcss @leedomjs/tailwindcss-color-preset
```

### Config `tailwind.config.js`

> [!NOTE]
> **You could provide different param:**
> 
> 1.Object that contains some fields `element`, `naive`, `vant`.
> 
> If your project depends on `element-ui`, `element-plus`, `naive-ui`, `vant-ui`, the color will be enable automatically. Setting to false will disable the color, otherwise will enabled.
>
> 2.Boolean
>
> If true, all options are enabled, otherwise disabled.
>
> 3.Empty
>
> Auto-detected based on deps

```js
const color = require('@leedomjs/tailwindcss-color-preset')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    /**
     * color()
     * color(true)
     * color(false)
     */
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
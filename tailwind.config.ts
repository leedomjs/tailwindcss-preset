import type { Config } from 'tailwindcss'
import leedom from '@leedomjs/tailwindcss-preset'

export default {
  presets: [
    leedom(),
  ],
  content: ['./fixtures/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

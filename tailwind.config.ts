import type { Config } from 'tailwindcss'
import explorer1 from '@explorer-1/common/tailwind.config'

// JPL's Explorer-1 Tailwind config, scanned against our own markup.
export default {
  presets: [explorer1],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
} satisfies Config

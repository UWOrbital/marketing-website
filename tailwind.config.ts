import type { Config } from 'tailwindcss'
import explorer1 from '@explorer-1/common/tailwind.config'

// JPL's Explorer-1 Tailwind config, scanned against our own markup.
export default {
  presets: [explorer1],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // The page ground: the team's "deep space" grey, not pure black.
      // Explorer-1 lists its gradient stops apart from its colours, so the
      // ground goes in both, or `from-ground` is never generated.
      colors: { ground: '#121214' },
      gradientColorStops: { ground: '#121214' },
    },
  },
} satisfies Config

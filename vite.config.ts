import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // Explorer-1's SCSS imports its partials relative to node_modules.
      scss: { loadPaths: ['node_modules'], quietDeps: true, silenceDeprecations: ['import', 'global-builtin'] },
    },
  },
})

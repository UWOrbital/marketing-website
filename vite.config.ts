import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // The USWDS fonts and images, for url() in the theme and imports in code.
    alias: { 'uswds-dist': fileURLToPath(new URL('node_modules/@uswds/uswds/dist', import.meta.url)) },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['node_modules/@uswds/uswds/packages'],
        quietDeps: true,
      },
    },
  },
})

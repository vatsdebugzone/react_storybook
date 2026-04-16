import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // @ts-expect-error - Vite types may be outdated for newer Sass api objects
        api: 'modern-compiler',
        silenceDeprecations: ['import'],
      },
    },
  },
})

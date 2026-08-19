import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/about_me/',
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
      '@components': resolve(import.meta.dirname, './src/components'),
      '@data': resolve(import.meta.dirname, './src/data'),
      '@styles': resolve(import.meta.dirname, './src/styles'),
      '@utils': resolve(import.meta.dirname, './src/utils'),
      '@pages': resolve(import.meta.dirname, './src/pages'),
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }
          if (id.includes('node_modules/react-router')) {
            return 'router-vendor'
          }
          if (id.includes('node_modules/react-helmet-async')) {
            return 'seo-vendor'
          }
        }
      }
    }
  }
})

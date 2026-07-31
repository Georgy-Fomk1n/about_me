import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
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
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'seo-vendor': ['react-helmet-async']
        }
      }
    }
  }
})

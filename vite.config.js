import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/eventSite/', // Base path set to match GitHub Pages repository
  build: {
    outDir: 'dist',
    cssCodeSplit: false, // Ensure CSS is bundled together
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      // Create aliases for image paths to make them work in both development and production
      '@assets': resolve(__dirname, 'public/assets'),
      '@images': resolve(__dirname, 'public/images')
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled']
  }
})

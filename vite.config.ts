import type { UserConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { analyzer } from 'vite-bundle-analyzer'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr({
    svgrOptions: {
      exportType: 'default',
      ref: true,
      svgo: false,
      expandProps: true,
      titleProp: true,
    },
    include: '**/*.svg',
  }), tailwindcss(), analyzer()],
  resolve: {
    alias: {
      '@': '/src',
      'images': '/src/images',
    },
  },
  test: {
    environment: 'jsdom', // или 'happy-dom'
    setupFiles: ['/tests/setup.ts'],
    globals: true, // опционально
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
    __PROJECT__: JSON.stringify('frontend'),
  },
} as UserConfig)

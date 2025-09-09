import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
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
  }), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
      'images': '/src/images',
    },
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
    __PROJECT__: JSON.stringify('frontend'),
  },
})

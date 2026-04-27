import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        weddings: resolve(__dirname, 'weddings.html'),
        corporate: resolve(__dirname, 'corporate.html'),
        'after-dark': resolve(__dirname, 'after-dark.html'),
        '404': resolve(__dirname, '404.html'),
      },
    },
  },
})

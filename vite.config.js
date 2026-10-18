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
        stay: resolve(__dirname, 'stay.html'),
        'book-direct': resolve(__dirname, 'book-direct.html'),
        weddings: resolve(__dirname, 'weddings.html'),
        corporate: resolve(__dirname, 'corporate.html'),
        festival: resolve(__dirname, 'festival-weekends.html'),
        'after-dark': resolve(__dirname, 'after-dark.html'),
        vision: resolve(__dirname, 'vision-2027.html'),
        '404': resolve(__dirname, '404.html'),
      },
    },
  },
})

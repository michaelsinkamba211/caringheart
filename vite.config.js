import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
  base: '/',
  define: {
    global: 'window',
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    // allowedHosts: [
    //   'temporarily-foods-takes-performer.trycloudflare.com'
    // ],
    proxy: {
      '/api': {
        // prod
        // target: 'http://localhost',

        // dev
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
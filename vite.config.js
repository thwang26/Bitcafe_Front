import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_URL = 'http://localhost:8080'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({})],
  server: {
    proxy: {
      '/api': {
        target:   BASE_URL,
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})

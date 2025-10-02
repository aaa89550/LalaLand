import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-lalaland/',
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  define: {
    'process.env.NOTIFICATION_API_URL': JSON.stringify('https://api.example.com/notifications')
  }
})
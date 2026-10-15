import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: process.env.DEPLOY_BASE || '/',
  publicDir: command === 'build' ? false : 'public',
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['.lhr.life'],
  },
}))

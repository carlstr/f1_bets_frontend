import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Change this to your desired port
    host: '0.0.0.0', // Allow external access
    open: true, // Open browser automatically
  },
})

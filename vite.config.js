import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // You MUST add this block below to fix the "Invalid Hook Call" error
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
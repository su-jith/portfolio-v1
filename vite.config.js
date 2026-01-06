import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // 1. React Plugin with Compiler support
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', { target: '19' }] 
        ],
      },
    }),
    // 2. Tailwind Plugin (separate from react)
    tailwindcss(),
  ],
})

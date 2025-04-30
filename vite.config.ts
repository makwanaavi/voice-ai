import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  base: '/voice-ai/', // GitHub Pages subfolder
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components')
    }
  },
  server: {
    host: 'localhost',
    port: 5173
  }
})

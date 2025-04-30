import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({

  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components')
    }
  },
  server: {
    host: 'localhost', // Ensure the server only runs locally
    port: 5173         // Optional: you can change this port if needed
  }
})

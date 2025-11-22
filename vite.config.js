import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

   base: '/portfolio/',
  build: {
    outDir: 'dist',
  }


  // when its in your IDE uncomment this and comment the above base line
  // server: {
  //   // port: 5173, 
  //   // Auto-open browser on server start 
  //   open: true, 
  // }
})
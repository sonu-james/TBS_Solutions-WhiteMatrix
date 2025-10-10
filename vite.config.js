import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
   base: '/TBS_Solutions-WhiteMatrix/', // your repo name here
  plugins: [react()],
})
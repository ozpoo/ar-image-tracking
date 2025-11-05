import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig(async ({ command }) => ({
  root: 'src',
  base: '/ar-image-tracking/',
  build: {
    outDir: path.resolve(__dirname, 'dist')
  }
}))

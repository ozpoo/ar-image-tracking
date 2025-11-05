import { defineConfig } from 'vite'
import path from 'node:path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(async ({ command }) => ({
  root: 'src',
  build: {
    outDir: path.resolve(__dirname, 'dist')
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'assets/*',
          dest: 'assets'
        }
      ]
    })
  ]
}))

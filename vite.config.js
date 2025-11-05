import path from 'node:path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(async ({ command }) => ({
  root: 'src',
  base: '/ar-image-overlay/',
  build: {
    outDir: path.resolve(__dirname, 'dist')
  }
  // plugins: [
  //   viteStaticCopy({
  //     targets: [
  //       {
  //         src: 'assets/targets/*',
  //         dest: 'assets/targets'
  //       }
  //     ]
  //   })
  // ]
}))

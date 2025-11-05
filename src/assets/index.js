import 'aframe'
import 'mind-ar/dist/mindar-image-aframe.prod.js'

const assets = document.querySelector('a-assets')

document.querySelector('a-scene').addEventListener('targetFound', (e) => {
  const target = e.target
  assets.querySelector(target.querySelector('a-sound')?.getAttribute('src'))?.play()
  assets.querySelector(target.querySelector('a-video')?.getAttribute('src'))?.play()
})

document.querySelector('a-scene').addEventListener('targetLost', (e) => {
  const target = e.target
  assets.querySelector(target.querySelector('a-sound')?.getAttribute('src'))?.pause()
  assets.querySelector(target.querySelector('a-video')?.getAttribute('src'))?.pause()
})

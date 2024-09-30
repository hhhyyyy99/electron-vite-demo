import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    resolve: {
      alias: {
        '@constants': resolve('/src/constants'),
      }
    },
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/preload/index.ts'),
          about: resolve(__dirname, 'src/preload/about.ts')
        }
      }
    },
    resolve: {
      alias: {
        '@constants': resolve('/src/constants'),
      }
    },
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/renderer/index.html'),
          about: resolve(__dirname, 'src/renderer/about.html')
        }
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@constants': resolve('/src/constants'),
      }
    },
    plugins: [react()]
  }
})

import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

const constantsDir = resolve(__dirname, 'src/constants')

export default defineConfig({
  main: {
    resolve: {
      alias: {
        '@constants': constantsDir
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
        '@constants': constantsDir
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
        '@renderer': resolve(__dirname, 'src/renderer/src'),
        '@constants': constantsDir
      }
    },
    plugins: [react()]
  }
})

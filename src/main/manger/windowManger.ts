import { BrowserView, BrowserWindow } from 'electron'
import path, { join } from 'path'
import { preloadPath } from '../utils/tools'
import { is } from '@electron-toolkit/utils'

class WindowManger {
  $win: BrowserWindow | null = null
  constructor() {}

  public async createWindow() {
    if (this.$win) return
    this.$win = new BrowserWindow({
      width: 800,
      height: 600,
      show: false,
      webPreferences: {
        preload: preloadPath("about.js"),
        sandbox: false,
        experimentalFeatures: true
      }
    })
    this.$win.on('ready-to-show', () => {
      this.$win?.show()
    })
    this.$win.on('closed', () => {
      this.$win = null
    })
    if (is.dev) {
      this.$win.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/about.html`)
    } else {
      this.$win.loadFile(path.join(__dirname, '../renderer/about.html'))
    }
  }

  public async destroyWindow() {
    if (this.$win) {
      this.$win.destroy()
      this.$win = null
    }
  }
}

export default new WindowManger()
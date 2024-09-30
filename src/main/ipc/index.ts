import { desktopCapturer, ipcMain, screen } from 'electron'
import { registerLogger, unregisterLogger } from './log'
import { EV_SEND_DESKTOP_CAPTURER_SOURCE } from '@constants/Channel'
import { getDisplay, selfWindws } from '../utils/tools'

export class IPC {
  public ipc = null
  constructor() {}
  async registerIPC() {
    if (!this.ipc) {
      registerLogger()
    }
  }
  async unregisterIPC() {
    unregisterLogger()
  }
}

const ipc = new IPC()

export async function registerIPC() {
  ipc.registerIPC()
}
export async function unregisterIPC() {
  ipc.unregisterIPC
}

import { registerFFmpegIPC, unregisterFFmpegIPC } from './ffmpeg'
import { registerLogger, unregisterLogger } from './log'
export class IPC {
  public ipc = null
  constructor() {}
  async registerIPC() {
    if (!this.ipc) {
      registerLogger()
      registerFFmpegIPC()
    }
  }
  async unregisterIPC() {
    unregisterLogger()
    unregisterFFmpegIPC()
  }
}

const ipc = new IPC()

export async function registerIPC() {
  ipc.registerIPC()
}
export async function unregisterIPC() {
  ipc.unregisterIPC
}

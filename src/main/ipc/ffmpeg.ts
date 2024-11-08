import { ipcMain } from 'electron'
import { runTranscoding } from '../utils/ffmpeg'

// 随机生成一个名字
const name = `${Math.random().toString(36).substr(2, 15)}.mp4`
const outputPath = `C:\\Users\\Administrator\\Downloads\\Video\\test\\${name}`
export function registerFFmpegIPC() {
  ipcMain.handle('getVideoInfo', async (event, filePath) => {
    console.log('getVideoInfo', { filePath, outputPath })
    try {
      const videoInfo = await runTranscoding(filePath, outputPath)
      return { status: 'success', data: videoInfo }
    } catch (error) {
      console.error('getVideoInfo:error', error)
      return { status: 'error', data: error }
    }
  })
}
export function unregisterFFmpegIPC() {
  ipcMain.removeAllListeners('getVideoInfo')
}

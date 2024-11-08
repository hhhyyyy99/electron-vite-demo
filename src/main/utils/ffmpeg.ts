const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const FFmpeg = require('fluent-ffmpeg');
const ffprobe = require('ffprobe-static');

const setPath = isDev => {
  const ffprobePath = isDev ? ffprobe.path : ffprobe.path.replace('app.asar', 'app.asar.unpacked');
  const formateFfmpegPath = isDev ? ffmpegPath : ffmpegPath.replace('app.asar', 'app.asar.unpacked');
  FFmpeg.setFfprobePath(ffprobePath);
  FFmpeg.setFfmpegPath(formateFfmpegPath);
};

setPath(process.env.NODE_ENV === 'development')
// 检查视频是否已经是H.264编码的MP4
async function isH264MP4(inputPath) {
  return new Promise((resolve, reject) => {
    FFmpeg.ffprobe(inputPath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const format = data.format;
        const videoStreams = data.streams.filter(s => s.codec_type === 'video');
        const isH264 = videoStreams.some(s => s.codec_name === 'h264');
        const isMP4 = format.format_name === 'mov,mp4,m4a,3gp,3g2,mj2';
        resolve(isH264 && isMP4);
      }
    });
  });
}

// 封装成async函数进行转码
async function transcodeVideo(inputPath, outputPath) {
  return new Promise<void>((resolve, reject) => {
    FFmpeg(inputPath)
      .on('start', (commandLine) => {
        console.log('Spawned FFmpeg with command: ' + commandLine);
      })
      .on('error', (err) => {
        console.log('An error occurred: ' + err.message);
        reject(err);
      })
      .on('progress', (progress) => {
        console.log(`Processing progress: ${progress.percent}%`);
      })
      .on('end', () => {
        console.log('Processing finished !');
        // 转码完成后，使用ffprobe获取视频信息
        FFmpeg.ffprobe(outputPath, (err, data) => {
          if (err) {
            console.log('Failed to probe video information: ' + err.message);
            reject(err);
          } else {
            // 打印视频详细信息
            console.log('Video information after transcoding:');
            console.log(data);
            resolve(data);
          }
        });
      })
      .addOption('-c:v libx264') // 设置视频编码器为H.264
      .addOption('-preset slow') // 编码速度和质量的平衡
      .addOption('-crf 20') // 视频质量控制
      .addOption('-c:a aac') // 设置音频编码器为AAC
      .addOption('-b:a 192k') // 设置音频比特率为192k
      .save(outputPath);
  });
}

// 使用async函数进行转码
export async function runTranscoding(inputPath, outputPath) {
  try {
    const isH264 = await isH264MP4(inputPath);
    if (isH264) {
      console.log('Video is already H.264 MP4, no need to transcode.');
    } else {
      console.log('Video transcoding completed successfully.');
      return await transcodeVideo(inputPath, outputPath);
    }
  } catch (error) {
    console.error('Video processing failed:', error);
  }
}

// // 运行转码函数
// runTranscoding();
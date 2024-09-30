import { is } from "@electron-toolkit/utils";
import { join } from "path";
import { isWin } from "../utils/tools";

export const setAppGlobalData = () => {
  const electronDistPath = join(__dirname, "../");
  const distPath = join(electronDistPath, "../dist");
  const publicPath = is.dev ? distPath : join(electronDistPath, "../public");
  const asarPath = join(distPath, "/../..");

  global.pathConfig = {
    electronDistPath,
    distPath,
    publicPath,
    asarPath,
    // trayIcon: join(publicPath, `/icons/${isWin ? "icon.ico" : "tray.png"}`),
    indexHtml: join(distPath, "index.html"),
    preload: join(__dirname, "../preload/index.js"),
  };
};

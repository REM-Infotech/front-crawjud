import { app, BrowserWindow } from "electron";
import isDev from "electron-is-dev";
import { resolve } from "path";
const createWindow = async () => {
  const win = new BrowserWindow({
    minWidth: 1024,
    minHeight: 768,
  });

  if (isDev) {
    await win.loadURL("http://localhost:3000");
  } else if (!isDev) {
    await win.loadFile(resolve(__dirname, "../../dist/renderer/index.html"));
  }
};

app.whenReady().then(() => {
  createWindow();
});

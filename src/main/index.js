import { app, BrowserWindow } from "electron";
import isDev from "electron-is-dev";
import { resolve } from "path";
const createWindow = async () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  if (isDev) {
    await win.loadURL("http://localhost:3000");
  } else if (!isDev) {
    await win.loadFile(resolve(__dirname, "../../index.html"));
  }
};

app.whenReady().then(() => {
  createWindow();
});

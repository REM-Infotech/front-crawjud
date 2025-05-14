import { initialize } from "@electron/remote/main/index";
import { app, BrowserWindow } from "electron";
import { join } from "path";

app.setAppUserModelId("com.app.RemDevs.CrawJUD");

const createWindow = async () => {
  initialize();
  const mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    width: minWidth,
    height: minHeight,
    titleBarStyle: titleBarStyle(),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
    },
  });
};

app.whenReady().then(createWindow);

app.on("window-all-closed", async () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

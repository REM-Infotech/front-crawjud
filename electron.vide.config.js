/**
 * @type {import('electron-vite').UserConfig}
 */
export default {
  // `build` can specify multiple entry builds, which can be
  // Main process, Preload scripts, Worker process, etc.
  build: [
    {
      // `entry` is an alias for `build.lib.entry`
      // in the corresponding file of `config`.
      entry: "src/main/index.js",
      config: "vite.config.main.js",
    },
    {
      entry: "src/preload/index.js",
      config: "vite.config.preload.js",
    },
  ],
  renderer: [
    {
      name: "main_window",
      config: "vite.config.ts",
    },
  ],
};

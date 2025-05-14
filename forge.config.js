const { default: VitePlugin } = require("@electron-forge/plugin-vite");

module.exports = {
  packagerConfig: {
    // icon: icon,
    name: "CrawJUD_Desktop",
    osxSign: {},
    asar: true,
    // windowsSign: {
    //   certificateFile: "C:\\Users\\nicholas.silva\\Desktop\\assinarcodigo.pfx",
    //   certificatePassword: "5550123",
    //   description: "CrawJUD Automatização de Processos Judiciais",
    //   website: "https://reminfotech.net.br",
    //   debug: true,
    //   signJavaScript: true
    // },
    appCategoryType: "com.app.crawjud",
  },
  makers: [
    {
      name: "@electron-forge/maker-zip",
    },
    {
      name: "@electron-forge/maker-deb",
    },
    {
      name: "@electron-forge/maker-squirrel",
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-vite",
      config: {
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
      },
    },
  ],
};

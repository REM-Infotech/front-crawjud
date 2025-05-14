module.exports = {
  packagerConfig: {
    name: "CrawJUD_Desktop",
    osxSign: {},
    asar: false,
    // windowsSign: {
    //   certificateFile: "C:\\Users\\nicholas.silva\\Desktop\\assinarcodigo.pfx",
    //   certificatePassword: "5550123",
    //   description: "CrawJUD Automatização de Processos Judiciais",
    //   website: "https://reminfotech.net.br",
    //   debug: true,
    //   signJavaScript: true
    // },
    appCategoryType: "com.app.crawjud",
    ignore: [
      /^\/src/,
      /(.eslintrc.json)|(.gitignore)|(electron.vite.config.ts)|(forge.config.cjs)|(tsconfig.*)/,
      /(.git)|(node_modules)|(package-lock.json)|(yarn.lock)|(pnpm-lock.yaml)/,
      /(.vscode)/,
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};

import vue from "@vitejs/plugin-vue";
import { BootstrapVueNextResolver } from "bootstrap-vue-next";
import { defineConfig } from "electron-vite";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { fileURLToPath, URL } from "url";
import vueDevTools from "vite-plugin-vue-devtools";

/**
 * @type {import('electron-vite').UserConfig}
 */
export default defineConfig({
  main: {
    root: "./",
    base: "./",
    plugins: [vue(), vueDevTools()],
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      outDir: "dist/main",
      rollupOptions: {
        external: ["fs", "path", "os", "child_process", "stream", "buffer"], // Configura os módulos do Node.js como externos
      },
    },
  },
  preload: {
    root: "./",
    base: "./",
    plugins: [vue(), vueDevTools()],
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      outDir: "dist/preload",
      rollupOptions: {
        input: "./src/preload/index.js",
        external: ["fs", "path", "os", "child_process", "stream", "buffer"], // Configura os módulos do Node.js como externos
      },
    },
  },
  renderer: {
    root: "./",
    base: "./",
    server: {
      host: "localhost",
      port: 3000,
    },
    plugins: [
      vue(),
      vueDevTools(),
      Components({
        resolvers: [BootstrapVueNextResolver()],
      }),
    ],
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      outDir: "dist/renderer",
      rollupOptions: {
        input: {
          index: resolve(__dirname, "index.html"),
        },
      },
    },
  },
});

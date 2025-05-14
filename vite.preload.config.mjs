import vue from "@vitejs/plugin-vue";
import { BootstrapVueNextResolver } from "bootstrap-vue-next";
import Components from "unplugin-vue-components/vite";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";
// https://vitejs.dev/config
export default defineConfig({
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
});

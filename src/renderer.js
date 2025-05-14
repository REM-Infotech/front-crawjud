import { createBootstrap } from "bootstrap-vue-next";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "datatables.net-select";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

const pinia = createPinia();
const app = createApp(App);
pinia.use(piniaPluginPersistedstate);

app.use(createBootstrap()); // Important
app.use(router);
app.use(pinia);
app.mount("#app");

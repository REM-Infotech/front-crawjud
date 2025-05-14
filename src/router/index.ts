import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    // name: "logs",
    // component: () => import("@pages/logs/LogBotView.vue"),
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

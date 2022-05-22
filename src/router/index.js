import { createRouter, createWebHashHistory } from "vue-router";
import mainPage from "@/views/mainPage.vue";

const routes = [
  { path: "/", redirect: "/main-page" },
  {
    path: "/main-page",
    name: "mainPage",
    component: mainPage,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
export default router;

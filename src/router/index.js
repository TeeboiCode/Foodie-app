import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/soburat",
    name: "Soburat",
    component: () =>
      import("../components/TasksFolder/TasksView/TaskSoburat.vue"),
  },
  {
    path: "/ayomikun",
    name: "Ayomikun",
    component: () =>
      import("../components/TasksFolder/TasksView/TaskAyomikun.vue"),
  },
  {
    path: "/oyinkansola",
    name: "OyinkansolaTasks",
    component: () =>
      import("../components/TasksFolder/TasksView/TaskOyinkansola.vue"),
  },
  {
    path: "/precious",
    name: "PreciousTask",
    component: () =>
      import("../components/TasksFolder/TasksView/TaskPrecious.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

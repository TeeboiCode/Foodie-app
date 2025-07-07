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
      import("../components/TasksFolder/Ayomikun.vue"),
  },
   {
    path: "/ayomikun02",
    name: "Ayomikun02",
    component: () =>
      import("../components/TasksFolder/Ayomikun02.vue"),
  },
  {
    path: "/ayomikun03",
    name: "Ayomikun03",
    component: () =>
      import("../components/TasksFolder/Ayomikun03.vue"),
  },
  {
    path: "/ayomikun04",
    name: "Ayomikun04",
    component: () =>
      import("../components/TasksFolder/Ayomikun04.vue"),
  },
   {
    path: "/ayomikun05",
    name: "Ayomikun05",
    component: () =>
      import("../components/TasksFolder/Ayomikun05.vue"),
  },
  {
    path: "/ayomikun06",
    name: "Ayomikun06",
    component: () =>
      import("../components/TasksFolder/Ayomikun06.vue"),
  },
  {
    path: "/oyinkansola",
    name: "OyinkansolaTasks",
    component: () =>
      import("../components/TasksFolder/TasksView/TaskOyinkansola.vue"),
  },
  {
    path: "/seyi",
    name: "Seyi",
    component: () => import("../components/TasksFolder/TasksView/TaskSeyi.vue"),
  },
  {
    path: "/precious",
    name: "PreciousTask",
    component: () =>
      import("../components/TasksFolder/Precious.vue"),
  },
  {
    path: "/precious02",
    name: "PreciousTask02",
    component: () =>
      import("../components/TasksFolder/Precious02.vue"),
  },
  {
    path: "/precious03",
    name: "PreciousTask03",
    component: () =>
      import("../components/TasksFolder/Precious03.vue"),
  },
   {
    path: "/precious04",
    name: "PreciousTask04",
    component: () =>
      import("../components/TasksFolder/Precious04.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

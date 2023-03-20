import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomeViews",
    component: () => import("@/views/home/HomeView.vue"),
  },
  {
    path: "/example",
    redirect: "/example/todo",
    children: [
      {
        path: "/example/todo",
        name: "TodoView",
        component: () => import("@/views/example/TodoView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/home.vue";
import about from "@/views/about.vue";
import todo from "@/views/todo.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/todo",
    name: "todo",
    component: todo,
  },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    });
    export default router;

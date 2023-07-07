import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import EmployeesView from "../views/Employees/EmployeesView.vue";
import NotFound from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/employees",
    name: "Employees",
    component: EmployeesView,
    props: true,
  },
  // 404
  {
    path: "/:catchAll(.*)",
    name: "not found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

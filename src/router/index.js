import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Explore from "../views/Explore.vue";
import Library from "../views/Library.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/subscription",
    name: "Subscription",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Subscription.vue"),
  },
  {
    path: "/library",
    name: "Library",
    component: Library,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

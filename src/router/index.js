import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import info from "../views/info.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:shaID",
    name: "info",
    component: info,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

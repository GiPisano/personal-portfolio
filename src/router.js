import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
  ],
});

export { router };
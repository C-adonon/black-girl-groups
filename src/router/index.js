import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Play from "../views/PlayView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/play/:group",
      name: "play",
      component: Play,
      params: true,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    (to.path === "/play/" && !to.params.group) ||
    (to.path === "/play" && !to.params.group)
  ) {
    next({ path: "/" });
  } else {
    next();
  }
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;

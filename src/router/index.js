import { createRouter, createWebHistory } from "vue-router";
import Gallery from "../views/Gallery.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Page from "../views/Page.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:user",
      name: "Gallery",
      component: Gallery,
      props: true,
      children: [
        {
          path: ":bgsName",
          name: "Page",
          component: Page,
          props: true,
        },
      ],
    },
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
  ],
});

export default router;

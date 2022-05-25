import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

import Gallery from "../views/Gallery.vue";
import Page from "../views/Page.vue";
import BrandGuide from "../views/BrandGuide.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:user",
      name: "Home",
      component: Home,
      props: true,
      children: [
        {
          path: "",
          name: "Gallery",
          component: Gallery,
        },
        {
          path: ":bgsName",
          name: "BrandGuide",
          component: BrandGuide,
          props: true,
          children: [
            {
              path: ":pageName",
              name: "Page",
              component: Page,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
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

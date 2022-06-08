import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

import Gallery from "../views/Gallery.vue";
import Page from "../views/Page.vue";
import BrandGuide from "../views/BrandGuide.vue";
import AssetGallery from "../views/AssetGallery.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
    {
      path: "/:user/gallery",
      name: "Gallery",
      component: Gallery,
    },
    {
      path: "/:user/:bgsName",
      name: "BrandGuide",
      component: BrandGuide,
      props: true,
      children: [],
    },
    {
      path: "/:user/:bgsName/:pageName",
      name: "Page",
      component: Page,
      props: true,
    },
    {
      path: "/:user/:bgsName/asset-gallery",
      name: "AssetGallery",
      component: AssetGallery,
    },
  ],
});

export default router;

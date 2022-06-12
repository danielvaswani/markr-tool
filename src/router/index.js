import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

import Gallery from "../views/Gallery.vue";
import Page from "../views/Page.vue";
import BGSContainer from "../views/BGSContainer.vue";
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
      path: "/:user",
      name: "Gallery",
      component: Gallery,
    },
    {
      path: "/:user/:bgsName",
      name: "BGSContainer",
      component: BGSContainer,
      props: true,
      children: [],
    },
    {
      path: "/:user/:bgsName/:pageName",
      name: "Page",
      component: Page,
    },
    {
      path: "/:user/:bgsName/asset-gallery",
      name: "AssetGallery",
      component: AssetGallery,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import UserProfilePage from "../views/UserProfilePage.vue";

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
      path: "/userprofile",
      name: "UserProfilePage",
      component: UserProfilePage,
    },
    {
      path: "/:user",
      name: "Gallery",
      component: Gallery,
      props: true,
      children: []
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

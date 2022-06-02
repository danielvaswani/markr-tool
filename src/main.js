import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faWandMagicSparkles, faPen, faBrush);


createApp(App).use(router).use(store).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

/* eslint-disable no-new */
// new Vue({
//   el: "#box",
//   components: { App },
//   template: "<App/>"
// });

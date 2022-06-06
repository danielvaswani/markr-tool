import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRightFromBracket, faCircleQuestion, faEye, faGear, faPaintbrush, faPencil, faTriangleExclamation, faWandMagic, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faWandMagicSparkles, faPen, faBrush, faUser, faListCheck, faLock, faGear, faArrowRightFromBracket, faCircleQuestion, faTriangleExclamation, faEye, faWandMagic, faPaintbrush, faPencil);

import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

const app = createApp(/** App **/);
app.use(BootstrapIconsPlugin);
app.mount('#app');

createApp(App).use(router).use(store).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

/* eslint-disable no-new */
// new Vue({
//   el: "#box",
//   components: { App },
//   template: "<App/>"
// });

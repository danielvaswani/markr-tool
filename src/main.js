import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRightFromBracket,
  faChevronRight,
  faCircleQuestion,
  faClapperboard,
  faEye,
  faGear,
  faGripLines,
  faPaintbrush,
  faPencil,
  faTriangleExclamation,
  faWandMagic,
  faWandMagicSparkles,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faWandMagicSparkles,
  faPen,
  faBrush,
  faUser,
  faListCheck,
  faLock,
  faGear,
  faArrowRightFromBracket,
  faCircleQuestion,
  faTriangleExclamation,
  faEye,
  faWandMagic,
  faPaintbrush,
  faPencil,
  faClapperboard,
  faGripLines,
  faXmark,
  faChevronRight
);

import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import VueDragResize from "vue-drag-resize";

const app = createApp(App)
  .use(router)
  .use(store)
  .use(BootstrapIconsPlugin)
  .component("vue-drag-resize", VueDragResize)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

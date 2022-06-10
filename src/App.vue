<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
import { BIconBootstrap } from "bootstrap-icons-vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import { ref } from "vue";
import { h, Transition } from "vue";
import { useStore } from "vuex";

const store = useStore();
let showSidebar = ref(true);

function toggleSidebar() {
  showSidebar.value = !showSidebar.value;
}
</script>

<template>
  <div class="home">
    <Transition name="slide-fade">
      <Sidebar>
      </Sidebar>
    </Transition>

    <Transition name="slide-fade">
      <router-view class="app-router-view"
        :style="{ 'width': store.state.showSidebar ? '100% - 250px': '100%', 'transform': 'translateX(' + (store.state.showSidebar ? '250px' : '0px') + ')', 'transition': 'all 0.3s ease-in-out'}">
      </router-view>
    </Transition>
  </div>
</template>

<style>




* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  src: url(../src/assets/fonts/Gilroy-ExtraBold.otf);
  font-family: Gilroy Extrabold;
}

@font-face {
  src: url(../src/assets/fonts/Gilroy-Light.otf);
  font-family: Gilroy;
}

.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-250px);
  /* opacity: 0; */
}

.app-router-view {
  background-color: whitesmoke;
  /* min-height: 100vh; */
  overflow-x: hidden;
  /* transform: translateX(250px); */
  overscroll-behavior: none;
}

.home {
  background-color: whitesmoke;
  overflow-x: hidden;
  max-width: 100vw;
  min-height: 100vh;
}

/* width */
::-webkit-scrollbar {
  width: thin;
}

/* Track */
::-webkit-scrollbar-track {
  background: #191827;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #e9baedaf;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #e9baed;
}

/* @font-face {
  font-family: "Gilroy Extrabold";
  src: local("Gilroy Extrabold"), url(./assets/fonts/Gilroy-ExtraBold.otf);
}

@font-face {
  font-family: "Gilroy Light";
  src: local("Gilroy Light"), url(./assets/fonts/Gilroy-Light.otf);
} */

#app {
  font-family: Gilroy;
}

.app-router {
  min-height: 100vh;
}
</style>

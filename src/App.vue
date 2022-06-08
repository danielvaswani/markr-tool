<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
import { BIconBootstrap } from "bootstrap-icons-vue";
</script>

<template>
  <router-view class="main-router"></router-view>
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

/* width */
::-webkit-scrollbar {
  width: 10px;
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

.main-router {
  min-height: 100vh;
}
</style>

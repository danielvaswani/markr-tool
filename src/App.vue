<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
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
  font-family: "Gilroy Extrabold";
  src: local("Gilroy Extrabold"), url(./assets/fonts/Gilroy-ExtraBold.otf);
}

@font-face {
  font-family: "Gilroy Light";
  src: local("Gilroy Light"), url(./assets/fonts/Gilroy-Light.otf);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.main-router {
  min-height: 100vh;
}
</style>

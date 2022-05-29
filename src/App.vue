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

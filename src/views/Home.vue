<template>
  <div class="home">
    <Sidebar></Sidebar>
    <router-view class="app-router-view"></router-view>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>

<style scoped>
.app-router-view {
  background-color: whitesmoke;
  width: 100%;
  min-height: 100vh;
  margin-left: 250px;
}
</style>

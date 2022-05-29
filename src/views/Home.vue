<template>
  <div class="home">
    <Sidebar></Sidebar>
    <UserProfile></UserProfile>
    <router-view class="app-router-view"></router-view>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import UserProfile from "../components/UserProfile.vue";
import Container from "../components/Container.vue";
import Asset from "../components/Asset.vue";
</script>

<style scoped>
.app-router-view {
  background-color: whitesmoke;
  width: 100%;
  /* min-height: 100vh; */
  /* margin-left: 250px; */
  overflow-x: hidden;
}

.home {
  background-color: whitesmoke;
  display: flex;
}
</style>

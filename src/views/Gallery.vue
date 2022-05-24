<template>
  <div class="gallery">
    <Sidebar></Sidebar>
    <router-view class="page-router"></router-view>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>

<style>
.gallery {
  display: flex;
}

.page-router {
  background-color: lightgrey;
  width: 100%;
  min-height: 100vh;
}
</style>

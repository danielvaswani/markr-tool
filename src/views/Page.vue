<template>
  <div class="page">
    <h1>{{ $route.params.bgsName }}</h1>
    <h2>Hello</h2>
    <!-- <Asset v-for="a in assets"></Asset> -->
  </div>
</template>

<script setup>
import Asset from "../components/BgsGallery/EditButton.vue";
</script>

<style scoped>
.asset-gallery-container {
  width: 100%;
  height: 100%;
}
</style>

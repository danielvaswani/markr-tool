<template>
  <div class="page">
    <h1>{{ $route.params.bgsName }}</h1>
    <!-- <Asset v-for="a in assets"></Asset> -->
  </div>
</template>

<script setup>
import Asset from "../components/Asset.vue";
</script>

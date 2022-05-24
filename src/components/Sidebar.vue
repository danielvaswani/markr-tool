<template>
  <div class="sidebar">
    <h1>{{ $route.params.user }}</h1>
  </div>
</template>

<script setup></script>

<style>
.sidebar {
  min-height: 100vh;
  width: 240px;
  background-color: navy;
}
</style>

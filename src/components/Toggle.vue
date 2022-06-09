<template>
  <div class="container">
    <div
      class="ellipse"
      :style="{
        order: value ? 2 : 1,
        background: value ? '#fabdff' : '#e9e9e9',
      }"
    />
    <div
      class="text"
      :style="{
        order: value ? 1 : 2,
      }"
    >
      {{ value ? "ON " : "OFF" }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  value: Boolean,
});
</script>

<style scoped>
* {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  gap: 2px;

  position: relative;
  width: 47px;
  height: 19.36px;

  background: #191827;
  border: 1px solid #ffffff;
  border-radius: 12px;
}

.text {
  width: 25px;
  height: 12px;

  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  /* background-color: yellow; */
  color: #d9d9d9;
}

.ellipse {
  width: 13.36px;
  height: 13.36px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  border-radius: 100%;
  /* margin-inline: auto; */
}
</style>

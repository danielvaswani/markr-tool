<template>
  <div class="subtitle-container">
    <div v-if="showDrag" class="move-element">
      <font-awesome-icon class="grip-lines" icon="grip-lines" />
    </div>

    <h3
      @mouseenter="toggleDrag()"
      @mouseleave="toggleDrag()"
      class="template-subtitle"
      id="template_subtitle"
      contenteditable="true"
    >
      {{ $props.value }}
    </h3>
  </div>
</template>

<script setup>
import { ref } from "vue";

let showDrag = ref(false);

function toggleDrag() {
  showDrag.value = !showDrag.value;
}

defineProps({
  value: String,
});
</script>

<style scoped lang="scss">
.subtitle-container {
  text-align: justify;
  width: 90%;
  display: flex;
  gap: 25px;
  word-wrap: break-word;
  padding: 5px;
  font-size: 1.2rem;
}

.move-element {
  margin-top: 8px;
}

.grip-lines {
  display: block !important;
  color: #888 !important;
  cursor: pointer !important;
  font-size: 1.5rem !important;
  position: absolute;
  z-index: 3;
}

.grip-lines:hover {
  color: #e9baed !important;
  transform: scale(105%);
}

.template-subtitle {
  padding: 5px;
  border: transparent;
  width: 300px;
  font-weight: 600;
  word-wrap: break-word;
  height: fit-content;
  // border: 1px solid #19182753;
  // border-radius: 5px;
  // box-shadow: 1px 1px 1px #888888 inset;
}

.template-subtitle:hover {
  border: #e9baed 2px solid;
  padding: 5px;
}
</style>

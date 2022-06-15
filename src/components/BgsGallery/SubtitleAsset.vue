<template>
  <div v-if="showAsset" class="subtitle-container">
    <div v-if="showDrag" class="edit-icons">
      <div class="delete">
        <a @click="deleteAsset()" class="delete-button">
          <font-awesome-icon class="xmark" icon="xmark" />
        </a>
      </div>
      <div class="move-element">
        <font-awesome-icon class="grip-lines" icon="grip-lines" />
      </div>

    </div>

    <h3 @mouseenter="toggleDrag()" @mouseleave="toggleDrag()" class="template-subtitle" id="template_subtitle"
      contenteditable="true">
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

const showAsset = ref(true);

function deleteAsset() {
  showAsset.value = false
}
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

.edit-icons {
  display: flex;
  justify-content:flex-start;
  gap: 8px;
}

.delete {
  cursor: pointer;
  position: relative;
  align-self: flex-end;
}

.xmark {
  align-self:flex-start;
  margin-bottom: 5px;
  position: relative;
  color: rgb(140, 10, 36);
  font-size: 1.6rem;
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

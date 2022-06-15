<template>
  <div v-if="showAsset" id="text">
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
    <!-- <p>Text</p>
    <div class="field">
    <span class="field-value" v-show="!showField('text')" @click="focusField('text')">{{user.text}}</span>
    <input v-model="user.text" v-show="showField('text')" id="user-text" type="text" class="field-value form-control" @focus="focusField('text')" @blur="blurField">
    </div> -->
    <p @mouseenter="toggleDrag()" @mouseleave="toggleDrag()" class="template-text" id="template_text"
      contenteditable="true" placeholder="Write here...">
      {{ $props.value }}
    </p>
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

// new Vue({
//   el: '#text',
//   data(){
//     return {
//       user : {
//         text: ''
//       },
//       editField : ''
//     }
//   },
//   methods : {
//     focusField(text){
//       this.editField = text;
//     },
//     blurField(){
//       this.editField = '';
//     },
//     showField(text){
//       return (this.user[text] == '' || this.editField == text)
//     }
//   }
// })
</script>

<style scoped lang="scss">

/*///TEXT CONTAINER///*/

#text {
  text-align: justify;
  width: 80%;
  padding: 5px;
  margin: auto 0;
  display: flex;
  gap: 30px;
  font-size: 1.2rem;
}

.move-element {
  margin-top: 9px;
}

.edit-icons{
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap: 5px;
}

.delete {
  cursor: pointer;
  position: relative;
  align-self: flex-end;
}

.xmark {
  align-self: center;
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

.template-text {
  padding: 10px;
  border: transparent;
  width: 100%;
  word-wrap: break-word;
  height: fit-content;
  // border: 1px solid #19182753;
  border-radius: 5px;
}

.template-text:hover {
  box-shadow: 2px 1px 1px 1px #8888 inset;
  border: #e9baed 2px solid;
  padding: 10px;
}
</style>

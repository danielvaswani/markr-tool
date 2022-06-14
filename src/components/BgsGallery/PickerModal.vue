<template>
  <Transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
          </div>

          <div class="modal-body">
            <ColorPicker :color="color" :visible-formats="['hex']" @color-change="updateColor" />
          </div>

          <div class="modal-footer">
            <!-- <slot name="footer">
            <button class="modal-default-button">
              Confirm
            </button>
          </slot> -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import ColorAsset from "./ColorAsset.vue";
import { ColorPicker } from "vue-accessible-color-picker";
import { ref, reactive, toRefs } from "vue";
import { propsToAttrMap } from "@vue/shared";


const emit = defineEmits(['changeColor'])

  const props = defineProps ({
    color: String,
  })

const pickedColor = ref("");
pickedColor.value = props.color

function updateColor(eventData) {
  pickedColor.value = eventData.cssColor
  emit('colorChange', pickedColor.value)
}

  // components: { ColorPicker },
  // setup(props) {
  //   let pickedcolor = ref(props.color);

  //   return {pickedcolor}

  // }
  
</script>

<style>









.modal-mask {
  /* transform: translateY(240px); */
  /* position: absolute; */
  /* z-index: 3; */
  width: min-content;
  height: min-content;
  background-color: transparent;
  display: table;
  border-radius: 15px;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 220px;
  /* margin: 0px auto; */
  background-color: none;
  /* border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33); */
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  margin-left: 60px;
  color: black;
  font-size: 30px;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  margin-left: 70px;
  color: #191827;
  background: #e9baed;
}

.vacp-color-picker{
  display: flex;
  flex-direction: column-reverse;
  font-family: Gilroy !important;
}

.vacp-color-space{
  border-radius: 10px;
}

.vacp-color-input{
  width: 48px;
}

.vacp-format-switch-button{
  margin-top: 100px;
  position: absolute;
  border: #e9baed 3px solid;
}

.vacp-copy-button{
  margin-left: 140px;
}

#color-picker-color-hex{
  width: 72px !important;
}

.vacp-color-input-label {
  text-align: center;
  /* font-size: 0.9rem; */
  font-weight: bold;
}

.vacp-color-input{
  font-weight: normal;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

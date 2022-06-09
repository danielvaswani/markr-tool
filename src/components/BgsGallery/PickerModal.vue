<template>
  <Transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">Pick color</slot>
          </div>

          <div class="modal-body">
            <ColorPicker :color="color" @color-change="updateColor" />
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button">
              Confirm
            </button>
          </slot>
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



  defineProps ({
    color: String,
  })

  // components: { ColorPicker },
  // setup(props) {
  //   let pickedcolor = ref(props.color);

  //   return {pickedcolor}

  // }
  
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fbeefd;
  border-radius: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
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
  margin-left: 70px;
  color: #191827;
  background: #e9baed;
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

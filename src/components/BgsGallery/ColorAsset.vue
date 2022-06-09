<template>
  <div class="palette"></div>

  <div class="cardcontainer">
    <div>
      <!-- <button class="btn-del" @click="deleteCard(color)">X</button> -->
      <div class="colorpicker-active"></div>
      <div class="pickedcolor"></div>
      <div class="colorpicker-preview" :style="{'background-color' : $props.color }"></div>
    </div>
    <div class="btn-wrap">
      <!-- <button class="btn-select">Select</button> -->
      <button class="btn-change" @click="showModal()">Change</button>

    </div>
  </div>
  <PickerModal :color="color" v-if="displayModal">
  </PickerModal>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import PickerModal from "./PickerModal.vue";



  defineProps ({
    color: String
  })

    // let pickedcolor = ref(props.color);

    // let bgc = ref({ backgroundColor: pickedcolor.value })

    let displayModal = ref(false)

    function showModal() {
      displayModal.value = !displayModal.value;
    }

    // function updateColor(eventData) {
    //   pickedcolor.value = eventData.colors?.hex;
    //   bgc.value.backgroundColor = pickedcolor.value;
    // }



</script>
<style scoped>
.cardcontainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 330px;
  margin: 0px 5px 20px;
  padding: 20px;
  border-radius: 15px;
  background-color: #fff;
  box-sizing: border-box;
}

.btn-change {
  margin: auto;
  align-self: center;
  padding: 9px;
  border: 1px solid #191827;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  background: #e9baed;
  color: #191827;
}

.btn-del {
  margin-left: 200px;
  top: 10px;
  right: 10px;
  font-size: 15px;
  background: #e9baed;
  padding: 0px 5px 5px;
}

/* .btn-select {
  margin-left: 150px;
  padding: 11px;
  border: 1px solid #191827;
  border-radius: 5px;
  cursor: pointer;
  background: #e9baed;
  color: #191827;
  position: absolute;
} */

.palette {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.color-picker-active {
  background-color: #fce6ee;
}

.colorpicker-preview {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  cursor: pointer;
}

.color-picker-info {
  margin-top: 20px;
}

.color-picker__label {
  position: relative;
  flex: 1 1 0px;
  margin-right: 5px;
  font-size: 16px;
}
</style>

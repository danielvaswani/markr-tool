<template>
  <div class="palette"></div>

  <div class="cardcontainer">
    <div class="trio-container">
      <div class="color-name" contenteditable="true">Name</div>

      <div>
        <!-- <button class="btn-del" @click="deleteCard(color)">X</button> -->
        <div class="colorpicker-active"></div>
        <div class="pickedcolor"></div>
        <div class="colorpicker-preview" :style="{'background-color' : $props.color }"></div>
      </div>
      <div class="btn-wrap">
        <!-- <button class="btn-select">Select</button> -->
        <font-awesome-icon @click="showModal()" class="paintbrush" icon="paintbrush" />

      </div>
    </div>
    <PickerModal :color="color" v-if="displayModal">
    </PickerModal>
  </div>

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
  justify-content: space-evenly;
  align-items: center;
  /* min-height: fit-content; */
  height: fit-content;
  /* margin: 0px 5px 20px; */
  padding: 20px;
  width: 220px;
  border-radius: 15px;
  background-color: #fff;
  box-sizing: border-box;
}

.trio-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.color-name{
  font-size: 1.2rem;
  padding: 2px;
}

.color-name:hover{
  border: #e9baed 2px solid;
  padding: 2px;
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

.btn-wrap{
  display: flex;
}

.paintbrush{
  cursor: pointer;
  color: rgba(136, 136, 136, 0.414);
  font-size: 1.3rem;
}

.paintbrush:hover{
  color: #e9baed;
  transform: scale(120%);
}

</style>

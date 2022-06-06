<template>
  <div class="palette"></div>
  <div class="cardcontainer">
    <div>
      <button class="btn-del" @click="">X</button>
      <div class="colorpicker-active"></div>
      <div class="pickedcolor"></div>
      <div class="colorpicker-preview" v-bind:style="bgc"></div>
    </div>
    <div class="btn-wrap">
      <button class="btn-select" @click="">Select</button>
      <button class="btn-change" @click="showModal">Change</button>

    </div>
  </div>
  <div v-if="toogleModal">
    <ColorPicker :color="pickedcolor" @color-change="updateColor" />
  </div>
</template>

<script>
import { ColorPicker } from "vue-accessible-color-picker";
import { ref, reactive } from "vue";

export default {
  components: {
    ColorPicker,
  },
  setup() {
    let toogleModal = ref(false);
    let pickedcolor = ref("#e9baed");
    let bgc = ref({ backgroundColor: pickedcolor.value })

    function showModal() {
      toogleModal.value = !toogleModal.value;
    }
    function updateColor(eventData) {
      console.log(eventData.colors?.hex)
      pickedcolor.value = eventData.colors?.hex;
      bgc.value.backgroundColor =pickedcolor.value;
    }
    return { showModal, toogleModal, updateColor, pickedcolor, bgc};
  },
};
</script>
<style scoped>


.cardcontainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 330px;
  margin: 0px 5px 20px;
  padding: 20px;
  border-radius: 15px;
  background-color: #fff;
}
.btn-wrap{

}

.btn-change {
  padding: 10px;
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
.btn-select {
  margin-left: 150px;
  padding: 11px;
  border: 1px solid #191827;
  border-radius: 5px;
  cursor: pointer;
  background: #e9baed;
  color: #191827;
  position: absolute;
}

.palette {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.color-picker-active {
  background-color: #fce6ee;
}
.colorpicker-preview {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto;
  cursor: pointer;
  background-color: aqua;
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

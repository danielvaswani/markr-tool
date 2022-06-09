<template>
  <div class="color-temp">
    <div class="colortext">
      <h2 id="color_t">Colour Palette</h2>
    </div>
    <div class="pickersContainer">
      <div v-for="color in $props.colors" :color = "color" :key="color">
        <ColorAsset :color="color"/>
      </div>
    </div>
    <div class="palette-add-color">
      <i class="bi bi-plus-circle-dotted del-icon"></i>
    </div>
  </div>
</template>

<script setup>
import ColorAsset from "./ColorAsset.vue";
import { ref, reactive } from "vue";



defineProps({
  colors: Array
})


// let colorList = ref(colors);

// function deleteCard(color) {
//   const cardToDeleteIndex = colorList.value.indexOf(color);

//   colorList.value.splice(cardToDeleteIndex, 1);
// }


// function addColorCard() {
//   colorList.value.push("#101B37");
// }
// return { colorList, addColorCard, deleteCard };



// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }


</script>

<style scoped>
.pickersContainer {
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  padding: 10px;
}

.color-temp {
  width: 100%;

}

.colors {
  width: 800px;
  background-color: #e7cee9;
  height: auto;
  margin: 10px auto;
  display: flex;
  padding: 10px;
  flex-direction: column;
}

.colortext {
  margin-left: 10px;
}

#color_t {
  font-size: 4rem;
  color: #2c2a45;
}

.palette-add-color {
  margin-left: 350px;
  margin-top: 40px;
  margin-bottom: 20px;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  color: #191827;
  background: #e9baed;
}

.del-icon {
  width: 130px;
  display: inline;
}
</style>

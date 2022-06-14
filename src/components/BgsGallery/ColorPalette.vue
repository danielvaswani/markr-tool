<template>
  <div class="color-temp">
    <div class="colortext">
    </div>

    <div class="colors">
      <TitleAsset name="Colors"></TitleAsset>
      <div class="pickersContainer">
        <div v-for="color in $props.colors" :color="color" :key="color">
          <ColorAsset :color="color"></ColorAsset>
        </div>
        <div class="add-color-container">
          <div class="palette-add-color">
            <i class="bi bi-plus-circle-dotted del-icon"></i>
          </div>
          <div class="space"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import TitlePage from "./TitlePage.vue";
import ColorAsset from "./ColorAsset.vue";
import { ref, reactive } from "vue";
import TitleAsset from "./TitleAsset.vue";
import { emit } from "process";


defineProps({
  colors: Array
})

const emit = defineEmits(['addColors'])

const colors = ref([]);

const predefinedColors = ["#191827", "#e0c22fff", "#930808ff", "#129456", "#463218"]

colors.value.push(...predefinedColors)

function addColorPaletteToAssets(){
  emit('addColorPallete', colors.value)

}

function addColorToColorPallete(color){
  colors.value.push(color)
}

// function getColors() {
//   return colors;
// }

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
  flex-wrap: wrap;
  width: 1000px;
  /* margin-top: 80px; */
  padding: 10px;
  gap: 20px;
}

.color-temp {
  width: 100%;

}

.colors {
  margin-top: 50px;
  width: fit-content;
  /* background-color: #e7cee9; */
  height: auto;
  /* margin: 10px auto; */
  display: flex;
  padding: 10px;
  flex-direction: column;
}

/* .colortext {
  margin-left: 10px;
} */

#color_t {
  font-size: 4rem;
  color: #2c2a45;
}

.add-color-container{
  border: #191827 2px solid;
  border-radius: 15px;
  width: 220px;
  height: 278px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.palette-add-color {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border:2px solid #e7cee9;
  align-items: center;
  background: #191827;
}

.del-icon {
  color: #e7cee9;
  font-size: 7.5rem;
  align-self: center;
  margin-top: 8px;
}

.del-icon:hover{
  color: #eab4ee;
  transform: scale(98%);
  transition: all .4s;
}
</style>

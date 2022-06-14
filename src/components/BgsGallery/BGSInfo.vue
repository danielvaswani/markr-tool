<template>
  <div @click="toggleModal()" class="modal-container" v-if="close"></div>
  <div class="bgs-info-container" v-if="close">
    <div class="bgs-info-row">
      <div class="info-column">
        <h2>
          Brand Guide<br />
          <span style="color: #fabdff">image</span>
        </h2>
        <div class="content-container">
          <div class="image-container">
            <img src="../../assets/images/341e5560369787.5bfc0508d0638.jpg" alt="Brand guide image image" />
          </div>

          <div class="upload-image">
            <label for="photo"><button class="image-button">Choose image</button></label>
            <input style="display: none" type="file" id="uploadmyfile" accept="image/*" />
          </div>
        </div>
      </div>
      <div class="info-column">
        <h2>Brand Guide<br /><span style="color: #fabdff">details</span></h2>
        <div class="content-container"></div>
        <div class="field-row">
          <h5>Brand Name</h5>
          <input type="text" placeholder="Write here... " />
        </div>
        <div class="field-row">
          <h5>Subdomain name</h5>
          <input type="text" placeholder="Write here... " />
        </div>
        <h5 class="subdomainUrl">example.markrtool.nl</h5>
        <div class="field-row">
          <h5>Online Status</h5>
          <div style="width: 45%">
            <Toggle @click="toggleLive()" :value="isLive" style="margin-right: auto" />
          </div>
        </div>
        <div class="save-changes-container">
          <p>back to Default</p>
          <button @click="toggleModal()">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div><span @click="toggleModal()" class="close">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </span></div>

</template>

<script setup>
import { ref, computed } from "vue";
import Toggle from "../Toggle.vue";

let brandName = ref("Johnnyt564645@#$%^& Walker");
let subdomainName = ref("");

defineProps({
  isEdit: Boolean,
});

const close = ref(true)

function toggleModal() {
  close.value = !close.value;
}

let generatedSubdomain = computed(() => {
  return brandName.value
    .toLowerCase()
    .split(" ")
    .join("")
    .replace(/[^\w\s]/gi, "");
});

console.log(generatedSubdomain.value);

let isLive = ref(false);

function toggleLive() {
  isLive.value = !isLive.value;
}
</script>

<style scoped>

.close {
  z-index: 1000;
  color: #e9baed;
  font-size: 2rem;
  position: fixed;
  top: 0;
  right: 0;
}

.modal-container {
  /* padding: 200px 500px; */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  min-height: 100vw;
  background-color: #191827a1;
  z-index: 3;
}

.bgs-info-container {
  z-index: 1000;
  position: fixed;
  background-color: #191827;
  color: white;
  border: 5px solid #e9baed;
  width: 786px;
  height: 606px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  right: 0;
  top: 45%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 25px;
}

.bgs-info-container h2 {
  font-size: 36px;
}

.bgs-info-row {
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
}

.content-container img {
  width: 250px;
  height: 350px;
}

.image-container {
  width: fit-content;
  height: fit-content;
  border: 2px dotted #e9baed;
  border-radius: 3px;
}

.upload-image {
  position: absolute;
  bottom: 3px;
  left: 3px;
}

.image-button {
  padding: 4px 8px;
}

.info-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.field-row {
  display: flex;
  justify-content: space-between;
}

.field-row h5 {
  text-align: right;
  width: 40%;
}

.field-row input {
  border-radius: 4px;
  border-width: 0px;
  width: 45%;
  padding-left: 3px;
}

h5 {
  font-family: Gilroy;
  font-weight: 100;
}

.subdomainUrl {
  width: 100%;
  text-align: center;
}

.save-changes-container{
  display: flex;
  gap: 10px;
  align-content: center;
  margin-top: 100px;
}

.save-changes-container p {
  color: rgba(136, 136, 136, 0.616) ;
  cursor:pointer;
  align-self: flex-end;
}

.save-changes-container button{
  color: white;
  background-color: #191827;
  border: #e9baed 2px solid;
  padding: 10px 25px;
  border-radius: 5px;
  cursor: pointer;
}

.save-changes-container button:hover{
  transform: translateX(2px);
  transform: translateY(1px);
  transition: all .2s;
}

</style>

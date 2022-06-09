<template>
  <div class="bgs-info-container">
    <div class="bgs-info-row">
      <div class="info-column">
        <h2>
          Brand Guide<br />
          <span style="color: #fabdff">image</span>
        </h2>
        <div class="content-container">
          <img src="" alt="Brand guide image image" />
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
            <Toggle
              @click="toggleLive()"
              :value="isLive"
              style="margin-right: auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Toggle from "../Toggle.vue";

let brandName = ref("Johnnyt564645@#$%^& Walker");
let subdomainName = ref("");

defineProps({
  isEdit: Boolean,
});

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
.bgs-info-container {
  position: absolute;

  z-index: 999;
  background-color: #191827;
  color: white;
  width: 786px;
  height: 606px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  left: 0;
  right: 0;
  top: 50%;
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
</style>

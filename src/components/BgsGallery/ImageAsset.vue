<template>
  <div v-if="showAsset" class="image-container" id="printIt">
    <div v-if="hover" @mouseenter="hover = true" @mouseleave="hover = false" class="image-icons">
      <div class="edit-image">
        <a class="edit-link">
          <font-awesome-icon class="pencil" icon="wand-magic" />
        </a>
      </div>

      <div class="space"></div>

      <div class="delete">
        <a @click="deleteAsset()" class="delete-button">
          <font-awesome-icon class="xmark" icon="xmark" />
        </a>
      </div>
    </div>

    <div @mouseenter="hover = true" @mouseleave="hover = false" class="image-cont">
      <img id="image" :src="$props.url" alt="Image" />
    </div>

    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- The Close Button -->
      <span class="close">&times;</span>

      <!-- Modal Content (The Image) -->
      <img class="modal-content" id="img01" />

      <!-- Modal Caption (Image Text) -->
      <div id="caption"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  url: String,
});

const hover = ref(false);

const showAsset = ref(true);

function deleteAsset(){
  showAsset.value = false
}

</script>

<style scoped lang="scss">
/*///IMAGE CONTAINER AND MODAL///*/

#printIt {
  // margin-left: 140px;
  overflow: hidden;
  width: fit-content;
  // margin: auto;
}

.image-container {
  width: 350px;
  height: auto;

  border: #191827 2px solid;
}

.image-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 3;
  position: absolute;
  width: 250px;
}

.edit-image {
  margin: 20px 15px;
  align-self: flex-start;
  text-align: center;
  cursor: pointer;
}

.pencil {
  align-self: flex-start;
  position: relative;
  color: #e9baed;
  font-size: 1.4rem;
}

.delete {
  cursor: pointer;
  margin: 15px;
  align-self: flex-end;
}

#image {
  width: 250px !important;
  height: 250px;
  object-fit: cover;
  cursor: pointer;
}

.xmark {
  align-self: flex-end;
  position: relative;
  color: rgb(140, 10, 36);
  font-size: 2rem;
}

/* The Modal (background) */
.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 4;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: #191827;
  /* Fallback color */
  background-color: #191827;
  /* Black w/ opacity */
}

/* Modal Content (Image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #e9baed;
  padding: 10px 0;
  height: 150px;
  font-size: 2em;
}

/* Add Animation - Zoom in the Modal */
.modal-content,
#caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #fff;
  font-size: 80px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #e9baed;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>

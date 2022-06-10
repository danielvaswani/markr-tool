<template>

  <div class="container_logo">
    <div class="logos" id="template_div">


      <ColorPalette :colors ="getColors()"></ColorPalette>

      <!-- <Container :page="page" :key="page.name" ></Container> -->

      <!-- <TitlePage></TitlePage>

            <SubtitleAsset></SubtitleAsset>

            <TextAsset></TextAsset> -->

      <!-- <SubtitleAsset></SubtitleAsset> -->

      <!-- <div class="small-image-container">
                <ImageAsset></ImageAsset>
                <ImageAsset></ImageAsset>
            </div>

            <EditButton></EditButton> -->
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import ImageAsset from "../components/BgsGallery/ImageAsset.vue";
import TextAsset from "../components/BgsGallery/TextAsset.vue";
import EditButton from "../components/BgsGallery/EditButton.vue";
import TitlePage from "../components/BgsGallery/TitlePage.vue";
import BannerImageAsset from "../components/BgsGallery/BannerImageAsset.vue";
import BigImageAsset from "../components/BgsGallery/BigImageAsset.vue";
import TitleAsset from "../components/BgsGallery/TitleAsset.vue";
import SubtitleAsset from "../components/BgsGallery/SubtitleAsset.vue";
import TextAsset1 from "../components/BgsGallery/TextAsset.vue";
import Container from "../components/BgsGallery/Container.vue";
import ColorPalette from "../components/BgsGallery/ColorPalette.vue";

const store = useStore();

// const dropdown = ref(null);


// defineExpose({ dropdown });

let showDropdown = ref(false);

function toggleEdit() {
  showDropdown.value = !showDropdown.value;
  console.log("Im working");
  // console.log(this.$refs.sidebar);
  // this.$refs.userDropdown.scrollIntoView();
}

// function getBrandGuide(){
//     return store.state.currentBrandGuide
// }

function getCurrentBgsName(){
    // console.log(store.state.currentBGSName)
    return store.state.currentBGSName
}

// const getBrandGuide = computed(() => {
//     return store.getters.getBrandGuide;
// });

const brandGuide = computed(() => {
    return store.state.currentBrandGuide;
});


const colors = ["#191827", "#e0c22fff", "#930808ff", "#129456"]

function getColors(){
  return colors
}

</script>

<style scoped lang="scss">



/*//////////////////TEMPLATE CONTAINER//////////////////////*/

.container_logo {
  display: flex;
  //   margin-left: 250px;
  padding: 80px;
  width: -moz-available;
}

.logos {
  background-color: whitesmoke;
  height: 100%;
  width: 1200px;
  /* margin-left: 550px !important; */
  margin: 0;
  /* margin-top: 150px; */
  display: flex;
  flex-direction: column;
  gap: 50px;
  /* -moz-box-shadow: 0 0 4px black;
        -webkit-box-shadow: 0 0 4px black;
        box-shadow: 0 0 4px black; */
}

.small-image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: auto;
}
</style>

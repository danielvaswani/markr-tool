<template>
    <!--MAIN PAGE-->
    <main>
        <div class="container_logo">
            <div class="logos" id="template_div">
                <TitlePage></TitlePage>

                <TitleAsset></TitleAsset>

                <SubtitleAsset></SubtitleAsset>

                <TextAsset></TextAsset>

                <!-- <SubtitleAsset></SubtitleAsset> -->

                <div class="small-image-container">
                    <ImageAsset></ImageAsset>
                    <ImageAsset></ImageAsset>
                </div>



                <EditButton></EditButton>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, defineExpose } from "vue";
import ImageAsset from "../components/BgsGallery/ImageAsset.vue";
import TextAsset from "../components/BgsGallery/TextAsset.vue";
import EditButton from "../components/BgsGallery/EditButton.vue";
import TitlePage from "../components/BgsGallery/TitlePage.vue";
import BannerImageAsset from "../components/BgsGallery/BannerImageAsset.vue";
import BigImageAsset from "../components/BgsGallery/BigImageAsset.vue";
import TitleAsset from "../components/BgsGallery/TitleAsset.vue";
import SubtitleAsset from "../components/BgsGallery/SubtitleAsset.vue";
import TextAsset1 from "../components/BgsGallery/TextAsset.vue";

const dropdown = ref(null);

defineExpose({ dropdown });

let showDropdown = ref(false);

function toggleEdit() {
  showDropdown.value = !showDropdown.value;
  console.log("Im working");
  // console.log(this.$refs.sidebar);
  // this.$refs.userDropdown.scrollIntoView();
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

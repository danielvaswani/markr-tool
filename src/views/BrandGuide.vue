<template>
    <!--MAIN PAGE-->
    <main>
        <div id="new_template"></div>

        <div class="container_logo">
            <div class="logos" id="template_div">

                <TitlePage></TitlePage>

                <TitleAsset></TitleAsset>

                <SubtitleAsset></SubtitleAsset>

                <div class="small-image-container">
                    <ImageAsset></ImageAsset>
                    <ImageAsset></ImageAsset>
                    <ImageAsset></ImageAsset>
                </div>

                <BannerImageAsset></BannerImageAsset>


                <BigImageAsset></BigImageAsset>


                <TextAsset></TextAsset>


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

const dropdown = ref(null)

defineExpose({ dropdown })

const showDropdown = ref(false);

function toggleEdit() {
  this.showDropdown = !this.showDropdown; 
  console.log("Im working") 
  // console.log(this.$refs.sidebar);
  // this.$refs.userDropdown.scrollIntoView();
}

</script>

<style scoped lang="scss">
/*//////////////////TEMPLATE CONTAINER//////////////////////*/



.container_logo{
    display: flex;
    margin-left:250px; 
    padding: 100px;
}


.logos {
    width: 100%;
    background-color: whitesmoke;
    height: 100%;
    /* margin-left: 550px !important; */
    margin: 0;
    /* margin-top: 150px; */
    display: flex;
    flex-direction: column;
    gap: 100px;
    /* -moz-box-shadow: 0 0 4px black;
        -webkit-box-shadow: 0 0 4px black;
        box-shadow: 0 0 4px black; */
}

.small-image-container{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin: auto;
}
</style>

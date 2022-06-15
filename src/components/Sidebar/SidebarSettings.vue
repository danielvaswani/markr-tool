<template>
    <div @click="toggleModal()" class="settings-container" v-if="close"></div>
    <div class="bgs-settings-container" v-if="close">
        <div class="bgs-info-row">
            <div class="info-column">
                <div class="consettings-container">
                    <div class="image-settings-container">
                        <img src="../../assets/images/Component_14.png" alt="Brand guide image image" />
                    </div>

                    <!-- <div class="upload-image">
                        <label for="photo"><button class="image-button">Choose image</button></label>
                        <input style="display: none" type="file" id="uploadmyfile" accept="image/*" />
                    </div> -->
                </div>
            </div>
        </div>
    </div>
    <div v-if="close"><span @click="toggleModal()" class="close">
            <font-awesome-icon class="xmark" icon="xmark" />
        </span></div>


</template>

<script setup>

import { ref, computed } from "vue";
import Toggle from "../Toggle.vue";

const close = ref(true)

function toggleModal() {
    close.value = !close.value;
}
</script>

<style scoped lang="scss">
.close .xmark {
    cursor: pointer;
    position: absolute;
    color: #e9baed;
    font-size: 3rem;
    margin: auto;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.settings-container {
    cursor: pointer;
    // margin: -180px;
    margin: 0;
    /* margin-left: 250px; */
    // padding: 200px 500px;
    position: fixed;
    width: 100%;
    height: 100%;
    right: 100px;
    top: 0;
    left: 0;
    right: 0;
    background-color: #191827a1;
    z-index: 999;
    display: flex;
}

.bgs-settings-container {
    z-index: 1000;
    position: fixed;
    background-color: #191827;
    color: white;
    width: 786px;
    height: 606px;
    margin: auto;
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

.image-settings-container img {
    position: absolute;
    width: 786px;
    height: auto;
    top: 2px;
}
</style>
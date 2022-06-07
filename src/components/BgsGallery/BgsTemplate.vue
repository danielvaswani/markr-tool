<template>
    <div v-if="hover" @mouseenter="hover = true" class="bgs-icons">

        <div class="preview-icon"><span class="preview">
                <a target="_blank" :href="'https://' + $props.subdomain + '.markrtool.nl'">
                    <font-awesome-icon class="bi" icon="eye" />
                </a>
            </span>

        </div>

        <div class="edit-bgs">


            <label for="uploadmyfile">
                <span class="edit-button">
                    <font-awesome-icon class="bi" id="pen" icon="paintbrush" />
                </span>
            </label>
            <input style="display:none" type="file" id="uploadmyfile" />
        </div>
    </div>
    <router-link @mouseenter="hover = true" @mouseleave="hover = false" class="hvr-border-fade"
        :to="'/stuurmen' + '/' + $props.name">
        <img class="prev" src="../../assets/images/trrtt.png" />
    </router-link>

</template>

<script setup>

import { ref } from 'vue';

defineProps({
    name: String,
    imageUrl: String,
    subdomain: String
})

const hover = ref(false)

</script>

<style scoped>

a,
span {
    cursor: default;
    text-decoration: none;
    list-style: none;
}

.hvr-border-fade {
    width: 250px;
    height: 350px;
    cursor: pointer;
    display: inline-block;
    z-index: 2;
    vertical-align: middle;
    /* -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
    box-shadow: inset 0 0 0 4px #e1e1e1,
    0 0 1px rgba(0, 0, 0, 0); */
}

.prev {
    width: 250px;
    height: 350px;
    object-fit: cover;
    z-index: 2;
    margin-bottom: 120px;
}

.prev:hover {
    transition: 0.2s;
    border: 4px solid #e9baed;
    color: #e9baed;
    /* background: #fff; */
}

.bgs-icons {
    display: flex !important;
    flex-direction: column !important;
    padding: 20px;
    gap: 10px;
    position: absolute;
    margin-left: 180px;
}

/*Preview Icon */

.preview-icon {
    z-index: 3;
    /* position: absolute; */
    align-self: flex-end;
    /* margin: 15px; */
    width: fit-content;
}

.preview-icon a {
    text-decoration: none;
    color: #e9baed;
    cursor: pointer;
}

.active {
    visibility: visible;
}

.preview {
    cursor: pointer;
    color: #e9baed;
    /* opacity: 0.2; */
    font-size: 1.2rem;
    padding: 5px;
}


/*Edit button */
.edit-bgs {
    z-index: 3;
    text-align: center;
    /* position: absolute; */
}

.edit-button {
    /* color: #ffff; */
    /* border: #e9baed 2px solid;
  background-color: #19182794; */
    padding: 7px;
    word-spacing: 0.3em;
    border-radius: 10px;
    font-size: 1.2rem;
    cursor: pointer;

}


#pen {
    color: #e9baed;
    margin-left: 5px !important;
}
</style>
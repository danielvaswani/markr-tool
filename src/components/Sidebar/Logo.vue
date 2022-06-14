<template>
    <div class="logo">
        <router-link :to="'/stuurmen' + '/'">
            <span>
                <img src="../../assets/images/Markr_w.png" alt="logo" />
            </span>
        </router-link>
        <div v-if="$props.showText && $route.params.bgsName !== undefined" class="edit-logo">
            <label style="cursor: pointer" for="uploadmyfile">
                <font-awesome-icon class="edit-logo-icon" icon="wand-magic" />
            </label>
            <input style="display: none" type="file" id="uploadmyfile" />
        </div>
    </div>

</template>

<script setup>
import { ref, defineExpose } from "vue";

defineProps({
    showText: Boolean
});

</script>

<style scoped lang="scss">



/*LOGO*/

.logo {
    /* margin-bottom: 45px; */
    text-align: center;
    margin: 15px 15px;
    margin-bottom: 100px;
}

.logo img {
    display: block;
    width: 180px;
    height: auto;
    margin: auto;
    cursor: pointer;
}

/*Edit logo Icon*/

.edit-logo {
    text-decoration: none;
    display: block;
    position: absolute;
    cursor: pointer;
    text-align: left;
    width: fit-content;
    left: 200px;
    top: 15px;
}

 .edit-logo .edit-logo-icon {
    color: #888 !important;
    font-size: 1.3em;
}

.edit-logo .edit-logo-icon:hover {
    color: #e9baed !important;
    transform: scale(105%);
}

/*Edit text icons */
 .edit-ico {
    text-decoration: none;
    display: block;
    cursor: pointer;
    text-align: left;
    margin-left: 25px;
    width: fit-content;
    margin-bottom: 20px;
}

 .edit-ico .magic-edit {
    color: #888 !important;
    font-size: 1.3em;
}

.edit-ico .magic-edit:hover {
    color: #e9baed !important;
    transform: scale(105%);
}

</style>
<template>

    <div :showText="showText" class="li-text">
        <div v-if="$props.showText" class="move-element">
            <font-awesome-icon class="grip-lines" icon="grip-lines" />
        </div>
        <li v-for="p in pageNames" :key="p" id="new-side" class="items">
            <router-link :to="p">
                <span :contenteditable="false" class="item">New Element</span>
            </router-link>
        </li>
        <div @click="toggleEditText()" class="space-li"></div>
        <div v-if="$props.showText" class="text_edit">
            <font-awesome-icon icon="pen" />
        </div>
    </div>

</template>

<script setup>
import { ref, defineExpose, onMounted } from "vue";

const props = defineProps({
    showText: Boolean,
     pageNames: Array
});



let showText = ref(false);

function toggleText() {
    console.log(showText.value)
    showText.value = !showText.value;
    // this.$refs.userDropdown.scrollIntoView();
}

const editText = ref(false)

function toggleEditText() {
    toggleEditText.value = !toggleEditText.value
}

</script>

<style scoped lang="scss">


.li-text {
    display: flex;
    justify-content: space-between;
    width: 85%;
    list-style: none;
}

.space-li {
    margin-left: 85px;
}

.text_edit {
    display: flex;
    list-style: none;
}

 li {
    /* display: flex; */
    height: min-content;
    width: fit-content;
}

li a {
    display: block;
    padding: 12px 12px;
    color: #fff;
    font-size: 16px;
    position: relative;
    font-size: 1.2rem;
    font-weight: normal;
    // font-weight: 600;
    width: fit-content;
    cursor: pointer;
    text-decoration: none;
}

li a .icon {
    color: #dee4ec;
    width: 30px;
    display: inline-block;
}

/* 
.active {
    background-color: whitesmoke;
} */

.li-text:hover {
    text-decoration: underline #e9baed 2px;
}


.move-element {
    display: flex;
}

.grip-lines {
    display: block !important;
    color: #888 !important;
    cursor: pointer !important;
    font-size: 1.2rem !important;
    align-self: center;
    position: absolute;
    z-index: 3;
}

.grip-lines:hover {
    color: #e9baed !important;
    transform: scale(105%);
}

.fa-pen {
    display: block !important;
    color: #888 !important;
    cursor: pointer !important;
    font-size: 1.2rem !important;
    align-self: center;
    position: absolute;
    z-index: 3;
}

.fa-pen:hover {
    color: #e9baed !important;
    transform: scale(105%);
}

</style>
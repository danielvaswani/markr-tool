<template>
    <div v-if="$props.showText" class="new_element">
        <li class="dropdownbtn">
            <a id="extra_element">
                <button id="add_side">
                    <i class="bi bi-plus"></i>Add Element
                </button>
            </a>
        </li>
        <!-- menu -->
        <div class="dropdownPost-content">
            <a><span>Video</span> </a>
            <a><span>Audio</span> </a>
            <a><span>Text</span> </a>
            <a><span>Others</span> </a>
        </div>
    </div>
</template>

<script setup>

import { ref, defineExpose, onMounted } from "vue";

defineProps({
    showText: Boolean
});

let showDrop = ref(false);

function toggleDrop() {
    showDrop.value = !showDrop.value;
    // console.log(this.$refs.sidebar);
    // this.$refs.userDropdown.scrollIntoView();
}
</script>

<style scoped lang="scss">


/* Sidebar elements */

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

/*/////////ADD NEW SIDEBAR ELEMENT////////////*/

.new_element {
    display: flex;
    flex-direction: column;
    height: fit-content;
}

#extra_element {
    padding: unset;
    margin-left: 5px;
}

#add_b {
    padding: unset;
}

.bi-plus {
    font-size: 2rem;
    vertical-align: middle;
    color: #e9baed;
}

#add_side {
    cursor: pointer;
    width: max-content;
    height: min-content;
    background-color: transparent;
    border: transparent;
    font-size: 1.2rem;
    border-radius: 20%;
    color: #fff;
    font-weight: 600;
}

.items {
    display: none;
}

/*Extra elements Dropdown */

.dropdownbtn {
    /* color: white;
    font-size: 16px; */
    border: none;
    cursor: pointer;
    /* margin-top: 6%;
    margin-right: 30%; */
    /* display: inline-flex; */
}

.dropdownPosts {
    position: absolute;
    display: inline-block;
    right: 0.4em;
}

.dropdownPost-content {
    display: none;
    position: absolute;
    margin-top: 50px;
    color: #fff;
    background-color: #191827;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 40px;
    border-top: #e9baed 2px solid;
    margin-bottom: 50px;
}

.dropdownPost-content a {
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdownPosts a:hover {
    background-color: #2b2942;
}

.show {
    display: block;
}
</style>
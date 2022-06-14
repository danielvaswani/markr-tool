<template>
    <!--menu item-->
    <ul class="category1" v-if="$route.params.bgsName !== undefined" id="brand_con">
        <!-- <li>
                    <a href="#" class="active">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item" id="home">HOME</span>
                    </a>
                </li> -->
        <div class="brand_title">
            <li id="t_1">
                <router-link :to="'/stuurmen' + '/' + $route.params.bgsName + '/' + $props.name">
                    <span class="item" id="brand_name" contenteditable="false">YOUR BRAND</span>
                </router-link>
            </li>
            <div v-if="$props.showText" class="text_edit">
                <font-awesome-icon class="fa-pen" icon="pen" />
            </div>
        </div>

        <div class="li-text">
            <div v-if="$props.showText" class="move-element">
                <font-awesome-icon class="grip-lines" icon="grip-lines" />
            </div>
            <li>
                <router-link to="/stuurmen">
                    <span id="text1" contenteditable="false" class="item">About</span>
                </router-link>
            </li>
            <div class="space-li"></div>
            <div v-if="$props.showText" class="text_edit">
                <font-awesome-icon icon="pen" />
            </div>
        </div>

        <div v-for="(element, index) in addedElements" :key="index" class="li-text">
            <div v-if="$props.showText" class="move-element">
                <font-awesome-icon class="grip-lines" icon="grip-lines" />
            </div>
            <li>
                <router-link to="/stuurmen">
                    <span id="text1" contenteditable="false" class="item">{{element}}</span>
                </router-link>
            </li>
            <div class="space-li"></div>
            <div v-if="$props.showText" class="text_edit">
                <font-awesome-icon icon="pen" />
            </div>
        </div>

        <li v-if="$props.showText">
<<<<<<< HEAD
            <button @click="addElement('New page')" id="add_side"><i class="bi bi-plus"></i>Add Element</button>
=======
            <router-link to="/stuurmen" id="add_b">
                <button id="add_side"><i class="bi bi-plus"></i>Add Element</button>
            </router-link>
>>>>>>> 59f51215775ae23d4d7e5dc292f0002cf6cb47f0
        </li>
    </ul>
</template>

<script setup>
import { ref, defineExpose, onMounted } from "vue";

defineProps({
    showText: Boolean
});


// onMounted(() => {
//     console.log(props.showText)
// })
const addedElements = ref([])

function addElement(name){
    addedElements.value.push(name)
}


</script>

<style scoped lang="scss">

/*Sidebar Edit Icon*/

.show_edit {
    display: block;
}

.li-text {
    display: flex;
    justify-content: space-between;
    width: 85%;
    list-style: none;
}

/*Edit text icons */
.category1 .edit_ico {
    text-decoration: none;
    display: block;
    cursor: pointer;
    text-align: left;
    margin-left: 25px;
    width: fit-content;
    margin-bottom: 20px;
}

.wrapper .sidebar .edit_ico .magic-edit {
    color: #888 !important;
    font-size: 1.3em;
}

.wrapper .sidebar .edit_ico .magic-edit:hover {
    color: #e9baed !important;
    transform: scale(105%);
}


.space-li {
    margin-left: 85px;
}

.text_edit {
    display: flex;
    list-style: none;
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

/*Menu Titles*/

.brand_title {
    display: flex;
    height: 40px;
    justify-content: space-between;
    width: 85%;
    font-weight: 600;
    margin-bottom: 20px;
}

#brand_con {
    margin-bottom: 50px;
    display: flex;
    /* align-self: flex-start; */
    flex-direction: column;
    margin-left: 5px;
    gap: 10px;
    margin-bottom: 50px;
}

/* Sidebar elements */

.wrapper .sidebar ul li {
    /* display: flex; */
    height: min-content;
    width: fit-content;
}

.wrapper .sidebar ul li a {
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

.wrapper .sidebar ul li a .icon {
    color: #dee4ec;
    width: 30px;
    display: inline-block;
}

/* 
.active {
    background-color: whitesmoke;
} */

.wrapper .sidebar ul .li-text:hover {
    text-decoration: underline #e9baed 2px;
}

.wrapper .sidebar ul li a.active {
    background-color: whitesmoke;
}

#home {
    font-family: Gilroy Extrabold;
    font-size: 1.4rem;
}


#brand_name {
    font-family: Gilroy Extrabold !important;
    color: #e9baed;
}

#brand_name {
    cursor: default;
}


#t_2 {
    margin-bottom: 20px;
    text-align: center;
    width: fit-content;
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

</style>
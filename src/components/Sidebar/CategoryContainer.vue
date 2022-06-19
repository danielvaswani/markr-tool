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

            <li class="items">
                <router-link to="/stuurmen">
                    <span contenteditable="false" class="item">New Item</span>
                </router-link>
            </li>

        <li v-if="$props.showText">
            <router-link to="/stuurmen" id="add_b">
                <button id="add_side"><i class="bi bi-plus"></i>Add Element</button>
            </router-link>
        </li>
    </ul>
</template>



<script setup>
import { ref, defineExpose, onMounted, markRaw, defineAsyncComponent } from "vue";
import AddElement from "./AddElement.vue";
import SidebarElement from "./SidebarElement.vue";

function render() {
    return h('new-element', [h(SidebarElement)])
}

const fields = ref([])
const count = ref(0)

function addElement(type) {
    this.fields.push({
        type: 'template',
        id: this.count++
    })
}

const editText = ref(true)

function toggleEditText(){
    editText.contenteditable.value = !editText.contenteditable.value
}

const props = defineProps({
    showText: Boolean,
    pageNames: Array,
    pageName: Array,
    page: String
    // bgsName: String
});

console.log(props.page)

let showText = ref(false);

function toggleText() {
    console.log(showText.value)
    showText.value = !showText.value;
    // this.$refs.userDropdown.scrollIntoView();
}




// onMounted(() => {
//     console.log(props.showText)
// })


</script>

<style scoped lang="scss">



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

#brand_con2 {
    margin-bottom: 80px;
    display: flex;
    /* align-self: flex-start; */
    flex-direction: column;
    margin-left: 5px;
    gap: 10px;
}

#brand_name,
#brand_name2 {
    font-family: Gilroy Extrabold !important;
    color: #e9baed;
}

#brand_name {
    cursor: default;
}

#brand_name2 {
    cursor: default;
}

#t_2 {
    margin-bottom: 20px;
    text-align: center;
    width: fit-content;
}

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

.category1 .edit_ico .magic-edit {
    color: #888 !important;
    font-size: 1.3em;
}

.category1 .edit_ico .magic-edit:hover {
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

.category1 li {
    /* display: flex; */
    height: min-content;
    width: fit-content;
}

.category1 li a {
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

.category1 li a .icon {
    color: #dee4ec;
    width: 30px;
    display: inline-block;
}

/* 
.active {
    background-color: whitesmoke;
} */

.category1 .li-text:hover {
    text-decoration: underline #e9baed 2px;
}

.category1 li a.active {
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

#new-element{
    display: block;
}

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
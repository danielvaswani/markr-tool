<template>
  <!--Edit Button-->
  <Transition>
    <div id="edit_sidebar" class="sidesnip"
      :style="{ 'transform': 'translateX(10px)', 'transition': 'all 0.3s ease-in-out'}">
      <span @click="toggleEdit()" class="edit" id="edit_b">
        <i class="bi bi-plus-square-dotted"></i>
      </span>
      <div v-if="showDropdown" id="myDropdown" class="dropdown-content dropdown">
        <a @mouseenter="hover = true" @mouseleave="hover = false" style="padding: 12px 8px">
          <i style="font-size: 1.6rem" class="bi bi-fonts"></i>
        </a>

        <a @mouseenter="hover = true" @mouseleave="hover = false"><i class="bi bi-images"></i></a>

        <a><i class="bi bi-film"></i></a>

        <div style="position: relative">
          <a><i class="bi bi-grid-1x2"></i></a>
          <i id="small_plus" class="bi bi-plus"></i>
        </div>

        <span style="padding: 12px 8px" id="edit_icon"><i style="font-size: 1.6rem" class="bi bi-paint-bucket"></i>
          <!-- <p class="drop_p">Edit</p> -->
        </span>

        <a><i class="bi bi-palette-fill"></i></a>

        <a><i class="bi bi-share-fill"></i></a>

        <a onclick="printDiv('printIt')" value="print a div!"><i class="bi bi-printer-fill"></i></a>

        <!-- <a id="delete"> <i id="delete_icon" class="bi bi-trash3"></i></a> -->
      </div>
    </div>
  </Transition>


  <!--Texts Dropdown-->
  <div v-if="hover" @mouseenter="hover = true" @click="hover = false" id="textsDropdown"
    class="dropdown-content-texts dropdown">
    <!-- <a class="title-a">
      <h2>Title</h2>
      <font-awesome-icon class="chevron" icon="chevron-right" />
    </a> -->

    <a @click="addSubtitle()" class="subtitle-a">
      <h3>Subtitle</h3>
      <font-awesome-icon class="chevron" icon="chevron-right" />
    </a>

    <a @click="addParagraph()" class="paragraph">
      <p>Paragraph</p>
      <font-awesome-icon class="chevron" icon="chevron-right" />
    </a>
  </div>

  <!--Images Dropdown-->
  <div v-if="hover" @mouseenter="hover = true" @click="hover = false" id="imagesDropdown"
    class="dropdown-content-images dropdown">
    <a @click="addImage()" class="image-a">
      <i class="bi bi-image-fill"></i>
      <p>250 x 250</p>
    </a>

    <a @click="addBigImage()" class="vertical-a">
      <i class="bi bi-file-image"></i>
      <p>350 x 450</p>
    </a>

    <a @click="addBannerImage()" class="banner">
      <i class="bi bi-card-image"></i>
      <p>850 x 350</p>
    </a>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const hover = ref(false);

const dropdown = ref(null);

defineExpose({ dropdown });

let showDropdown = ref(false);

function toggleEdit() {
  showDropdown.value = !showDropdown.value;
  console.log("Im working");
  // console.log(this.$refs.sidebar);
  // this.$refs.userDropdown.scrollIntoView();
}

const emit = defineEmits(['addSubtitle'])

function addSubtitle() {
  emit('addSubtitle')
}

function addParagraph(){
  emit('addParagraph')
}

function addImage() {
  emit('addImage')
}

function addBigImage() {
  emit('addBigImage')
}

function addBannerImage() {
  emit('addBannerImage')
}

</script>

<style scoped lang="scss">

/*/////EDIT BUTTON/////*/

#edit_b {
  z-index: 3;
  cursor: pointer;
  color: #e9baed;
  position: relative;
  bottom: 10px;
  font-size: 1.8rem;
  padding: 10px 8px;
  // margin-top: 8px !important;
  // margin-left: 140px;
  border: transparent;
  vertical-align: middle;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  // border-color: rgba(233, 186, 237, 1);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: inset 0px 1px 0px 0px rgba(233, 186, 237, 1);
  text-shadow: inset 0px 1px 0px rgba(233, 186, 237, 1);
  background: #191827;
  border-radius: 10%;
  text-align: center;
  transition-timing-function: ease-out;
  transition: 0.8s;
  -moz-box-shadow: 0 0 4px black;
  -webkit-box-shadow: 0 0 4px black;
  box-shadow: 0 0 4px black;
}

.edit:hover {
  background: linear-gradient(rgba(32, 32, 51, 1), rgba(25, 24, 39, 1));
}

.edit:active {
  transform: scale(96%);
}

.edit::before {
  background: linear-gradient(to top, whitesmoke 0%, #fff 6px);
  transition: all 0.078s ease-out;
  z-index: -1;
  box-shadow: 0 1px 0 2px rgba(0, 0, 0, 0.3), 0 5px 2.4px rgba(0, 0, 0, 0.5),
    0 10.8px 9px rgba(0, 0, 0, 0.2);
}

/* .edit:hover{
    -moz-box-shadow: 0 0 5px black;
        -webkit-box-shadow: 0 0 5px black;
        box-shadow: 0 0 5px black;
} */

#small_plus {
  position: absolute;
  right: -2px;
  top: 4px;
}

/*////EDIT DROPDOWN////*/

.sidesnip {
  display: flex;
  transition: all 0.25s ease;
  /* transition-timing-function: ease-out; */
  opacity: 1;
}

/* Dropdown Button */
// .dropbtn {
//     background-color: transparent;
//     color: #e9baed;
//     padding: 0;
//     font-size: 60px;
//     border: none;
//     cursor: pointer;
// }

// /* The container <div> - needed to position the dropdown content */
// .dropdown {
//     position: relative;
//     display: inline-block;
// }

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  /* transform: translateY(-100%);
    will-change: transform; */
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  border-left: #e9baed 2px solid;
  display: flex;
  border-radius: 6px;
  position: relative;
  height: fit-content;
  max-height: min-content;
  transform: translateX(10px);
  align-items: center;
  bottom: 10px;
  background-color: #191827;
  width: fit-content;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 5;
  text-align: center;
  -moz-box-shadow: 0 0 4px black;
  -webkit-box-shadow: 0 0 4px black;
  box-shadow: 0 0 4px black;
}

@keyframes up {
  from {
    transform: translateY(2%);
  }

  to {
    transform: translateY(-1%);
  }
}

/* .dropdown-content .drop_p {
    display: none;
} */

/* .dropdown-content .drop_p:hover {
    -webkit-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
    display: block;
} */

/* Links inside the dropdown */
.dropdown-content a {
  color: #fff;
  padding: 15px 12px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #2c2a45;
}

.dropdown-content span {
  color: #fff;
  padding: 14px 12px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

/* Change color of dropdown links on hover */
.dropdown-content span:hover {
  background-color: #2c2a45;
}

.dropdown-content .bi {
  color: #e9baed;
  font-size: 1.2rem;
}

// #edit_icon {
//     border-right: #fff 1px solid;
// }

#delete_icon {
  color: crimson;
}

// #delete {
//     border-left: #fff 1px solid;
// }

/*Texts Dropdown */

.dropdown-content-texts {
  /* transform: translateY(-100%);
    will-change: transform; */
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  border-top: #e9baed 2px solid;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  position: relative;
  height: fit-content;
  margin-left: 65px;
  align-items: center;
  bottom: 60px;
  background-color: #191827;
  width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 3;
  text-align: center;
  -moz-box-shadow: 0 0 4px black;
  -webkit-box-shadow: 0 0 4px black;
  box-shadow: 0 0 4px black;
}

.dropdown-content-texts a {
  color: #fff;
  padding: 8px 30px;
  text-decoration: none;
  cursor: pointer;
  border-bottom: #e9baed 1px solid;
  width: inherit;
}

.chevron {
  color: #e9baed;
}

.title-a {
  display: flex;
  align-items: baseline;
  gap: 50px;
  font-size: 1.5rem;
  font-weight: bolder;
}

.subtitle-a {
  display: flex;
  align-items: baseline;
  gap: 40px;
  font-size: 1.2rem;
}

.paragraph {
  display: flex;
  align-items: baseline;
  gap: 45px;
  font-size: 1rem;
}

/* Change color of dropdown links on hover */
.dropdown-content-texts a:hover {
  background-color: #2c2a45;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show_edit {
  display: block;
  transform: translateY(2%);
  /* transition-timing-function: ease-in; */
  animation-name: drop;
  animation-duration: 0.4s;
  animation-timing-function: linear;
}

@keyframes drop {
  from {
    transform: translateY(-1%);
  }

  to {
    transform: translateY(2%);
  }
}

/*Images Dropdown */

.dropdown-content-images {
  /* transform: translateY(-100%);
    will-change: transform; */
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  border-top: #e9baed 2px solid;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  position: relative;
  height: fit-content;
  margin-left: 102px;
  align-items: center;
  bottom: 188px;
  background-color: #191827;
  width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 3;
  text-align: center;
  -moz-box-shadow: 0 0 4px black;
  -webkit-box-shadow: 0 0 4px black;
  box-shadow: 0 0 4px black;
}

.dropdown-content-images a {
  color: #fff;
  padding: 8px 30px;
  text-decoration: none;
  cursor: pointer;
  border-bottom: #e9baed 1px solid;
  width: inherit;
}

.chevron {
  color: #e9baed;
}

.image-a {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 1rem;
  font-weight: bolder;
}

.image-a i{
    color: #e9baed;
}

.vertical-a {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 1rem;
}

.vertical-a i{
    color: #e9baed;
}

.banner {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 1rem;
}

.banner i{
  color: #e9baed;
}

/* Change color of dropdown links on hover */
.dropdown-content-images a:hover {
  background-color: #2c2a45;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show_edit {
  display: block;
  transform: translateY(2%);
  /* transition-timing-function: ease-in; */
  animation-name: drop;
  animation-duration: 0.4s;
  animation-timing-function: linear;
}

@keyframes drop {
  from {
    transform: translateY(-1%);
  }

  to {
    transform: translateY(2%);
  }
}
</style>

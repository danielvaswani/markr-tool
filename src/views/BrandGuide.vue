<template>
   <!--MAIN PAGE-->
    <main>
      <div id="new_template"></div>

      <div class="container_logo">
        <div class="logos" id="template_div">
          <h2 id="logo_t">TEMPLATE</h2>

          <!--Edit Button-->
        <div id="edit_sidebar" class="sidesnip">
          <span @click="toggleEdit()" class="edit" id="edit_b">
            <i class="bi bi-plus-square-dotted"></i>
          </span>
          <div v-if="showDropdown" id="myDropdown" class="dropdown-content dropdown">

            <a style="padding: 12px 8px;"><i style="font-size: 1.6rem" class="bi bi-fonts"></i></a>

            <a><i class="bi bi-card-image"></i></a>

            <a><i class="bi bi-film"></i></a>
            
            <div style="position: relative">
              <a><i class="bi bi-grid-1x2"></i></a>
              <i id="small_plus" class="bi bi-plus"></i>
            </div>

            <span style="padding: 12px 8px;" id="edit_icon"><i style="font-size: 1.6rem" class="bi bi-paint-bucket"></i>
              <!-- <p class="drop_p">Edit</p> -->
            </span>

            <a><i class="bi bi-palette-fill"></i></a>

            <a><i class="bi bi-share-fill"></i></a>


            <a onclick="printDiv('printIt')" value="print a div!"
              ><i class="bi bi-printer-fill"></i
            ></a>

            <!-- <a id="delete"> <i id="delete_icon" class="bi bi-trash3"></i></a> -->
          </div>
        </div>


        <ImageAsset></ImageAsset>
          

        <TextAsset></TextAsset>

          
        </div>

        
      </div>
    </main>
</template>

<script setup>

import { ref, defineExpose } from "vue";
import ImageAsset from "../components/BgsGallery/ImageAsset.vue";
import TextAsset from "../components/BgsGallery/TextAsset.vue";

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



main {
    display: flex;
}

.container_logo{
    display: flex;
    margin-left:250px; 
}

#template_div {
    display: flex;
}


.logos {
    width: 100%;
    background-color: transparent;
    height: 850px;
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

.logo_p {
    padding: 10px;
}

#logo_t {
    margin-top: 50px !important;
    margin-left: 130px;
    font-size: 4rem;
    color: #2c2a45;
    font-family: Gilroy Extrabold;
}

/*/////EDIT BUTTON/////*/

#edit_b {
    z-index: 3;
    cursor: pointer;
    color: #e9baed;
    position: relative;
    bottom: 10px;
    font-size: 1.8rem;
    padding: 10px 8px;
    margin-top: 8px !important;
    margin-left: 140px;
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
        transition: .8s;
    -moz-box-shadow: 0 0 4px black;
    -webkit-box-shadow: 0 0 4px black;
    box-shadow: 0 0 4px black;
    
}

.edit:hover{
    background: linear-gradient(rgba(32, 32, 51, 1), rgba(25, 24, 39, 1));
}

.edit:active{
    transform: scale(96%);
}

.edit::before {
    background: linear-gradient(to top, whitesmoke 0%, #fff 6px);
    transition: all 0.078s ease-out;
    z-index: -1;
    box-shadow: 0 1px 0 2px rgba(0, 0, 0, 0.3), 0 5px 2.4px rgba(0, 0, 0, 0.5), 0 10.8px 9px rgba(0, 0, 0, 0.2);
}

/* .edit:hover{
    -moz-box-shadow: 0 0 5px black;
        -webkit-box-shadow: 0 0 5px black;
        box-shadow: 0 0 5px black;
} */


#small_plus{
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
    -webkit-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
    border-left: #e9baed 2px solid;
    display: flex;
    border-radius: 6px;
    position: relative;
    height: fit-content;
    max-height: min-content;
    margin-left: 15px;
    align-items: center;
    bottom: 1px;
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
        transform: translateY(2%)
    }

    to {
        transform: translateY(-1%)
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
        transform:translateY(-1%)
    }

    to {
        transform: translateY(2%)
    }
}






</style>

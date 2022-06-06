<template>
  <div id="box">
    <div class="wrapper">
      <!--Top menu -->
      <div v-if="showSidebar" ref="thisSidebar" class="sidebar">
        <div class="logo">
          <span :to = "'/stuurmen'">
            <img src="../assets/images/Markr_w.png" alt="logo" />
          </span>

          <div v-if="showText" class="edit-logo">
            <font-awesome-icon class="edit-logo-icon" icon="wand-magic"/>
          </div>
        </div>

        <div v-if="$route.params.bgsName !== undefined">
          <span @click="toggleText()" class="edit_ico"
            ><font-awesome-icon class="magic-edit" icon="wand-magic-sparkles"/></span>
        </div>
        <!--menu item-->
        <ul v-if="$route.params.bgsName !== undefined" id="brand_con">
          <!-- <li>
                    <a href="#" class="active">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item" id="home">HOME</span>
                    </a>
                </li> -->
          <div class="brand_title">
            <li id="t_1">
              <router-link to="/stuurmen">
                <span class="item" id="brand_name" contenteditable="false"
                  >YOUR BRAND</span
                >
              </router-link>
            </li>
            <div v-if="showText" class="text_edit">
              <font-awesome-icon icon="pen"/>
            </div>
          </div>


          <div class="li-text">
            <li>
              <router-link to="/stuurmen">
                <span
                  id="text1"
                  onclick="newTemplate()"
                  contenteditable="false"
                  class="item"
                  >About</span
                >
              </router-link>
            </li>
            <div v-if="showText" class="text_edit">
              <font-awesome-icon icon="pen"/>
            </div>
          </div>

          <li v-if="showText">
            <router-link to="/stuurmen" id="add_b">
              <button id="add_side"><i class="bi bi-plus"></i>Add Page</button>
            </router-link>
          </li>

          <li id="new_side" class="items">
            <router-link to="/stuurmen">
              <span onclick="newTemplate()" contenteditable="false" class="item"
                >Item 2</span
              >
            </router-link>
          </li>

          <li class="items" id="t_3">
            <router-link to="/stuurmen">
              <span onclick="newTemplate()" contenteditable="false" class="item"
                >Item 3</span
              >
            </router-link>
          </li>
        </ul>

        <ul v-if="$route.params.bgsName !== undefined" id="brand_con2">
          <li id="t_2">
            <router-link to="/stuurmen">
              <span class="item" id="brand_name2">BRAND IDENTITY</span>
            </router-link>
          </li>

          <div class="li-text">
            <li>
              <router-link to="/stuurmen">
                <span
                  id="text2"
                  onclick="newTemplate()"
                  contenteditable="false"
                  class="item"
                  >Logo</span
                >
              </router-link>
            </li>
            <div v-if="showText" class="text_edit">
              <font-awesome-icon icon="pen"/>
            </div>
          </div>

          <div class="li-text">
            <li>
              <router-link to="/stuurmen">
                <span
                  id="text3"
                  onclick="newTemplate()"
                  contenteditable="false"
                  class="item"
                  >Color Palette</span
                >
              </router-link>
            </li>
            <div v-if="showText" class="text_edit">
              <font-awesome-icon icon="pen"/>
            </div>
          </div>

          <div class="li-text">
            <li>
              <router-link to="/stuurmen">
                <span
                  id="text4"
                  onclick="newTemplate()"
                  contenteditable="false"
                  class="item"
                  >Typography</span
                >
              </router-link>
            </li>
            <div v-if="showText" class="text_edit">
              <font-awesome-icon icon="pen"/>
            </div>
          </div>

          <div v-if="showText" class="new_element">
            <li class="dropdownbtn">
              <a id="extra_element">
                <button id="add_side"><i class="bi bi-plus"></i>Add Page</button>
              </a>
            </li>
            <!-- menu -->
            <div class="dropdownPost-content">
              <a><span onclick="newTemplate()">Video</span> </a>
              <a><span onclick="newTemplate()">Audio</span> </a>
              <a><span onclick="newTemplate()">Text</span> </a>
              <a><span onclick="newTemplate()">Others</span> </a>
            </div>
          </div>

          <li class="items">
            <router-link to="/stuurmen">
              <span contenteditable="false" onclick="newTemplate()" class="item"
                >New Item</span
              >
            </router-link>
          </li>

          <li class="items">
            <router-link to="/stuurmen">
              <span contenteditable="false" onclick="newTemplate()" class="item"
                >New Item</span
              >
            </router-link>
          </li>

          <li class="items">
            <router-link to="/stuurmen">
              <span contenteditable="false" onclick="newTemplate()" class="item"
                >Extra Item</span
              >
            </router-link>
          </li>

          <!-- three dot menu -->
          <!-- <div class="dropdownPosts"> -->
          <!-- three dots
                <ul
                  class="dropdownbtn icons btn-right showLeft"
                  
                >
                  <li></li>
                  <li></li>
                  <li></li>
                </ul> -->

          <!-- <li>
              <a href="#">
                <span class="item">Application Examples</span>
              </a>
            </li>

             <li>
              <a href="#">
                <span class="item">Application Examples</span>
              </a>
            </li>

             <li>
              <a href="#">
                <span class="item">Application Examples</span>
              </a>
            </li> -->
        </ul>

        <article  v-if="$route.params.bgsName !== undefined" class="user-profile">
          <!-- <div v-if="$route.params.bgsName === undefined"></div> -->
          <!-- <div v-else style="display: flex">
            <div  class="brand-title">
              <img src="../assets/images/stuurmen.jpg" alt="" />
            </div>
          </div> -->
          <ul class="user_bar">
            <li>
              <span class="user_icon" id="user_ico">
                <img id="u-icon" src="../assets/images/user.png" alt="user icon" />
              </span>
            </li>
            <li id="user_name" class="user_name">
              
              <a>
                <span class="drop-btn" @click="toggleUser()">User Name</span>
                <span class="drop-btn">
                  <i class="bi bi-caret-down"></i
                ></span>
              </a>
            </li>
            
            
            <div v-if="showUser" id="userDropdown" class="user-dropdown">
              <UserDropdown ></UserDropdown>
            </div>
          </ul>
        </article>

        <div v-if="$route.params.bgsName !== undefined" class="color-sidebar">
          <div class="side-edit-color">
            <font-awesome-icon class="gear" icon="gear"/>
          </div>
        </div>

      </div>
    </div>

    <!--HIDE/SHOW SIDEBAR-->
    <div v-if="$route.params.bgsName !== undefined" class="hide_container" @click="toggleSidebar()">
      <div class="hide_icon">
        <i class="bi bi-caret-left-fill"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { ref, defineExpose } from "vue";
import UserDropdown from "./UserDropdown.vue";
const sidebar = ref(null)

defineExpose({ sidebar })

const showSidebar = ref(true);

function toggleSidebar() {
  this.showSidebar = !this.showSidebar;
}

const showUser = ref(false);

function toggleUser() {
  this.showUser = !this.showUser;  
  // console.log(this.$refs.sidebar);
  // this.$refs.userDropdown.scrollIntoView();
}

const showText = ref(false);

function toggleText() {
  this.showText = !this.showText;  
  // console.log(this.$refs.sidebar);
  // this.$refs.userDropdown.scrollIntoView();
}


function data() {
  return{
    showUser: true
  }
}

props: {
    msg: String;
  }

</script>

<style scoped lang="scss">
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #191827;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #e9baedaf;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #e9baed;
}

/*//////////////////SIDERBAR///////////////////////*/

#box{
    display: flex;
}

.wrapper{
    display: flex;
    flex-direction: column;
}

.wrapper .sidebar {
    display: flex;
    flex-direction: column;
    background: #191826;
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    padding: 20px 0;
    transition: all 0.5s ease;
    z-index: 3;
    /* transform: translateX(-100%); */
    float: left;
    transition: width 0.3s;
    text-decoration: none;
    overflow-y: scroll;
    overflow-x: visible;
    -moz-box-shadow: 0 0 4px black;
    -webkit-box-shadow: 0 0 4px black;
    box-shadow: 0 0 4px black;
    scrollbar-width: thin;
    scrollbar-arrow-color: transparent;
    scrollbar-color: #e9baedaf;
    scrollbar-base-color: #e9baedaf;
    scrollbar-highlight-color: #e9baed;
    
}

/*LOGO*/

.logo {
    /* margin-bottom: 45px; */
    text-align: center;
    margin: 15px 15px;
    margin-bottom: 50px;
}

.logo img {
    display: block;
    width: 180px;
    height: auto;
    margin: auto;
    cursor: pointer;
}

/*Edit logo Icon*/

.edit-logo{
    text-decoration: none;
    display: block;
    position: absolute;
    cursor: pointer;
    text-align: left;
    width: fit-content;
    left: 200px;
    top: 15px;
    
}

.wrapper .sidebar .edit-logo .edit-logo-icon{
  color:#888 !important;
  font-size: 1.3em;
}

.wrapper .sidebar .edit-logo .edit-logo-icon:hover{
    color: #e9baed !important;
    transform: scale(105%);
}

/*Sidebar Edit Icon*/

.show_edit{
    display: block;
}

.li-text{
    display: flex;
    gap: 90px;  
}

/*Edit text icons */
.wrapper .sidebar .edit_ico {
    text-decoration: none;
    display: block;
    cursor: pointer;
    text-align: left;
    margin-left: 25px;
    width: fit-content;
    margin-bottom: 20px;
}

.wrapper .sidebar .edit_ico .magic-edit {
    color:#888 !important;
    font-size: 1.3em;
}


.wrapper .sidebar .edit_ico .magic-edit:hover{
    color: #e9baed !important;
    transform: scale(105%);
}

.text_edit{
    display: flex;
}

.fa-pen{
    display: block !important;
    color: #888 !important;
    cursor: pointer !important;
    font-size: 1.2rem !important;
    align-self: center;
    position: absolute;
}

.fa-pen:hover{
    color: #e9baed !important;
    transform: scale(105%);
}

.wrapper .sidebar .logo h3 {
    color: #ffffff;
    margin: 10px 0 5px;
}

.wrapper .sidebar .logo p {
    color: #e9baed;
    font-size: 14px;
}

/*Menu Titles*/

.brand_title{
    display: flex;
    height: 40px;
    gap: 48px;
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

#brand_con2{
    margin-bottom: 80px;
    display: flex;
    /* align-self: flex-start; */
    flex-direction: column;
    margin-left: 5px;
    gap: 10px;
}

/* Sidebar elements */

.wrapper .sidebar ul li{
    /* display: flex; */
    height: min-content;
    width: 100px;
}

.wrapper .sidebar ul li a {
    display: block;
    padding: 12px 12px;
    color: #fff;
    font-size: 16px;
    position: relative;
    font-size: 1.2rem;
    font-weight: normal;
    font-weight: 600;
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

.wrapper .sidebar ul li a:hover,
.wrapper .sidebar ul li a.active {

    color: #e9baed;
    border-right: 2px solid #191827;
}

.wrapper .sidebar ul li a.active {
    background-color: whitesmoke;
}

#home {
    font-family: Gilroy Extrabold;
    font-size: 1.4rem;
}

.wrapper .sidebar ul li a:hover .icon,
.wrapper .sidebar ul li a.active .icon {
    color: #191827;
}

.wrapper .sidebar ul li a:hover:before,
.wrapper .sidebar ul li a.active:before {
    display: block;
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

#t_1,
#t_2 {
    margin-bottom: 20px;
    text-align: center;
    width: fit-content;
}

/* 
.showLeft {
    color: #fff !important;
    padding: 10px;
}

.icons li {
    background: none repeat scroll 0 0 #fff;
    height: 7px;
    width: 7px;
    line-height: 0;
    list-style: none outside none;
    margin-left: 5px;
    margin-top: 3px;
    vertical-align: top;
    border-radius: 50%;
    pointer-events: none;
}

.btn-left {
    left: 9.6em;
}

.btn-right {
    right: 9.6em;
}

.btn-left,
.btn-right {
    position: absolute;
    top: 0.24em;
} */

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

/*/////////ADD NEW SIDEBAR ELEMENT////////////*/

.new_element{
    display: flex;
    flex-direction: column;
    height: fit-content;
}

#extra_element{
    padding: unset;
    margin-left: 5px;
}

#add_b{
    padding: unset;
}

.bi-plus{
    font-size: 2rem;
    vertical-align: middle;
    color: #e9baed;
}

#add_side{
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

.items{
    display: none;
}


/*/////////USER ICON MENU/////////*/


$color_1: #e9baed;
$color_2: #fff;
$font-family_1: Gilroy, Extrabold;
$background-color_1: #191827;
$border-color_1: transparent transparent #e9baed;

.showUser{
  visibility: hidden;
}

.user-profile {
  align-self: center;
	display: flex;
  flex-direction: column;
	height: fit-content;
	background-color: $background-color_1;
	justify-content: space-between;
	position: relative;
	width: 200px;
  margin-bottom: 80px;
	// -moz-box-shadow: 0 0 4px black;
	// -webkit-box-shadow: 0 0 4px black;
	// box-shadow: 0 0 4px black;
	// border-bottom: #191827 1px solid;
	z-index: 2;
}

.brand-title {
	vertical-align: middle;
	text-align: center;
	align-self: center;
	font-family: $font-family_1;
	color: $color_1;
	gap: 10px;
	display: flex;
	width: fit-content;
	margin-left: 260px;
	img {
		border: #e9baed 3px solid;
		object-fit: cover;
		width: 50px;
		height: 50px;
		border-radius: 20%;
	}
}
.user_bar {
  list-style-type:none;
	border-radius: 10%;
	position: relative;
  height: fit-content;
	text-align: center;
	// top: 1%;
	display: flex;
  flex-direction: column;
	gap: 5px;
	padding: 10px;
	align-self: center;
	li {
		align-self: center;
	}
	.bi {
		color: $color_2;
		align-self: baseline;
		vertical-align: middle;
	}
}
.user_icon {
	align-self: flex-end;
	width: 40px;
	height: auto;
	img {
		width: 40px;
		cursor: pointer;
	}
}
.user_name {
	cursor: pointer;
	display: flex;
	gap: 2px;
  width: fit-content !important;
  flex-direction: column;
	align-items: center;
	position: relative;
	a {
		align-self: center;
		text-decoration: none;
		color: $color_2;
    cursor: pointer !important;
		padding: 5px;
    width: fit-content !important;
	}
  li{
    width: fit-content !important;
    cursor: pointer !important;
  }
	// :hover {
	// 	.bi-caret-down {
	// 		::before {
	// 			content: url(../images/caret-down-fill.svg);
	// 		}
	// 	}
	// }
}
.user-dropdown {
	// ::before {
	// 	-moz-border-color: none;
	// 	border-color: $border-color_1;
	// 	border-image: none;
	// 	border-style: solid;
	// 	border-width: 5px;
	// 	content: "";
	// 	display: block;
	// 	height: 0;
	// 	opacity: 1;
	// 	width: 0;
	// 	position: absolute;
	// 	top: -12px;
	// 	left: auto;
	// 	right: 20px;
	// }
	display: block;
	padding-top: 5px;
	padding-bottom: 15px;
	position: absolute;
	top: 112px;
  width: 200px;
  margin-bottom: 100px;
  align-self: center;
	background-color: $background-color_1;
	padding: 10px;
	// -moz-box-shadow: 0 0 4px black;
	// -webkit-box-shadow: 0 0 4px black;
	// box-shadow: 0 0 4px black;
	border-top: 3px solid #e9baed;
	z-index: 5;
}



/*//// HIDE/SHOW SIDEBAR ICON ////*/

.hide_container{
   margin-left: 250px;
   z-index: 3;
   position: fixed;
   cursor: pointer;
   margin-top: 0;
   /* transform: translateX(600%); */
}

.hide_icon{
    border-left: #e9baed 1px solid;
    display: flex;
    width: fit-content;
    height: 50px;
    background-color: #191827;
    z-index: 2;
}

.hide_icon i{
    color: #fff;
    align-self: center;
    font-size: 0.8rem;
}

.hide_icon img{
    border: #191827 3px solid;
    object-fit: contain;
    width: 50px;
    border-bottom-right-radius: 40%;
    border-top-right-radius: 40%;
}


/*//////////EDIT COLOR SIDEBAR////////////// */

.color-sidebar{
  display: flex;
  float: right;
  align-content: flex-end;
  margin-top: 20px;
}


.side-edit-color{
  padding: 5px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  text-align: left;
  margin-left: 15px;
  width: fit-content;
}


.gear{
  font-size: 1.5rem;
  color:#888 !important;
}

.side-edit-color:hover{
  transform: scale(105%);
  transition: all .2s;
}

.side-edit-color .gear:hover{
  color: #e9baed !important;
}

</style>

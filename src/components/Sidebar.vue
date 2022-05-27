<template>
  <div id="box">
    <div class="wrapper">
      <!--Top menu -->
      <div v-if="showSidebar" class="sidebar">
        <div class="logo">
          <span onclick="transitionToPage('../BGS_page/bgs_p.html')">
            <img src="../assets/images/Markr_w.png" alt="logo" />
          </span>
        </div>

        <div v-if="$route.params.bgsName !== undefined">
          <span onclick="editSide()" class="edit_ico"
            ><i class="fa-solid fa-wand-magic-sparkles"></i
          ></span>
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

            <div class="text_edit">
              <i onclick="editText()" id="edit_t2" class="fa-solid fa-pen"></i>
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
            <div class="text_edit">
              <i onclick="editText()" id="edit_t" class="fa-solid fa-pen"></i>
            </div>
          </div>

          <li>
            <router-link to="/stuurmen" id="add_b">
              <button id="add_side"><i class="bi bi-plus"></i>Add</button>
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
            <div class="text_edit">
              <i onclick="editText()" id="edit_t" class="fa-solid fa-pen"></i>
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
            <div class="text_edit">
              <i onclick="editText()" id="edit_t" class="fa-solid fa-pen"></i>
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
            <div class="text_edit">
              <i onclick="editText()" id="edit_t" class="fa-solid fa-pen"></i>
            </div>
          </div>

          <div style="display: none" class="new_element">
            <li onclick="showDropdown(event)" class="dropdownbtn">
              <a id="extra_element">
                <button id="add_side"><i class="bi bi-plus"></i>Add</button>
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
      </div>
    </div>

    <!--HIDE/SHOW SIDEBAR-->
    <div class="hide_container" @click="toggleSidebar()">
      <div class="hide_icon">
        <i class="bi bi-caret-left-fill"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showSidebar = ref(true);

function toggleSidebar() {
  this.showSidebar = !this.showSidebar;
}
</script>

<style scoped lang="scss">
/* width */

::-webkit-scrollbar {
	width: 10px;
}

::-moz-scrollbar-button:decrement,
::-moz-scrollbar-button:increment,
::-webkit-scrollbar-button:decrement,
::-webkit-scrollbar-button:increment {
  width: 0px;
}

::-moz-scrollbar-button, ::-webkit-scrollbar-button {
  width: 0px;
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

::-webkit-scrollbar-thumb {
	:hover {
		background: #e9baed;
	}
}


/*//////////////////SIDERBAR///////////////////////*/



#box {
  scrollbar-width: thin;
	display: flex;
  /* the line that rules them all */
  scrollbar-width: none;
  /* */
  overflow: auto;
}
.wrapper {
	display: flex;
	flex-direction: column;
	.sidebar {
		display: flex;
		flex-direction: column;
		background: #191826;
		position: fixed;
		top: 0;
		left: 0;
		width: 250px;
		height: 100%;
    text-decoration: none;
		padding: 20px 0;
		transition: all 0.5s ease;
		z-index: 3;
		float: left;
		transition: width 0.3s;
		overflow-y: scroll;
		overflow-x: visible;
		-moz-box-shadow: 0 0 4px black;
		-webkit-box-shadow: 0 0 4px black;
		box-shadow: 0 0 4px black;
    /* the line that rules them all */
    scrollbar-width: thin;
    /* */
    overflow: auto;
	}
}

.logo {
	text-align: center;
	margin: 15px 15px;
	img {
		display: block;
		width: 180px;
		height: auto;
		margin: auto;
		cursor: pointer;
	}
}


/*Sidebar Edit Icon*/

$color_1: #888;
$color_2: #e9baed;
$color_3: #ffffff;
$color_4: #fff;
$color_5: #dee4ec;

.show_edit {
	display: block;
}
.li-text {
	display: flex;
	gap: 90px;
}
.wrapper {
	.sidebar {
		.edit_ico {
			text-decoration: none;
			display: block;
			cursor: pointer;
			text-align: left;
			margin-left: 25px;
			width: fit-content;
			margin-bottom: 20px;
			.fa-solid {
				color: $color_1 !important;
				font-size: 1.3em;
				:hover {
					color: $color_2 !important;
					transform: scale(105%);
				}
			}
		}
		.logo {
			h3 {
				color: $color_3;
				margin: 10px 0 5px;
			}
			p {
				color: $color_2;
				font-size: 14px;
			}
		}
		ul {
			li {
				height: min-content;
				width: 100px;
				a {
					display: block;
					padding: 12px 12px;
					color: $color_4;
					font-size: 16px;
					position: relative;
					font-size: 1.2rem;
          text-decoration: none;
					font-weight: normal;
					font-weight: 600;
					width: fit-content;
					cursor: pointer;
					.icon {
						color: $color_5;
						width: 30px;
						display: inline-block;
					}
				}
			}
		}
	}
}
.text_edit {
	display: flex;
}
.fa-pen {
	display: block !important;
	color: $color_1 !important;
	cursor: pointer !important;
	font-size: 1.2rem !important;
	align-self: center;
	position: absolute;
	:hover {
		color: $color_2 !important;
		transform: scale(105%);
	}
}
.brand_title {
	display: flex;
	height: 40px;
	gap: 48px;
	margin-bottom: 20px;
}
#brand_con {
	margin-bottom: 50px;
	display: flex;
	flex-direction: column;
	margin-left: 5px;
	gap: 10px;
	margin-bottom: 50px;
}
#brand_con2 {
	margin-bottom: 50px;
	display: flex;
	flex-direction: column;
	margin-left: 5px;
	gap: 10px;
	padding-bottom: 150px;
}

/* 
.active {
    background-color: whitesmoke;
} */

$color_1: #e9baed;
$color_2: #191827;
$color_3: #fff;
$font-family_1: Gilroy Extrabold;
$background-color_1: whitesmoke;
$background-color_2: #191827;
$background-color_3: #2b2942;

.wrapper {
	.sidebar {
		ul {
			li {
				a {
					:hover {
						color: $color_1;
						border-right: 2px solid #191827;
						.icon {
							color: $color_2;
						}
						:before {
							display: block;
						}
					}
				}
				a.active {
					color: $color_1;
					border-right: 2px solid #191827;
					background-color: $background-color_1;
					.icon {
						color: $color_2;
					}
					:before {
						display: block;
					}
				}
			}
		}
	}
}
#home {
	font-family: $font-family_1;
	font-size: 1.4rem;
}
#brand_name {
	font-family: $font-family_1 !important;
	color: $color_1;
	cursor: default;
}
#brand_name2 {
	font-family: $font-family_1 !important;
	color: $color_1;
	cursor: default;
}
#t_1 {
	margin-bottom: 20px;
	text-align: center;
	width: fit-content;
}
#t_2 {
	margin-bottom: 20px;
	text-align: center;
	width: fit-content;
}
.showLeft {
	color: $color_3 !important;
	padding: 10px;
}
.icons {
	li {
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
}
.btn-left {
	left: 9.6em;
	position: absolute;
	top: 0.24em;
}
.btn-right {
	right: 9.6em;
	position: absolute;
	top: 0.24em;
}
.dropdownbtn {
	border: none;
	cursor: pointer;
}
.dropdownPosts {
	position: absolute;
	display: inline-block;
	right: 0.4em;
	a {
		:hover {
			background-color: $background-color_3;
		}
	}
}
.dropdownPost-content {
	display: none;
	position: absolute;
	margin-top: 50px;
	color: $color_3;
	background-color: $background-color_2;
	min-width: 160px;
	overflow: auto;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	right: 40px;
	border-top: #e9baed 2px solid;
	a {
		color: $color_3;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}
}
.show {
	display: block;
}

/*/////////ADD NEW SIDEBAR ELEMENT////////////*/

$color_1: #e9baed;
$color_2: #fff;
$background-color_1: transparent;

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
	color: $color_1;
}
#add_side {
	cursor: pointer;
	width: max-content;
	height: min-content;
	background-color: $background-color_1;
	border: transparent;
	font-size: 1.2rem;
	border-radius: 20%;
	color: $color_2;
	font-weight: 600;
}
.items {
	display: none;
}



/*//// HIDE/SHOW SIDEBAR ICON ////*/

$color_1: #fff;
$background-color_1: #191827;

.hide_container {
	margin-left: 250px;
	z-index: 3;
	position: fixed;
	cursor: pointer;
	margin-top: 95px;
}
.hide_icon {
	border-left: #e9baed 1px solid;
	display: flex;
	width: fit-content;
	height: 50px;
	background-color: $background-color_1;
	z-index: 2;
	i {
		color: $color_1;
		align-self: center;
		font-size: 0.8rem;
	}
	img {
		border: #191827 3px solid;
		object-fit: contain;
		width: 50px;
		border-bottom-right-radius: 40%;
		border-top-right-radius: 40%;
	}
}

</style>

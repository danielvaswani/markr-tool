<template>
  <div id="box">
        <div class="wrapper">
          <!--Top menu -->
          <div class="sidebar">
            <div class="logo">
              <span onclick="transitionToPage('../BGS_page/bgs_p.html')">
                <img src="images/Markr_w.png" alt="logo" />
              </span>
            </div>

            <div>
              <span onclick="editSide()" class="edit_ico"
                ><i class="fa-solid fa-wand-magic-sparkles"></i
              ></span>
            </div>
            <!--menu item-->
            <ul id="brand_con">
              <!-- <li>
                    <a href="#" class="active">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item" id="home">HOME</span>
                    </a>
                </li> -->
              <div class="brand_title">
                <li id="t_1">
                  <router-link>
                    <span class="item" id="brand_name" contenteditable="false"
                      >YOUR BRAND</span
                    >
                  </router-link>
                </li>

                <div class="text_edit">
                  <i
                    onclick="editText()"
                    id="edit_t2"
                    class="fa-solid fa-pen"
                  ></i>
                </div>
              </div>
              <div class="li-text">
                <li>
                  <router-link>
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
                  <i
                    onclick="editText()"
                    id="edit_t"
                    class="fa-solid fa-pen"
                  ></i>
                </div>
              </div>

              <li>
                <router-link id="add_b">
                  <button id="add_side"><i class="bi bi-plus"></i>Add</button>
                </router-link>
              </li>

              <li id="new_side" class="items">
                <router-link>
                  <span
                    onclick="newTemplate()"
                    contenteditable="false"
                    class="item"
                    >Item 2</span
                  >
                </router-link>
              </li>

              <li class="items" id="t_3">
                <router-link>
                  <span
                    onclick="newTemplate()"
                    contenteditable="false"
                    class="item"
                    >Item 3</span
                  >
                </router-link>
              </li>
            </ul>

            <ul id="brand_con2">
              <li id="t_2">
                <router-link>
                  <span class="item" id="brand_name2">BRAND IDENTITY</span>
                </router-link>
              </li>

              <div class="li-text">
                <li>
                  <router-link>
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
                  <i
                    onclick="editText()"
                    id="edit_t"
                    class="fa-solid fa-pen"
                  ></i>
                </div>
              </div>

              <div class="li-text">
                <li>
                  <router-link>
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
                  <i
                    onclick="editText()"
                    id="edit_t"
                    class="fa-solid fa-pen"
                  ></i>
                </div>
              </div>

              <div class="li-text">
                <li>
                  <router-link>
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
                  <i
                    onclick="editText()"
                    id="edit_t"
                    class="fa-solid fa-pen"
                  ></i>
                </div>
              </div>

              <div style="display:none" class="new_element">
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
                <router-link>
                  <span
                    contenteditable="false"
                    onclick="newTemplate()"
                    class="item"
                    >New Item</span
                  >
                </router-link>
              </li>

              <li class="items">
                <router-link>
                  <span
                    contenteditable="false"
                    onclick="newTemplate()"
                    class="item"
                    >New Item</span
                  >
                </router-link>
              </li>

              <li class="items">
                <router-link>
                  <span
                    contenteditable="false"
                    onclick="newTemplate()"
                    class="item"
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
        <div class="hide_container">
          <div class="hide_icon">
            <i class="bi bi-caret-left-fill"></i>
            <img src="images/stuurmen.jpg" alt="" />
          </div>
        </div>
      </div>
</template>

<script setup></script>

<style scoped>

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
    overflow-y: scroll;
    overflow-x: visible;
}

.wrapper .sidebar .logo {
    margin-bottom: 45px;
    text-align: center;
}

.wrapper .sidebar .logo img {
    display: block;
    width: 180px;
    height: auto;
    margin: 10px auto;
    cursor: pointer;
}

/*Sidebar Edit Icon*/

.show_edit{
    display: block;
}

.li-text{
    display: flex;
    gap: 90px;  
}

.wrapper .sidebar .edit_ico {
    text-decoration: none;
    display: block;
    cursor: pointer;
    text-align: left;
    margin-left: 25px;
    width: fit-content;
    margin-bottom: 20px;
}

.wrapper .sidebar .edit_ico .fa-solid {
    color:#888 !important;
    font-size: 1.3em;
}


.wrapper .sidebar .edit_ico .fa-solid:hover{
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
    margin-bottom: 50px;
    display: flex;
    /* align-self: flex-start; */
    flex-direction: column;
    margin-left: 5px;
    gap: 10px;
    padding-bottom: 150px;
}

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
}

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

/*//// HIDE/SHOW SIDEBAR ICON ////*/

.hide_container{
   margin-left: 250px;
   z-index: 3;
   position: fixed;
   cursor: pointer;
}

.hide_icon{
    border-left: #e9baed 1px solid;
    display: flex;
    width: 14px;
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
</style>

<template>
  <div class="wrapper">
    <!--Top menu -->
    <div class="sidebar">
      <div class="logo">
        <span onclick="transitionToPage('../bgs_p.html')">
          <img src="../assets/images/Markr_w.png" alt="logo" />
        </span>
      </div>
      <!--menu item-->
      <ul v-if="$route.params.bgsName !== undefined" id="brand_con">
        <!-- <li>
                    <a href="#" class="active">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item" id="home">HOME</span>
                    </a>
                </li> -->
        <li id="t_1">
          <a>
            <span class="item" id="brand_name" contenteditable="true"
              >YOUR BRAND</span
            >
          </a>
        </li>

        <li>
          <a>
            <span onclick="newTemplate()" contenteditable="true" class="item"
              >Item 1</span
            >
          </a>
        </li>

        <li>
          <a>
            <button id="add_side">
              <i class="bi bi-plus"></i>
            </button>
          </a>
        </li>

        <li id="new_side" class="items">
          <a>
            <span onclick="newTemplate()" contenteditable="true" class="item"
              >Item 2</span
            >
          </a>
        </li>

        <li class="items" id="t_3">
          <a>
            <span onclick="newTemplate()" contenteditable="true" class="item"
              >Item 3</span
            >
          </a>
        </li>
      </ul>

      <ul v-if="$route.params.bgsName !== undefined" id="brand_con2">
        <li id="t_2">
          <a>
            <span class="item" id="brand_name2">BRAND IDENTITY</span>
          </a>
        </li>

        <li>
          <a>
            <span onclick="newTemplate()" contenteditable="true" class="item"
              >Item 1</span
            >
          </a>
        </li>

        <li class="items">
          <a>
            <span contenteditable="true" onclick="newTemplate()" class="item"
              >Item 2</span
            >
          </a>
        </li>

        <li>
          <a>
            <button id="add_side">
              <i class="bi bi-plus"></i>
            </button>
          </a>
        </li>

        <li class="items">
          <a>
            <span contenteditable="true" onclick="newTemplate()" class="item"
              >Item 3</span
            >
          </a>
        </li>

        <li class="items">
          <a>
            <span contenteditable="true" onclick="newTemplate()" class="item"
              >Item 4</span
            >
          </a>
        </li>

        <li class="items">
          <a>
            <span contenteditable="true" onclick="newTemplate()" class="item"
              >Extra Item</span
            >
          </a>
        </li>

        <!-- three dot menu -->
        <div class="dropdownPosts">
          <!-- three dots -->
          <ul
            class="dropdownbtn icons btn-right showLeft"
            onclick="showDropdown(event)"
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <!-- menu -->
          <div class="dropdownPost-content">
            <a><span onclick="newTemplate()">Video</span> </a>
            <a><span onclick="newTemplate()">Audio</span> </a>
            <a><span onclick="newTemplate()">Others</span> </a>
          </div>
        </div>

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
</template>

<script setup></script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: whitesmoke;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/*//////////////////SIDERBAR///////////////////////*/

.wrapper .sidebar {
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

.wrapper .sidebar .logo h3 {
  color: #ffffff;
  margin: 10px 0 5px;
}

.wrapper .sidebar .logo p {
  color: #e9baed;
  font-size: 14px;
}

#brand_con {
  margin-bottom: 50px;
}

#brand_con2 {
  padding-bottom: 150px;
}

.wrapper .sidebar ul li a {
  display: block;
  padding: 13px 30px;
  color: #fff;
  font-size: 16px;
  position: relative;
  font-size: 1.2rem;
  font-weight: normal;
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
  cursor: text;
}

#brand_name2 {
  cursor: default;
}

#t_1,
#t_2 {
  margin-bottom: 20px;
  text-align: center;
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
  position: absolute;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-top: 6%;
  margin-right: 30%;
  display: inline-flex;
}

.dropdownPosts {
  position: absolute;
  display: inline-block;
  right: 0.4em;
}

.dropdownPost-content {
  display: none;
  position: absolute;
  margin-top: 39px;
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

#add_side {
  cursor: pointer;
  width: min-content;
  height: min-content;
  background-color: transparent;
  border: transparent;
  font-size: 2rem;
  border-radius: 20%;
}

.items {
  display: none;
}

/*//////////////////LOGO CONTAINER//////////////////////*/

.logos {
  width: 600px;
  background-color: #fff;
  height: 850px;
  margin: 10px 600px;
  display: none;
  flex-direction: column;
}

.logo_p {
  padding: 10px;
}

#logo_t {
  margin-left: 80px;
  font-size: 4rem;
  color: #2c2a45;
}

/* Dropdown Button */
.dropbtn {
  background-color: transparent;
  color: #e9baed;
  padding: 0;
  font-size: 60px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  margin: 0 450px;
  margin-top: 50px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  border-top: #e9baed 2px solid;
  display: none;
  position: absolute;
  background-color: #191827;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: #fff;
  padding: 12px 16px;
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
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

/* Change color of dropdown links on hover */
.dropdown-content span:hover {
  background-color: #2c2a45;
}

.bi {
  color: #e9baed;
}

#edit_icon {
  border-bottom: #fff 1px solid;
}

#delete_icon {
  color: crimson;
}

#delete {
  border-top: #fff 1px solid;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  display: block;
}

#printIt {
  margin: auto;
}

#logo_img {
  width: 450px;
  height: fit-content;
  object-fit: contain;
  margin: auto;
  cursor: pointer;
  border: #191827 2px solid;
  vertical-align: middle;
}

/* The Modal (background) */
.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 4;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: #191827;
  /* Fallback color */
  background-color: #191827;
  /* Black w/ opacity */
}

/* Modal Content (Image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #e9baed;
  padding: 10px 0;
  height: 150px;
  font-size: 2em;
}

/* Add Animation - Zoom in the Modal */
.modal-content,
#caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #fff;
  font-size: 80px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #e9baed;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}

#logo_text {
  text-align: justify;
  width: 80%;
  margin: auto;
  font-size: 1.2rem;
}

.logo_p:hover {
  border: #e9baed 2px solid;
  padding: 10px;
}
</style>

<template>
  <div class="container_color">
    <div class="colors">
      <div class="dropdown2">
        <img @click="myFunction" class="dropbtn" src="../assets/images/icons8-edit-64.png" />
        <div id="myDropdown" class="dropdown-content">
          <a><i class="bi bi-share-fill"></i> Share</a>
          <a href="images/jw_logo.png" download="logo_preview"><i class="bi bi-box-arrow-down"></i> Download</a>
          <a onclick="printDiv('printIt')" value="print a div!"><i class="bi bi-printer-fill"></i> Print</a>
          <a id="delete">
            <i id="delete_icon" class="bi bi-trash3"></i> Delete</a>
        </div>

        <div id="printIt"></div>
      </div>
      <div class="colortext">
        <h2 id="color_t">Colour Pallet</h2>
      </div>
      <div class="colorpicker">
        <ColorPicker />
        <ColorPicker />
      </div>
      <div class="palette-add-color" @click="X">
        <img class="del-icon" src="../assets/images/add.png" />
      </div>
    </div>
  </div>
</template>

<script>
import ColorPicker from "../components/ColorPicker.vue";

export default {
  components: {
    ColorPicker,
  },
  methods: {
    myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
  },
};
</script>

<style scoped>







.colorpicker {
  margin-top: 80px;
  padding: 10px;
  display: flex;
  
}

.colors {
  width: 800px;
  background-color: #e7cee9;
  height: auto;
  margin: 10px 500px;
  display: flex;
  flex-direction: column;
}
.colortext {
margin-left: 10px;}
#color_t {
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
.dropdown2 {
  position: relative;
  display: inline-block;
  margin: 0 700px;
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
.palette-add-color {
margin-left: 350px;
       margin-top: 40px;
  margin-bottom: 20px;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  color: #191827;
  background: #e9baed;
      
}
.del-icon{
  width: 130px;
  display:inline
}
</style>

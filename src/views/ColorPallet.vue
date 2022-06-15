<template>

  <TitlePage :name="$props.pageName"></TitlePage>
  <div class="container_color">

    <div class="colors">

      <div class="addtemp" @click="createPalette">
        <img class="addtemp-icon" src="../assets/images/add.png" />
      </div>
      <div v-for="colors in predefindeColors" :key="colors">
        <ColorPalette :predefindeColors="colors"></ColorPalette>
      </div>
    </div> -->
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar/Sidebar.vue";
import ColorPalette from "../components/BgsGallery/ColorPalette.vue";
import { ref, reactive } from "vue";
import ColorPaletteVue from "../components/BgsGallery/ColorPalette.vue";

export default {
  components: {
    Sidebar,
    ColorPaletteVue
},
  setup() {
    let predefindeColors = ref([["#101B37", "#f6f6e3", "#ffd700"]]);

    function createPalette() {
      let newPalette = predefindeColors.value[0].slice(0);
      console.log(newPalette);
      predefindeColors.value.push(newPalette);
      console.log(predefindeColors.value);
    }
    return { predefindeColors, createPalette };
  },

  methods: {
    // myFunction() {
    //   document.getElementById("myDropdown").classList.toggle("show");
    // },
  },
};
</script>

<style scoped>
.container_color {
}

.colors {
  width: 900px;
  align-self: right;
  background-color: #e7cee9;
  height: auto;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
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
  margin-top: 50px;
  margin-left: 670px;
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
.addtemp {
  margin-left: 650px;
  border-radius: 50px;
  cursor: pointer;
  background: #5c1962;
  display: inline;
  position: relative;
  width: 100px;
}
.addtemp-icon {
  width: 100px;
  display: inline;
}
</style>

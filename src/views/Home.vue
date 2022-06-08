<template>
  <div class="home">
    <Sidebar v-if="showSidebar"></Sidebar>
    <!--HIDE/SHOW SIDEBAR-->
    <div
      v-if="$route.params.bgsName !== undefined"
      class="hide_container"
      :style="{ 'margin-left': showSidebar ? '250px' : '0px' }"
      @click="toggleSidebar()"
    >
      <div class="hide_icon">
        <i class="bi bi-caret-left-fill"></i>
      </div>
    </div>
    <router-view
      class="app-router-view"
      :style="{ 'margin-left': showSidebar ? '250px' : '0px' }"
    ></router-view>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar/Sidebar.vue";
import { ref } from "vue";
const showSidebar = ref(true);

function toggleSidebar() {
  this.showSidebar = !this.showSidebar;
}


</script>

<style scoped>
.app-router-view {
  background-color: whitesmoke;
  width: 100%;
  /* min-height: 100vh; */
  overflow-x: hidden;
}

.home {
  background-color: whitesmoke;
  display: flex;
}

/*//// HIDE/SHOW SIDEBAR ICON ////*/

.hide_container {
  margin-left: 250px;
  z-index: 3;
  position: fixed;
  cursor: pointer;
  margin-top: 0;
  /* transform: translateX(600%); */
}

.hide_icon {
  border-left: #e9baed 1px solid;
  display: flex;
  width: fit-content;
  height: 50px;
  background-color: #191827;
  z-index: 2;
}

.hide_icon i {
  color: #fff;
  align-self: center;
  font-size: 0.8rem;
}

.hide_icon img {
  border: #191827 3px solid;
  object-fit: contain;
  width: 50px;
  border-bottom-right-radius: 40%;
  border-top-right-radius: 40%;
}
</style>

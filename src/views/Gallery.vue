<template>
  <main>
    <!-- <UserProfile></UserProfile> -->
    <article class="gallery-container">
      <h2 class="title_bg">BRAND GUIDE SYSTEMS</h2>

      <div class="container" id="container">
        
          <div class="bgs" id="bgs" v-for='bgs in brandGuides' :key='bgs.name' >
          <BgsItem :name="bgs.name" :image-url="bgs.imageUrl"></BgsItem>
          </div>
          <!-- <BgsItem :name=" s" :image-url=" d" ></BgsItem> -->


        <!-- <div class="bgs">
          <a>
            <img class="prev" src="../assets/images/stuurmen.jpg" />
          </a>
        </div>

        <div class="bgs">
          <a>
            <img class="prev" src="../assets/images/stuurmen.jpg" />
          </a>
        </div>

        <div class="bgs">
          <a>
            <img class="prev" src="../assets/images/stuurmen.jpg" />
          </a>
        </div>

        <div class="bgs">
          <a>
            <img class="prev" src="../assets/images/stuurmen.jpg" />
          </a>
        </div>

        <div class="bgs">
          <a>
            <img class="prev" src="../assets/images/stuurmen.jpg" />
          </a>
        </div>

        <div class="bgs">
          <a>
            <img class="prev" src="../assets/images/stuurmen.jpg" />
          </a>
        </div> -->

        <!--BGS Template-->
        <div id="bgs_template">
          <div class="bgs" id="templ_bgs">
            <a>
              <img
                class="prev"
                id="temp_img"
                src="../assets/images/pexels-junior-teixeira-2047905.jpg"
                alt=""
              />
            </a>
          </div>
        </div>

        <!-- <div class="bgs" id="new_bgs" style="display: none"></div> -->

        <AddBgs></AddBgs>
      </div>
    </article>
  </main>
</template>

<script setup>


import UserProfile from '../components/UserProfile.vue';

import { ref, onMounted, computed } from 'vue';
import { useStore } from "vuex";
import BgsItem from '../components/BgsGallery/BgsItem.vue';
import AddBgs from '../components/BgsGallery/AddBgs.vue';
const store = useStore();

const showData = () => {
  console.log(gettersBrandGuides.name)
}

const getBrandGuides = computed(() => {
  return store.getters.getBrandGuides
})

const brandGuides = computed(() => {
  return store.state.brandGuides
})

onMounted(() => {
// dispatch the fetchBrandGuides action which commits a mutation to update the state
  store.dispatch("fetchBrandGuides");
})

</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  margin-left: 250px;
}

.title_bg {
  color: #191827;
  font-size: 2rem;
  /* margin-left: 330px; */
  margin-left: 60px;
  margin-top: 120px;
  font-family: "Gilroy Extrabold";
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  /* position: absolute;
  left: 250px;
  top: 150px; */
  padding: 60px;
}

.container a,
span {
  cursor: pointer;
}

.bgs {
  width: 250px;
  height: 350px;
  overflow: hidden;
  object-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 7);
}

/* .hvr-border-fade{
    width: 250px;
    height: 350px;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
    box-shadow: inset 0 0 0 4px #e1e1e1,
    0 0 1px rgba(0, 0, 0, 0);
    /* Hack to improve aliasing on mobile/tablet devices */

/* .hvr-border-fade:hover,
.hvr-border-fade:focus,
.hvr-border-fade:active {
    box-shadow: inset 0 0 0 4px #2098D1, 0 0 1px rgba(0, 0, 0, 0);

} */

.prev {
  width: 250px;
  height: 350px;
  object-fit: cover;
}

.prev:hover {
  transition: 0.2s;
  border: 4px solid #e9baed;
  color: #e9baed;
  /* background: #fff; */
}

#bgs_template {
  display: none;
}

#temp_img {
  width: 250px;
  height: 350px;
  object-fit: cover;
}
</style>

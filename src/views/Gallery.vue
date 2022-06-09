<template>
  <main>
    <!-- <UserProfile></UserProfile> -->
    <article class="gallery-container">
      <h2 class="title_bg">BRAND GUIDE SYSTEMS</h2>

      <div class="container" id="container">
        <div @click="updateCurrentBGS(bgs.name)" class="bgs" id="bgs" v-for="bgs in brandGuides" :key="bgs.name">
          <BgsItem :name="bgs.name" :image-url="bgs.imageUrl" :subdomain="bgs.subdomain"></BgsItem>
        </div>

        <!-- <div class="bgs" id="bgs">
          <BgsTemplate ></BgsTemplate>
        </div> -->

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

        <!-- <div class="bgs" id="new_bgs" style="display: none"></div> -->

        <AddBgs @click="toggleBrandGuide()"></AddBgs>
      </div>
    </article>
  </main>
  <BGSInfo v-if="showBGSInfo" />
</template>

<script setup>
import UserProfile from "../components/UserProfile.vue";
import Sidebar from "../components/Sidebar/Sidebar.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import BgsItem from "../components/BgsGallery/BgsItem.vue";
import AddBgs from "../components/BgsGallery/AddBgs.vue";
import BgsTemplate from "../components/BgsGallery/BgsTemplate.vue";
import BGSInfo from "../components/BgsGallery/BGSInfo.vue";

const store = useStore();

const showData = () => {
  console.log(gettersBrandGuides.name);
};

// const getBrandGuides = computed(() => {
//   return store.getters.getBrandGuides;
// });

const brandGuides = computed(() => {
  return store.state.brandGuides;
});

onMounted(() => {
  // dispatch the fetchBrandGuides action which commits a mutation to update the state
  store.dispatch("fetchBrandGuides");
});

let showBGSInfo = ref(false);
// function addComponent() {
//   this.components.push(Comp);
// }
// function addBrandGuide(bgsName) {
//   store.dispatch("addBrandGuide", bgsName);
// }
function toggleBrandGuide() {
  showBGSInfo.value = !showBGSInfo.value;
}

function updateCurrentBGS(name) {
  console.log(name)
  store.state.currentBGSName = name
  store.dispatch("fetchBrandGuide", name);
  console.log(store.state.currentBGSName)
}
</script>

<style scoped lang="scss">
.gallery-container {
  display: flex;
  flex-direction: column;
  // margin-left: 250px;
}

.title_bg {
  color: #191827;
  font-size: 2rem;
  margin-left: 310px;
  // margin-left: 60px;
  margin-top: 50px;
  font-family: "Gilroy Extrabold";
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 100%;
  margin-left: 250px;
  /* position: absolute;
  left: 250px;
  top: 150px; */
  padding: 60px;
}

// .container a,
// span {
//   cursor: pointer;
// }

.bgs {
  width: 250px;
  height: 350px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  align-content: center;
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

<template>
  <BGSInfo v-if="showBGSInfo" />
  <div v-if="hover" @mouseenter="hover = true" class="bgs-icons">
    <div class="preview-icon">
      <span class="preview">
        <a target="_blank" :href="'https://' + $props.subdomain + '.markrtool.nl'">
          <font-awesome-icon class="bi" icon="eye" />
        </a>
      </span>
    </div>

    <div class="edit-bgs">

      <span @click="toggleBrandGuide()" class="edit-button">
        <font-awesome-icon class="bi" id="pen" icon="wand-magic-sparkles" />
      </span>
      <!-- 
      <input style="display: none" type="file" id="uploadmyfile" /> -->
    </div>
  </div>
  <!-- <router-link
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    class="hvr-border-fade"
    :to="'/stuurmen' + '/' + $props.name"
  >
  </router-link> -->
<<<<<<< HEAD
  <a @mouseenter="hover = true" @mouseleave="hover = false" class="hvr-border-fade">
    <img class="prev" :src="$props.imageUrl" @click="handleRouteChange()" />
  </a>

=======
  <a class="gallery-asset" @mouseenter="hover = true" @mouseleave="hover = false"><img class="prev" :src="$props.imageUrl"
      @click="handleRouteChange" /></a>
>>>>>>> 59f51215775ae23d4d7e5dc292f0002cf6cb47f0

</template>

//
<script setup>
import BGSInfo from "./BGSInfo.vue";


function toggleBrandGuide() {
  showBGSInfo.value = !showBGSInfo.value;
}


let showBGSInfo = ref(false);
// import { ref } from "vue";
// import { useStore } from "vuex";
// import { useRouter, useRoute } from "vue-router";

// const router = useRouter();
// const route = useRoute();
const hover = ref(false);

// const store = useStore();

// const props = defineProps({
//   name: String,
//   imageUrl: String,
//   subdomain: String,
// });

// const hover = ref(false);

// const handleRouteChange = async () => {
//   console.log("i am clicked");
//   store.state.currentBGSName = props.name;
//   await store.dispatch("fetchBrandGuide");
//   const brandGuide = await store.state.currentBrandGuide;
//   const firstPageName = brandGuide.pages[0].name;
//   console.log(brandGuide.name);
//   router.push(`/stuurmen/${brandGuide.name}/${firstPageName}`);
// };

// // function pageName(){
// //   return store.state.currentBrandGuide.pages[0].name
// // }
//
</script>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
  props: {
    name: String,
    imageUrl: String,
    subdomain: String,
    pages: Array,
  },
  setup(props) {
    // const router = useRouter();
    // const route = useRoute();

    const store = useStore();

    
  },
  methods: {
    async handleRouteChange() {
      // console.log("i am clicked");
      this.$store.state.currentBGSName = this.$props.name;
      this.$store.dispatch("fetchBrandGuide");
      console.log(this.$store.currentBGSName);
      console.log(this.$store.currentBGSImageUrl);
      console.log(this.$store.currentBGSSubdomain);
      console.log(this.$store.currentBGSPages);
      // const firstPageName = brandGuide.pages[0].name;
      // console.log(brandGuide.name);
      this.$router.push(`/stuurmen/${this.$store.state.currentBGSName}`);
    },
  },
};
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

.gallery-asset{
  cursor: pointer;
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
.bgs {
  width: 250px;
  height: 350px;
  overflow: hidden;
  object-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 7);
}

a,
span {
  cursor: default;
  text-decoration: none;
  list-style: none;
}

.hvr-border-fade {
  width: 250px;
  height: 350px;
  cursor: pointer;
  display: inline-block;
  z-index: 2;
  vertical-align: middle;
  /* -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
    box-shadow: inset 0 0 0 4px #e1e1e1,
    0 0 1px rgba(0, 0, 0, 0); */
}

.prev {
  width: 250px;
  height: 350px;
  object-fit: cover;
  z-index: 2;
  margin-bottom: 120px;
}

.prev:hover {
  transition: 0.2s;
  border: 4px solid #e9baed;
  color: #e9baed;
  /* background: #fff; */
}

.bgs-icons {
  display: flex !important;
  flex-direction: column !important;
  padding: 20px;
  gap: 10px;
  position: absolute;
  margin-left: 180px;
}

/*Preview Icon */

.preview-icon {
  z-index: 3;
  /* position: absolute; */
  align-self: flex-end;
  /* margin: 15px; */
  width: fit-content;
}

.preview-icon a {
  text-decoration: none;
  color: #e9baed;
  cursor: pointer;
}

.active {
  visibility: visible;
}

.preview {
  cursor: pointer;
  color: #e9baed;
  /* opacity: 0.2; */
  font-size: 1.2rem;
  padding: 5px;
}

/*Edit button */
.edit-bgs {
  z-index: 3;
  text-align: center;
  /* position: absolute; */
}

.edit-button {
  /* color: #ffff; */
  /* border: #e9baed 2px solid;
  background-color: #19182794; */
  padding: 7px;
  word-spacing: 0.3em;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
}

#pen {
  color: #e9baed;
  margin-left: 5px !important;
}
</style>

<template>
  <div class="container_logo">
    <div class="logos" id="template_div">
      <TitlePage :name="$props.pageName"></TitlePage>
      <!-- {{$props.assets}} -->
      <Container
        v-for="asset in assets"
        :key="asset"
        :name="asset.name"
        :content="asset.content"
        :type="asset.type"
      >
      </Container>

      <EditButton></EditButton>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import TitlePage from "../components/BgsGallery/TitlePage.vue";
import Container from "../components/BgsGallery/Container.vue";
import EditButton from "../components/BgsGallery/EditButton.vue";
import ColorPalette from "../components/BgsGallery/ColorPalette.vue";

const store = useStore();

// const dropdown = ref(null);

// defineExpose({ dropdown });

const props = defineProps({
  pageName: String,
  assets: Array,
});

const assets = ref(props.assets);

let showDropdown = ref(false);

function toggleEdit() {
  showDropdown.value = !showDropdown.value;
  // console.log(this.$refs.sidebar);
  // this.$refs.userDropdown.scrollIntoView();
}

// function getBrandGuide(){
//     return store.state.currentBrandGuide
// }

function getCurrentBgsName() {
  // console.log(store.state.currentBGSName)
  return store.state.currentBGSName;
}

// const getBrandGuide = computed(() => {
//     return store.getters.getBrandGuide;
// });

const brandGuide = computed(async () => {
  return await store.state.currentBrandGuide;
});

const colors = ["#191827", "#e0c22fff", "#930808ff", "#129456", "#463218"];

function getColors() {
  return colors;
}
</script>

<style scoped lang="scss">
/*//////////////////TEMPLATE CONTAINER//////////////////////*/

.container_logo {
  display: flex;
  //   margin-left: 250px;
  padding: 80px;
  width: -moz-available;
}

.logos {
  background-color: whitesmoke;
  height: 100%;
  width: 1200px;
  /* margin-left: 550px !important; */
  margin: 0;
  /* margin-top: 150px; */
  display: flex;
  flex-direction: column;
  gap: 50px;
  /* -moz-box-shadow: 0 0 4px black;
        -webkit-box-shadow: 0 0 4px black;
        box-shadow: 0 0 4px black; */
}

.small-image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: auto;
}
</style>

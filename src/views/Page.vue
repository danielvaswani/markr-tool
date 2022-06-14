<template>
  <div class="container_logo">
    <div class="logos" id="template_div">
      <TitlePage :name="$props.pageName"></TitlePage>

      <Container v-for="asset in assets" :key="asset" :name="asset.name" :content="asset.content" :type="asset.type">
      </Container>

      <ColorPalette></ColorPalette>
      <EditButton @add-subtitle="addSubtitle" @add-paragraph="addParagraph" @add-image="addImage"></EditButton>
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
  isDefault: Boolean
});

const assets = ref(props.assets);

if(props.isDefault){
  assets.value = [
    {content: {variant: 'subtitle', value: 'Subtitle me this'}, name: 'new subtitle', type: 'text', }, 
    { content: { variant: 'image', url: 'https://cdn.discordapp.com/attachments/941271536046866446/986283891830710272/photo-placeholder-icon-14.png' }, name: 'new image', type: 'image', }, 
    { content: { variant: 'paragraph', value: 'Write here...' }, name: 'new paragraph', type: 'text', }, 
    ]
}

function addAsset(asset){
  assets.value.push(asset)
}

function addSubtitle(){
  addAsset({
    content:{variant: 'subtitle', 
    value: 'Subtitle me this'
    },
    name: 'subT',
    type: 'text',
  })
}


function addParagraph() {
  addAsset({
    content: {
      variant: 'paragraph',
      value: 'Write here...'
    },
    name: 'para',
    type: 'text',
  })
}


function addImage() {
  addAsset({
    content: {
      variant: 'regular',
      url: 'https://cdn.discordapp.com/attachments/941271536046866446/986283891830710272/photo-placeholder-icon-14.png'
    },
    name: 'img',
    type: 'image',
  })
}


function addBigImage() {
  addAsset({
    content: {
      variant: 'big',
      url: 'https://cdn.discordapp.com/attachments/941271536046866446/986283891830710272/photo-placeholder-icon-14.png'
    },
    name: 'subT',
    type: 'image',
  })
}

function addBannerImage() {
  addAsset({
    content: {
      variant: 'banner',
      url: 'https://cdn.discordapp.com/attachments/941271536046866446/986283891830710272/photo-placeholder-icon-14.png'
    },
    name: 'subT',
    type: 'image',
  })
}

let showDropdown = ref(false);

function toggleEdit() {
  showDropdown.value = !showDropdown.value;
  console.log("Im working");
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

const brandGuide = computed(() => {
  return store.state.currentBrandGuide;
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

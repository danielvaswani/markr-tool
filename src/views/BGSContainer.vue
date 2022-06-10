<template>
  <div v-if="store.state.currentBGSName === undefined ">YOU SUCK</div>
  <Page v-else :pageName = "brandGuide.pages[currentPageIndex].name" :assets="brandGuide.pages[currentPageIndex].Assets"></Page>
</template>

<script setup>
import Page from "./Page.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";


const store = useStore();

const props = defineProps({
    bgsName: String
});

// const page = computed(() => {
//     return store.state.currentBrandGuide.pages[0]
// })

// const page = ref({})
const currentPageIndex = ref(0)

onMounted(() => {
    console.log(props.bgsName)
    store.state.currentBGSName = props.bgsName
    console.log("name is: ", props.bgsName)
    console.log("BGS name is: ", store.state.currentBGSName )
    store.dispatch("fetchBrandGuide");
    // page = store.state.currentBrandGuide.pages[0]
});


const brandGuide = computed(() =>{
    console.log(store.state.currentBrandGuide)
    return store.state.currentBrandGuide;
    
})

const brandGuides = computed(() => {
    return store.state.brandGuides;
});





</script>

<style scoped lang="scss">

</style>
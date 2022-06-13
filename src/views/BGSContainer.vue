<template>
    <!-- <div style="margin-left:700px; font-size: 3rem;" v-if="$route.params.bgsName === undefined">NOT LOADED</div> -->
    <Page :pageName="pages[0].name" :assets="pages[0].Assets">
    </Page>
    <!-- <div v-for="p in pages" :key="p.name">{{p}}</div> -->
</template>

<script setup>
import Page from "./Page.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  bgsName: String,
    name: String,
});

// const currentInstance = getCurrentInstance()

// const target = computed(() => {
//     return currentInstance.proxy.$store.state.currentBGSPages
// })

// const pages = new Proxy(target, {});

// console.log(pages)
// const page = computed(() => {
//     return store.state.currentBrandGuide.pages[0]
// })

const currentPageName = ref("");

const pages = computed(() => {

   return store.state.currentBGSPages
})

// const page = computed(() => {
//     const tempPages = pages;
//     return tempPages.filter((page) => page.name === props.name)[0]
// })

console.log(pages)


 onMounted(() => {
        console.log("I am mounted")
        // dispatch the fetchBrandGuides action which commits a mutation to update the state
        store.commit("SET_CURRENTBGSNAME", props.bgsName);
        store.dispatch("fetchBrandGuide");
        // currentPageName.value = pages.filter((page)=> page.name === props.name)[0];
        // console.log(store.state.currentBGSPages + " in BGSitem");
        // console.log(pages())
    })



</script>



<style scoped lang="scss"></style>

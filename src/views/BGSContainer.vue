<template>
  <!-- <div style="margin-left:700px; font-size: 3rem;" v-if="$route.params.bgsName === undefined">NOT LOADED</div> -->
  <!-- <div v-if="store.getters.getcurrentBGSName === 'undefined'">YOU SUCK</div>
  <!- <div v-for="p in pages" :key="p.name">{{p}}</div> -->
  <Page
    :pageName="store.getters.getcurrentBGSPages[0].name"
    :assets="store.getters.getcurrentBGSPages[0].Assets"
  >
  </Page>
</template>

<script setup>
// import { useRoute, useRouter } from "vue-router";

// const router = useRouter();
import Page from "./Page.vue";
// import { computed, onMounted, ref } from "vue";
// import { useStore } from "vuex";

// const store = useStore();
// const route = useRouter();

// const props = defineProps({
//   bgsName: String,
//   name: String,
// });

// const currentInstance = getCurrentInstance()

// const target = computed(() => {
//     return currentInstance.proxy.$store.state.currentBGSPages
// })

// const pages = new Proxy(target, {});

// console.log(pages)
// const page = computed(() => {
//     return store.state.currentBrandGuide.pages[0]
// })

// const currentPageName = ref(null);

// const pages = computed(() => {
//   return store.currentBGSPages ? store.state.currentBGSPages : [];
// });

// const page = computed(() => {
//   const tempPages = [...pages];
//   return tempPages.filter((page) => page.name === props.name);
// });

// console.log(pages);

// onMounted(() => {
//   console.log("I am mounted");
//   // dispatch the fetchBrandGuides action which commits a mutation to update the state
//   // store.commit("SET_CURRENTBGSNAME", props.bgsName);
//   console.log("fetching router bgsName" + route.params.bgsName);
//   store.dispatch("fetchBrandGuide", route.params.bgsName);
//   // currentPageName.value = pages.filter((page)=> page.name === props.name)[0];
//   // console.log(store.state.currentBGSPages + " in BGSitem");
//   // console.log(pages())
// });
</script>

<style scoped>
div {
  margin-left: auto;
}
</style>

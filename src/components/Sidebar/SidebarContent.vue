<template>
  <div>
    <CategoryContainer
      v-if="$route.params.bgsName !== undefined"
      :pageNames="$store.getters.getcurrentBGSPages.map((page) => page.name)"
      :showText="showText"
    >
    </CategoryContainer>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();

import CategoryContainer from "./CategoryContainer.vue";

const store = useStore();
const props = defineProps({
  showText: Boolean,
  pageNames: Array,
  name: String,
  page: Array,
});

// const getPages = computed(() => {
//   return store.getters.getcurrentBGSPages;
// });

// function getPageIndexFromName(pageName) {
//   if (pageName !== undefined) {
//     return;
//   }
//   return 0;
// }

// You can also get state directly instead of relying on instance.
// const pageNames = computed(() => {
//   // Access state directly or use getter
//   return store.state.currentBGSPages;
// });

// const page = computed(() => {
//   return store.getters.getcurrentBGSPages.map((page) => page.name);
// });
// console.log(page);

// const pageNames = computed(() => {
//   return store.state.pageNames.map((page) => page.name);
// });
// console.log(pageNames);

onMounted(() => {
  // store.commit("SET_CURRENTPAGES", props.pages);
  // dispatch the fetchBrandGuide action which commits a mutation to update the state
  store.dispatch("fetchBrandGuide", route.params.bgsName);
});
</script>

<style scoped lang="scss"></style>

<template>
  <div v-if="store.state.currentBGSName === undefined">YOU SUCK</div>
  <Page
    v-else
    :pageName="pages[0].name"
    :assets="pages[0].Assets"
  ></Page>

  <Page :isDefault="pages === undefined || pages[0].Assets === [] || pages === []" ></Page>
</template>

<script setup>
import Page from "./Page.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  bgsName: String,
});

// const page = computed(() => {
//     return store.state.currentBrandGuide.pages[0]
// })

// const page = ref({})
const currentPageIndex = ref(0);

const pages = computed(() => {
  return store.state.currentBGSPages;
});

onMounted(() => {
  // dispatch the fetchBrandGuides action which commits a mutation to update the state
  console.log(pages + " in BGSitem");
});
</script>

<style scoped lang="scss"></style>

<template>
  
<CategoryContainer :showText="showText" v-for="p in pageNames" :key="p.name" ></CategoryContainer>

</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";


const props = defineProps({
    showText: Boolean,
    // pageNames: Array
})

const store = useStore();



// const pageNames = computed( () => {
//     store.state.currentBGSPages.map(page => page.name)
// })

</script>

<style scoped lang="scss">

</style>
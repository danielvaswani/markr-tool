<template>

    <CategoryContainer v-if="$route.params.bgsName !== undefined" :page="pageNames[0].name" :showText="showText">
    </CategoryContainer>

</template>

<script setup>
import { ref, computed, onMounted, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import CategoryContainer from "./CategoryContainer.vue";

const store = useStore();
const props = defineProps({
    showText: Boolean,
    pageNames: Array,
    name: String,
    page: Array
})

const getPages = computed(() => {
    return store.getters.getcurrentBGSPages;
});

// You can also get state directly instead of relying on instance.
const pageNames = computed(() => {
    // Access state directly or use getter
    return store.state.currentBGSPages
})
console.log(pageNames)


const page = computed(async () => {
    return await store.state.currentBGSPages.map((page) => page.name)
})
console.log(page)





// const pageNames = computed(() => {
//     return  store.state.pageNames.map(page => page.name)
// });

// onMounted(() => {
//     // store.commit("SET_CURRENTPAGES", props.pages);
//     // dispatch the fetchBrandGuide action which commits a mutation to update the state
//     store.dispatch("fetchBrandGuide");
// });



</script>

<style scoped lang="scss">

</style>
<template>

    <div class="page-title" contenteditable="true">
        <h2 id="template-title">{{$props.name}}</h2>
    </div>

</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

defineProps({
    name: String
})

const store = useStore();

</script>

<style scoped lang="scss">







.page-title{
    width: fit-content;
    padding: 5px;
}


#template-title {
    // margin-top: 50px !important;
    // margin-left: 130px;
    font-size: 4rem;
    color: #2c2a45;
    font-family: Gilroy Extrabold;
    padding: 2px;
    text-transform: uppercase;
}


#template-title:hover{
    border: #e9baed 2px solid;
    padding: 2px;
}
</style>
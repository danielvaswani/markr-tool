<template>

    <div class="title-container">
        <h2 class="template-title" id="template_title" contenteditable="true">
            Title Me This</h2>
    </div>

</template>

<script setup>

</script>

<style scoped lang="scss">


.title-container {
    text-align: justify;
    width: 90%;
    word-wrap: break-word;
    padding: 5px;
    font-size: 1.5rem;
    
}

.template-title {
    padding: 5px;
    border: transparent;
    width: 300px;
    font-weight: 600;
    word-wrap: break-word;
    height: fit-content;
    // border: 1px solid #19182753;
    // border-radius: 5px;
    // box-shadow: 1px 1px 1px #888888 inset;
}


.template-title:hover {
    border: #e9baed 2px solid;
    padding: 5px;
}
</style>
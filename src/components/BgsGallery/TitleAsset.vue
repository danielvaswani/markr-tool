<template>

    <div class="title-container">
        <div class="move-element">
            <font-awesome-icon class="grip-lines" icon="grip-lines" />
        </div>

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
    display: flex;
    gap: 25px;
    font-size: 1.5rem; 
}

.move-element {
    margin-top: 14px;
}

.grip-lines {
    display: block !important;
    color: #888 !important;
    cursor: pointer !important;
    font-size: 1.5rem !important;
    position: absolute;
    z-index: 3;
}

.grip-lines:hover {
    color: #e9baed !important;
    transform: scale(105%);
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
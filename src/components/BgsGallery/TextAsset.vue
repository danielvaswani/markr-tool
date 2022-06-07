<template>
  
  <div id="text">
    <!-- <p>Text</p>
    <div class="field">
    <span class="field-value" v-show="!showField('text')" @click="focusField('text')">{{user.text}}</span>
    <input v-model="user.text" v-show="showField('text')" id="user-text" type="text" class="field-value form-control" @focus="focusField('text')" @blur="blurField">
    </div> -->
    <p class="logo_p" id="logo_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            voluptates, nulla iusto eum molestias ipsam eveniet aperiam tempora
            rerum modi pariatur alias laboriosam eligendi sint illum facere ad
            nam ut. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aperiam velit impedit dignissimos adipisci, nulla voluptates ullam
            nostrum! Adipisci laborum laboriosam accusantium in neque? Ipsam,
            modi veritatis pariatur voluptas debitis quidem!
    </p>
  </div>
</template>

<script setup>



// new Vue({
//   el: '#text',
//   data(){
//     return {
//       user : {
//         text: ''
//       },
//       editField : ''
//     }
//   },
//   methods : {
//     focusField(text){
//       this.editField = text;
//     },
//     blurField(){
//       this.editField = '';
//     },
//     showField(text){
//       return (this.user[text] == '' || this.editField == text)
//     }
//   }
// })

</script>

<style scoped lang="scss">

/*///TEXT CONTAINER///*/

#text {
    text-align: justify;
    width: 80%;
    margin: auto;
    font-size: 1.2rem;
}

.logo_p:hover {
    border: #e9baed 2px solid;
    padding: 10px;
}

</style>
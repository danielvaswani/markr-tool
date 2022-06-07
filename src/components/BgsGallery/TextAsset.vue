<template>
  
  <div id="text">
    <!-- <p>Text</p>
    <div class="field">
    <span class="field-value" v-show="!showField('text')" @click="focusField('text')">{{user.text}}</span>
    <input v-model="user.text" v-show="showField('text')" id="user-text" type="text" class="field-value form-control" @focus="focusField('text')" @blur="blurField">
    </div> -->
    <input class="template-text" id="template_text" contenteditable="true" placeholder="Write here..." />
          

  
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
    width: 90%;
    word-wrap: break-word;
    word-break: break-all;
    padding: 5px;
    font-size: 1.2rem;
}

.template-text{
  padding: 10px;
  border: transparent;
  width: 100%;
}


.template-text:hover {
    border: #e9baed 2px solid;
    padding: 10px;
}

</style>
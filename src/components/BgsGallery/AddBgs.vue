<template>
  <!--Adding a new BGS-->
        <div class="bgs" id="add_border">
          <a id="add_bg">
            <transition name="scale">
            <i class="bi bi-plus-circle-dotted"></i>
            </transition>
          </a>
        </div>
</template>

<script setup>

</script>

<style scoped lang="scss">

a,
span {
  cursor: pointer;
}

#add_border {
  border: #191827 2px solid;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
}

.bi-plus-circle-dotted {
  color: #e9baed;
  font-size: 6rem;
  margin: 10px;
  padding: 50px;
}

.bi-plus-circle-dotted:hover {
  margin: 5px;
  font-size: 6.5rem;
  padding: 45px;
  transition: 0.2s;

    .scale-enter-active, .scale-enter-leave{
    transform: scale(120%) !important;
    transition: 0.2s;
  }
}



#add_bg {
  padding: 15px;
  position: absolute;
  align-self: center;
  margin: 100px auto;
}
</style>
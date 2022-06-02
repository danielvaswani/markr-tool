<template>
  <!--Adding a new BGS-->
        <div class="bgs" id="add_border">
          <a id="add_bg">
            <i class="bi bi-plus-circle-dotted"></i>
          </a>
        </div>
</template>

<script setup>

</script>

<style scoped>

a,
span {
  cursor: pointer;
}

#add_border {
  border: #191827 2px solid;
  background-color: whitesmoke;
}

.bi-plus-circle-dotted {
  color: #e9baed;
  font-size: 6rem;
  margin: 10px;
  padding: 50px;
}

.bi-plus-circle-dotted:hover {
  font-size: 7rem;
  transition: 0.2s;
  margin: 5px;
  padding: 45px;
}

#add_bg {
  padding: 15px;
  position: relative;
  top: 115px;
}
</style>
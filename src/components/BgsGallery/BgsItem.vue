<template>
            <router-link 
              class="hvr-border-fade"
              :to = "'/stuurmen' + '/' + $props.name">
              <img
                class="prev"
                :src="$props.imageUrl"
              />
            </router-link>

</template>

<script setup>

defineProps({
  name: String,
  imageUrl: String
})

</script>

<style scoped>

.gallery-container {
  display: flex;
  flex-direction: column;
  margin-left: 250px;
}

.title_bg {
  color: #191827;
  font-size: 2rem;
  /* margin-left: 330px; */
  margin-left: 60px;
  margin-top: 120px;
  font-family: "Gilroy Extrabold";
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  /* position: absolute;
  left: 250px;
  top: 150px; */
  padding: 60px;
}
.bgs {
  width: 250px;
  height: 350px;
  overflow: hidden;
  object-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 7);
}

a,
span {
  cursor: pointer;
}

.prev {
  width: 250px;
  height: 350px;
  object-fit: cover;
}

.prev:hover {
  transition: 0.2s;
  border: 4px solid #e9baed;
  color: #e9baed;
  /* background: #fff; */
}



</style>
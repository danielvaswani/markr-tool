<template>

  <main>
    <UserProfile :class="[$route.params.bgsName !== undefined? '':'userProfile-gallery']"></UserProfile>
    <article>
      <h2 class="title_bg">BRAND GUIDE SYSTEMS</h2>

      <div class="container" id="container">
        <div id="try_bgs">
          <div class="bgs" id="bgs">
            <span
              class="hvr-border-fade"
              onclick="transitionToPage('../BGS_page/Logo_page/logo_p.html')"
            >
              <img
                class="prev"
                src="../assets/images/341e5560369787.5bfc0508d0638.jpg"
              />
            </span>
          </div>
        </div>

        <div class="bgs">
          <a>
            <img class="prev" src="../assets/images/stuurmen.jpg" />
          </a>
        </div>

        <div class="bgs">
          <a>
            <img class="prev" src="../assets/images/stuurmen.jpg" />
          </a>
        </div>

        <div class="bgs">
          <a>
            <img class="prev" src="../assets/images/stuurmen.jpg" />
          </a>
        </div>

        <div class="bgs">
          <a>
            <img class="prev" src="../assets/images/stuurmen.jpg" />
          </a>
        </div>

        <div class="bgs">
          <a>
            <img class="prev" src="../assets/images/stuurmen.jpg" />
          </a>
        </div>

        <div class="bgs">
          <a>
            <img class="prev" src="../assets/images/stuurmen.jpg" />
          </a>
        </div>

        <!--BGS Template-->
        <div id="bgs_template">
          <div class="bgs" id="templ_bgs">
            <a>
              <img
                class="prev"
                id="temp_img"
                src="../assets/images/pexels-junior-teixeira-2047905.jpg"
                alt=""
              />
            </a>
          </div>
        </div>

        <div class="bgs" id="new_bgs" style="display: none"></div>

        <!--Adding a new BGS-->
        <div class="bgs" id="add_border">
          <a id="add_bg">
            <i class="bi bi-plus-circle-dotted"></i>
          </a>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>

import UserProfile from '../components/UserProfile.vue';


</script>

<style scoped>

.userProfile-gallery{
  position: fixed;
  top: 0;
  right: 0;
}

article {
  display: flex;
  flex-direction: column;
}

.title_bg {
  color: #191827;
  font-size: 2rem;
  /* margin-left: 330px; */
  margin-left: 80px;
  margin-top: 120px;
  font-family: "Gilroy Extrabold";
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 90%;
  /* position: absolute;
  left: 250px;
  top: 150px; */
  padding: 80px;
}

.container a,
span {
  cursor: pointer;
}

.bgs {
  width: 250px;
  height: 350px;
  overflow: hidden;
  object-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 7);
}

/* .hvr-border-fade{
    width: 250px;
    height: 350px;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
    box-shadow: inset 0 0 0 4px #e1e1e1,
    0 0 1px rgba(0, 0, 0, 0);
    /* Hack to improve aliasing on mobile/tablet devices */

/* .hvr-border-fade:hover,
.hvr-border-fade:focus,
.hvr-border-fade:active {
    box-shadow: inset 0 0 0 4px #2098D1, 0 0 1px rgba(0, 0, 0, 0);

} */

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

#bgs_template {
  display: none;
}

#temp_img {
  width: 250px;
  height: 350px;
  object-fit: cover;
}
</style>

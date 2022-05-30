<template>
  <article class="gal-container">
      <main class="cd-main-content">
        <Navbar></Navbar>
        <!-- cd-tab-filter-wrapper -->

        <section class="cd-gallery">
          <ul>
            <li class="mix color-1 check1 radio2 option3">
              <img src="img/jw_logo.png" alt="Image 1" />
            </li>
            <li class="mix color-2 check2 radio2 option2">
              <img src="img/jw_logo2.png" alt="Image 2" />
            </li>
            <li class="mix color-1 check3 radio3 option1">
              <img src="img/img-3.jpg" alt="Image 3" />
            </li>
            <li class="mix color-1 check3 radio2 option4">
              <img src="img/img-4.jpg" alt="Image 4" />
            </li>
            <li class="mix color-1 check1 radio3 option2">
              <img src="img/img-5.jpg" alt="Image 5" />
            </li>
            <li class="mix color-2 check2 radio3 option3">
              <img src="img/img-6.jpg" alt="Image 6" />
            </li>
            <li class="mix color-2 check2 radio2 option1">
              <img src="img/img-7.jpg" alt="Image 7" />
            </li>
            <li class="mix color-1 check1 radio3 option4">
              <img src="img/img-8.jpg" alt="Image 8" />
            </li>
            <li class="mix color-2 check1 radio2 option3">
              <img src="img/img-9.jpg" alt="Image 9" />
            </li>
            <li class="mix color-1 check3 radio2 option4">
              <img src="img/img-10.jpg" alt="Image 10" />
            </li>
            <li class="mix color-1 check3 radio3 option2">
              <img src="img/img-11.jpg" alt="Image 11" />
            </li>
            <li class="mix color-2 check1 radio3 option1">
              <img src="img/img-12.jpg" alt="Image 12" />
            </li>
            <li class="gap"></li>
            <li class="gap"></li>
            <li class="gap"></li>
          </ul>
          <div class="cd-fail-message">No results found</div>
        </section>
        <!-- cd-gallery -->

       <FilterSidebar></FilterSidebar>
      </main>
    </article>
</template>

<script setup>
import Navbar from '../components/AssetGallery/Navbar.vue';
import FilterSidebar from '../components/AssetGallery/FilterSidebar.vue';


</script>

<style scoped lang="scss">

@import "bourbon"; 
@import "bourbon-neat";

/* -------------------------------- 

Main Components 

-------------------------------- */
.gal-container{
  width: 100%;
  position: relative;
  overflow-x: hidden;
}

.cd-main-content {
  position: relative;
  min-height: 100vh;
}
.cd-main-content:after {
  content: "";
  display: table;
  clear: both;
}
.cd-main-content.is-fixed .cd-tab-filter-wrapper {
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
}
.cd-main-content.is-fixed .cd-gallery {
  padding-top: 76px;
}
.cd-main-content.is-fixed .cd-filter {
  position: fixed;
  height: 100vh;
  overflow: hidden;
}
.cd-main-content.is-fixed .cd-filter form {
  height: 100vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.cd-main-content.is-fixed .cd-filter-trigger {
  position: fixed;
}
@media only screen and (min-width: 768px) {
  .cd-main-content.is-fixed .cd-gallery {
    padding-top: 90px;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-main-content.is-fixed .cd-gallery {
    padding-top: 100px;
  }
}


</style>

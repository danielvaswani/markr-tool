<template>
  <article class="gal-container">
      <main class="cd-main-content">
        <div class="cd-tab-filter-wrapper">
          <div class="cd-tab-filter">
            <ul class="cd-filters">
              <li class="placeholder">
                <a data-type="all" href="#0">All</a>
                <!-- selected option on mobile -->
              </li>
              <li class="filter">
                <a class="selected" href="#0" data-type="all">All</a>
              </li>
              <li class="filter" data-filter=".color-1">
                <a href="#0" data-type="color-1">TAB 1</a>
              </li>
              <li class="filter" data-filter=".color-2">
                <a href="#0" data-type="color-2">TAB 2</a>
              </li>
              <li class="filter" data-filter=".color-1">
                <a href="#0" data-type="color-1">TAB 3</a>
              </li>
              <li class="filter" data-filter=".color-2">
                <a href="#0" data-type="color-2">TAB 4</a>
              </li>
              <div id="tab_templ" class="tab_template" style="display: none">
                <li class="filter">
                  <a href="#0" id="tab_name" contenteditable="true">New Tab</a>
                </li>
              </div>
              <div id="new_tab" style="display: none"></div>
              <li class="filter" onclick="addTab()">
                <i class="bi bi-plus"> Add new</i>
              </li>
            </ul>
            <!-- cd-filters -->
          </div>
          <!-- cd-tab-filter -->
        </div>
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

        <div class="cd-filter">
          <form>
            <div class="cd-filter-block">
              <h4>Search</h4>

              <div class="cd-filter-content">
                <input type="search" placeholder="Search here..." />
              </div>
              <!-- cd-filter-content -->
            </div>
            <!-- cd-filter-block -->

            <div class="cd-filter-block">
              <h4>Tags</h4>

              <ul class="cd-filter-content cd-filters list">
                <li>
                  <input
                    class="filter"
                    data-filter=".check1"
                    type="checkbox"
                    id="checkbox1"
                  />
                  <label class="checkbox-label" for="checkbox1">Regular</label>
                </li>

                <li>
                  <input
                    class="filter"
                    data-filter=".check2"
                    type="checkbox"
                    id="checkbox2"
                  />
                  <label class="checkbox-label" for="checkbox2"
                    >Minimalist</label
                  >
                </li>

                <li>
                  <input
                    class="filter"
                    data-filter=".check3"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label class="checkbox-label" for="checkbox3"
                    >Special Events</label
                  >
                </li>
              </ul>
              <!-- cd-filter-content -->
            </div>
            <!-- cd-filter-block -->

            <div class="cd-filter-block">
              <h4>Platform</h4>

              <div class="cd-filter-content">
                <div class="cd-select cd-filters">
                  <select class="filter" name="selectThis" id="selectThis">
                    <option value="">Choose an option</option>
                    <option value=".option1">Branding</option>
                    <option value=".option2">Social Media</option>
                    <option value=".option3">Press/Media</option>
                    <option value=".option4">Partner online properties</option>
                  </select>
                </div>
                <!-- cd-select -->
              </div>
              <!-- cd-filter-content -->
            </div>
            <!-- cd-filter-block -->

            <div class="cd-filter-block">
              <h4>Produced by</h4>

              <ul class="cd-filter-content cd-filters list">
                <li>
                  <input
                    class="filter"
                    data-filter=""
                    type="radio"
                    name="radioButton"
                    id="radio1"
                    checked
                  />
                  <label class="radio-label" for="radio1">Global</label>
                </li>

                <li>
                  <input
                    class="filter"
                    data-filter=".radio2"
                    type="radio"
                    name="radioButton"
                    id="radio2"
                  />
                  <label class="radio-label" for="radio2">Americas</label>
                </li>

                <li>
                  <input
                    class="filter"
                    data-filter=".radio3"
                    type="radio"
                    name="radioButton"
                    id="radio3"
                  />
                  <label class="radio-label" for="radio3">Europe</label>
                </li>

                <li>
                  <input
                    class="filter"
                    data-filter=".radio3"
                    type="radio"
                    name="radioButton"
                    id="radio4"
                  />
                  <label class="radio-label" for="radio3">Asia</label>
                </li>
              </ul>
              <!-- cd-filter-content -->
            </div>
            <!-- cd-filter-block -->
          </form>

          <a href="#0" class="cd-close">Close</a>
        </div>
        <!-- cd-filter -->

        <a href="#0" class="cd-filter-trigger">Filters</a>
      </main>
    </article>
</template>

<script setup>


</script>

<style scoped lang="scss">

@import "bourbon" ;

.gal-container{
  width: 100%;
  position: relative;
  overflow-x: hidden;
}

.cd-header {
  position: relative;
  height: 150px;
  background-color: #331d35;
}
.cd-header h1 {
  color: #ffffff;
  line-height: 150px;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 300;
}
@media only screen and (min-width: 1170px) {
  .cd-header {
    height: 180px;
  }
  .cd-header h1 {
    line-height: 180px;
  }
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
  top: 0;
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

/* -------------------------------- 

xtab-filter 

-------------------------------- */
.cd-tab-filter-wrapper {
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  z-index: 1;
}
.cd-tab-filter-wrapper:after {
  content: "";
  display: table;
  clear: both;
}

.cd-tab-filter {
  /* tabbed navigation style on mobile - dropdown */
  position: relative;
  height: 50px;
  width: 140px;
  margin: 0 auto;
  z-index: 1;
}
.cd-tab-filter::after {
  /* small arrow icon */
  content: '';
  position: absolute;
  right: 14px;
  top: 50%;
  bottom: auto;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url("../img/cd-icon-arrow.svg") no-repeat center center;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  pointer-events: none;
}
.cd-tab-filter ul {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  box-shadow: inset 0 -2px 0 #191827;
}
.cd-tab-filter li {
  display: none;
}
.cd-tab-filter li:first-child {
  /* this way the placehodler is alway visible */
  display: block;
}
.cd-tab-filter a {
  display: block;
  /* set same size of the .cd-tab-filter */
  height: 50px;
  width: 140px;
  line-height: 50px;
  padding-left: 14px;
}
.cd-tab-filter a.selected {
  background: #191827;
  color: #ffffff;
}
.cd-tab-filter.is-open::after {
  /* small arrow rotation */
  -webkit-transform: translateY(-50%) rotate(-180deg);
  -moz-transform: translateY(-50%) rotate(-180deg);
  -ms-transform: translateY(-50%) rotate(-180deg);
  -o-transform: translateY(-50%) rotate(-180deg);
  transform: translateY(-50%) rotate(-180deg);
}
.cd-tab-filter.is-open ul {
  box-shadow: inset 0 -2px 0 #191827, 0 2px 10px rgba(0, 0, 0, 0.2);
}
.cd-tab-filter.is-open ul li {
  display: block;
}
.cd-tab-filter.is-open .placeholder a {
  /* reduces the opacity of the placeholder on mobile when the menu is open */
  opacity: .4;
}
@media only screen and (min-width: 768px) {
  .cd-tab-filter {
    /* tabbed navigation style on medium devices */
    width: auto;
    cursor: auto;
  }
  .cd-tab-filter::after {
    /* hide the arrow */
    display: none;
  }
  .cd-tab-filter ul {
    background: transparent;
    position: static;
    box-shadow: none;
    text-align: center;
  }
  .cd-tab-filter li {
    display: inline-block;
  }
  .cd-tab-filter li.placeholder {
    display: none !important;
  }
  .cd-tab-filter a {
    display: inline-block;
    padding: 0 1em;
    width: auto;
    color: #9a9a9a;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.3rem;
  }
  .no-touch .cd-tab-filter a:hover {
    color: #191827;
  }
  .cd-tab-filter a.selected {
    background: transparent;
    color: #191827;
    /* create border bottom using box-shadow property */
    box-shadow: inset 0 -2px 0 #191827;
  }
  .cd-tab-filter.is-open ul li {
    display: inline-block;
  }

  .bi-plus{
    display: inline-block;
    padding: 0 1em;
    width: auto;
    color: #9a9a9a;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .no-touch .cd-tab-filter .bi-plus:hover {
    color: #191827;
  }

  #tab_name{
    display: inline-block;
    padding: 0 1em;
    width: auto;
    color: #9a9a9a;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.3rem;
  }

  .tab_template, #tab_name:hover {
    color: #191827;
  }
  
  
}
@media only screen and (min-width: 1170px) {
  .cd-tab-filter {
    /* tabbed navigation on big devices */
    width: 100%;
    float: left;
    margin: 0;
    -webkit-transition: width 0.3s;
    -moz-transition: width 0.3s;
    transition: width 0.3s;
  }
  .cd-tab-filter.filter-is-visible {
    /* reduce width when filter is visible */
    width: 80%;
  }
}

/* -------------------------------- 

xgallery 

-------------------------------- */
.cd-gallery {
  padding: 26px 5%;
  width: 100%;
}
.cd-gallery li {
  margin-bottom: 1.6em;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
  display: none;
  border: #191827 1px solid;
  width: 600px;
  object-position: center;
}
.cd-gallery li.gap {
  /* used in combination with text-align: justify to align gallery elements */
  opacity: 0;
  height: 0;
  display: inline-block;
}
.cd-gallery img {
  display: block;
  width: 100%;
  object-fit: contain;
  margin: auto;
}
.cd-gallery .cd-fail-message {
  display: none;
  text-align: center;
}
@media only screen and (min-width: 768px) {
  .cd-gallery {
    padding: 40px 3%;
  }
  .cd-gallery ul {
    text-align: justify;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .cd-gallery ul:after {
    content: "";
    display: table;
    clear: both;
  }
  .cd-gallery li {
    width: 23%;
    margin-bottom: 2em;
    background-color: #fff;
    height: 280px !important;
    cursor: pointer;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-gallery {
    padding: 50px 2%;
    float: left;
    -webkit-transition: width 0.3s;
    -moz-transition: width 0.3s;
    transition: width 0.3s;
    position: relative;
    left: 16%;
  }
  .cd-gallery li {
    width: 23%;
    height: 335px !important;
    cursor: pointer;
  }
  .cd-gallery.filter-is-visible {
    /* reduce width when filter is visible */
    width: 80%;
  }
}

/* -------------------------------- 

xfilter 

-------------------------------- */
.cd-filter {
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: #ffffff;
  box-shadow: 4px 4px 20px transparent;
  z-index: 2;
  /* Force Hardware Acceleration in WebKit */
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateX(400%);
  -moz-transform: translateX(400%);
  -ms-transform: translateX(400%);
  -o-transform: translateX(400%);
  transform: translateX(500%);
  -webkit-transition: -webkit-transform 0.3s, box-shadow 0.3s;
  -moz-transition: -moz-transform 0.3s, box-shadow 0.3s;
  transition: transform 0.3s, box-shadow 0.3s;
}
.cd-filter::before {
  /* top colored bar */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: #191827;
  z-index: 2;
}
.cd-filter form {
  padding: 70px 20px;
}
.cd-filter .cd-close {
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  line-height: 50px;
  width: 60px;
  color: #ffffff;
  font-size: 1.3rem;
  text-align: center;
  background: #211f33;
  opacity: 0;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  transition: opacity 0.3s;
  z-index: 3;
}
.no-touch .cd-filter .cd-close:hover {
  background: #32255f;
}
.cd-filter.filter-is-visible {
  -webkit-transform: translateX(400%);
  -moz-transform: translateX(400%);
  -ms-transform: translateX(400%);
  -o-transform: translateX(400%);
  transform: translateX(400%);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
}
.cd-filter.filter-is-visible .cd-close {
  opacity: 1;
}
@media only screen and (min-width: 1170px) {
  .cd-filter {
    width: 20%;
  }
  .cd-filter form {
    padding: 70px 10%;
  }
}

.cd-filter-trigger {
  position: absolute;
  top: 0;
  text-align: end;
  height: 50px;
  line-height: 50px;
  width: 60px;
  /* image replacement */
  overflow: hidden;
  text-indent: 100%;
  color: transparent;
  white-space: nowrap;
  background: transparent url("../img/cd-icon-filter.svg") no-repeat center center;
  z-index: 3;
}
.cd-filter-trigger.filter-is-visible {
  pointer-events: none;
}
@media only screen and (min-width: 1170px) {
  .cd-filter-trigger {
    width: auto;
    right: 13%;
    text-align: end;
    text-indent: 0;
    color: #9a9a9a;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 700;
    padding-left: 24px;
    background-position: left center;
    -webkit-transition: color 0.3s;
    -moz-transition: color 0.3s;
    transition: color 0.3s;
  }
  .no-touch .cd-filter-trigger:hover {
    color: #e9baed;
  }
  .cd-filter-trigger.filter-is-visible, .cd-filter-trigger.filter-is-visible:hover {
    color: #ffffff;
  }
}

/* -------------------------------- 

xcustom form elements 

-------------------------------- */
.cd-filter-block {
  margin-bottom: 1.6em;
}
.cd-filter-block h4 {
  /* filter block title */
  position: relative;
  margin-bottom: .2em;
  padding: 10px 0 10px 20px;
  color: #9a9a9a;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.3rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}
.no-touch .cd-filter-block h4:hover {
  color: #191827;
}
.cd-filter-block h4::before {
  /* arrow */
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 16px;
  height: 16px;
  background: url("../img/cd-icon-arrow.svg") no-repeat center center;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: -webkit-transform 0.3s;
  -moz-transition: -moz-transform 0.3s;
  transition: transform 0.3s;
}
.cd-filter-block h4.closed::before {
  -webkit-transform: translateY(-50%) rotate(-90deg);
  -moz-transform: translateY(-50%) rotate(-90deg);
  -ms-transform: translateY(-50%) rotate(-90deg);
  -o-transform: translateY(-50%) rotate(-90deg);
  transform: translateY(-50%) rotate(-90deg);
}
.cd-filter-block input, .cd-filter-block select,
.cd-filter-block .radio-label::before,
.cd-filter-block .checkbox-label::before {
  /* shared style for input elements */
  font-family: "Open Sans", sans-serif;
  border-radius: 0;
  background-color: #ffffff;
  border: 2px solid #e6e6e6;
}
.cd-filter-block input[type='search'],
.cd-filter-block input[type='text'],
.cd-filter-block select {
  width: 100%;
  padding: .8em;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  box-shadow: none;
}
.cd-filter-block input[type='search']:focus,
.cd-filter-block input[type='text']:focus,
.cd-filter-block select:focus {
  outline: none;
  background-color: #ffffff;
  border-color: #e9baed;
}
.cd-filter-block input[type='search'] {
  /* custom style for the search element */
  border-color: transparent;
  background-color: #e6e6e6;
  /* prevent jump - ios devices */
  font-size: 1.6rem !important;
}
.cd-filter-block input[type='search']::-webkit-search-cancel-button {
  display: none;
}
.cd-filter-block .cd-select {
  /* select element wrapper */
  position: relative;
}
.cd-filter-block .cd-select::after {
  /* switcher arrow for select element */
  content: '';
  position: absolute;
  z-index: 1;
  right: 14px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  display: block;
  width: 16px;
  height: 16px;
  background: url("../img/cd-icon-arrow.svg") no-repeat center center;
  pointer-events: none;
}
.cd-filter-block select {
  cursor: pointer;
  font-size: 1.4rem;
}
.cd-filter-block select::-ms-expand {
  display: none;
}
.cd-filter-block .list li {
  position: relative;
  margin-bottom: .8em;
}
.cd-filter-block .list li:last-of-type {
  margin-bottom: 0;
}
.cd-filter-block input[type=radio],
.cd-filter-block input[type=checkbox] {
  /* hide original check and radio buttons */
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: 2;
}
.cd-filter-block .checkbox-label,
.cd-filter-block .radio-label {
  padding-left: 24px;
  font-size: 1.4rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.cd-filter-block .checkbox-label::before, .cd-filter-block .checkbox-label::after,
.cd-filter-block .radio-label::before,
.cd-filter-block .radio-label::after {
  /* custom radio and check boxes */
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}
.cd-filter-block .checkbox-label::before,
.cd-filter-block .radio-label::before {
  width: 16px;
  height: 16px;
  left: 0;
}
.cd-filter-block .checkbox-label::after,
.cd-filter-block .radio-label::after {
  /* check mark - hidden */
  display: none;
}
.cd-filter-block .checkbox-label::after {
  /* check mark style for check boxes */
  width: 16px;
  height: 16px;
  background: url("../img/cd-icon-check.svg") no-repeat center center;
}
.cd-filter-block .radio-label::before,
.cd-filter-block .radio-label::after {
  border-radius: 50%;
}
.cd-filter-block .radio-label::after {
  /* check mark style for radio buttons */
  width: 6px;
  height: 6px;
  background-color: #ffffff;
  left: 5px;
}
.cd-filter-block input[type=radio]:checked + label::before,
.cd-filter-block input[type=checkbox]:checked + label::before {
  border-color: #e9baed;
  background-color: #e9baed;
}
.cd-filter-block input[type=radio]:checked + label::after,
.cd-filter-block input[type=checkbox]:checked + label::after {
  display: block;
}

@-moz-document url-prefix() {
  /* hide custom arrow on Firefox - select element */
  .cd-filter-block .cd-select::after {
    display: none;
  }
}

////////

// breakpoints
   
$S:     480px;   
$M:     768px;     
$L:     1170px;   

// media queries

@mixin MQ($canvas) {
  @if $canvas == S {
   @media only screen and (min-width: $S) { @content; } 
  }
  @else if $canvas == M {
   @media only screen and (min-width: $M) { @content; } 
  }
  @else if $canvas == L {
   @media only screen and (min-width: $L) { @content; } 
  }
}

// center vertically and/or horizontally an absolute positioned element

@mixin center($xy:xy) {
  @if $xy == xy {
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    @include transform(translateX(-50%) translateY(-50%));
  }
  @else if $xy == x {
    left: 50%;
    right: auto;
    @include transform(translateX(-50%));
  }
  @else if $xy == y {
    top: 50%;
    bottom: auto;
    @include transform(translateY(-50%));
  }
}

// colors

$color-1: #331d35; // Bleached Cedar
$color-2: #41307c; // Minsk
$color-3: #ffffff; // White
$color-4: #9a9a9a; // Grey

// fonts 

$primary-font: 'Open Sans', sans-serif;

// tab-filter size

$tab-filter-height: 50px;

.cd-header {
	position: relative;
	height: 150px;
	background-color: $color-1;

	h1 {
		color: $color-3;
		line-height: 150px;
		text-align: center;
		font-size: 2.4rem;
		font-weight: 300;
	}

	@include MQ(L) {
		height: 180px;

		h1 {
			line-height: 180px;
		}
	}
}

.cd-main-content {
	position: relative;
	min-height: 100vh;
	// @include clearfix;

	&.is-fixed {
		.cd-tab-filter-wrapper {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
		}

		.cd-gallery {
			padding-top: 26px+$tab-filter-height;
		}

		.cd-filter {
			position: fixed;
			height: 100vh;
			overflow: hidden;

			form {
				height: 100vh;
				overflow: auto;
				-webkit-overflow-scrolling: touch;
			}
		}

		.cd-filter-trigger {
			position: fixed;
		}

		@include MQ(M) {
			.cd-gallery {
				padding-top: 40px+$tab-filter-height;
			}
		}

		@include MQ(L) {
			.cd-gallery {
				padding-top: 50px+$tab-filter-height;
			}
		}
	}
}

/* -------------------------------- 

xtab-filter 

-------------------------------- */

.cd-tab-filter-wrapper {
	background-color: $color-3;
	box-shadow: 0 1px 1px rgba(#000, .08);
	z-index: 1;
	// @include clearfix;
}

.cd-tab-filter {
	/* tabbed navigation style on mobile - dropdown */
	position: relative;
	height: $tab-filter-height;
	width: 140px;
	margin: 0 auto;
	z-index: 1;

	&::after { 
		/* small arrow icon */
		content:'';
		position: absolute;
		right: 14px;
		@include center(y); // see partials > mixins

		display: inline-block;
		width: 16px;
		height: 16px;

		background: url('../img/cd-icon-arrow.svg') no-repeat center center;

		@include transition(all .3s);
		pointer-events: none;
	}

	ul {
		position: absolute;
		top: 0;
		left: 0;

		background-color: $color-3;
		box-shadow: inset 0 -2px 0 $color-2;
	}

	li {
		display: none; 

		&:first-child {
			/* this way the placehodler is alway visible */
			display: block; 
		}
	}

	a {
		display: block;
		/* set same size of the .cd-tab-filter */
		height: $tab-filter-height;
		width: 140px;
		line-height: $tab-filter-height;
		padding-left: 14px;

		&.selected {
			background: $color-2;
			color: $color-3;
		}
	}

	&.is-open {

		&::after {
			/* small arrow rotation */
			@include transform(translateY(-50%) rotate(-180deg));  
		}

		ul {
			box-shadow: inset 0 -2px 0 $color-2, 0 2px 10px rgba(#000, .2);
		}

		ul li {
			display: block;
		}

		.placeholder a {
			/* reduces the opacity of the placeholder on mobile when the menu is open */
			opacity: .4; 
		}
	}

	@include MQ(M) {
		/* tabbed navigation style on medium devices */
		width: auto;
		cursor: auto;

		&::after {
			/* hide the arrow */
			display: none;
		}

		ul {
			background: transparent;
			position: static;
			box-shadow: none;
			text-align: center;
		}

		li {
			display: inline-block;

			&.placeholder {
				display: none !important; 
			}
		}

		a {
			display: inline-block;
			padding: 0 1em;
			width: auto;

			color: $color-4;
			text-transform: uppercase;
			font-weight: 700;
			font-size: 1.3rem;

			.no-touch &:hover {
				color: $color-2;
			}

			&.selected {
				background: transparent;
				color: $color-2;
				/* create border bottom using box-shadow property */
				box-shadow: inset 0 -2px 0 $color-2;
			}
		}

		&.is-open {
			ul li {
				display: inline-block;
			}
		}
	}

	@include MQ(L) {
		/* tabbed navigation on big devices */
		width: 100%;
		float: right;
		margin: 0;
		@include transition(width .3s);

		&.filter-is-visible {
			/* reduce width when filter is visible */
			width: 80%;
		}
	}
}

/* -------------------------------- 

xgallery 

-------------------------------- */

.cd-gallery {
	padding: 26px 5%;
	width: 100%;

	li {
		margin-bottom: 1.6em;
		box-shadow: 0 1px 4px rgba(#000, .1);
		display: none;

		&.gap {
			/* used in combination with text-align: justify to align gallery elements */
			opacity: 0;
			height: 0;
			display: inline-block;
		}
	}

	img {
		display: block;
		width: 100%;
	}

	.cd-fail-message {
		display: none;
		text-align: center;
	}

	@include MQ(M) {
		padding: 40px 3%;

		ul {
			// @include clearfix;
			text-align: justify;
		}

		li {
			width: 48%;
			margin-bottom: 2em;
		}
	}

	@include MQ(L) {
		padding: 50px 2%;
		float: right;
		@include transition(width .3s);

		li { 
			width: 23%;
		}

		&.filter-is-visible {
			/* reduce width when filter is visible */
			width: 80%;
		}
	}
}

/* -------------------------------- 

xfilter 

-------------------------------- */

.cd-filter {
	position: absolute;
	top: 0;
	left: 0;
	width: 280px;
	height: 100%;
	background: $color-3;
	box-shadow: 4px 4px 20px rgba(#000, 0);
	z-index: 2;

	/* Force Hardware Acceleration in WebKit */
	@include transform(translateZ(0));
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;

	@include transform(translateX(-100%));
	@include transition(transform .3s, box-shadow .3s);

	&::before {
		/* top colored bar */
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: $tab-filter-height;
		width: 100%;
		background-color: $color-2;
		z-index: 2;
	}

	form {
		padding: $tab-filter-height+20px 20px;
	} 

	.cd-close {
		position: absolute;
		top: 0;
		right: 0;
		height: $tab-filter-height;
		line-height: $tab-filter-height;
		width: 60px;

		color: $color-3;
		font-size: 1.3rem;
		text-align: center;

		background: darken($color-2, 5%);
		opacity: 0;

		@include transition(opacity .3s);
		z-index: 3;

		.no-touch &:hover {
			background: darken($color-2, 8%);
		}
	}

	&.filter-is-visible {
		@include transform(translateX(0));
		box-shadow: 4px 4px 20px rgba(#000, .2);

		.cd-close {
			opacity: 1;
		}
	}

	@include MQ(L) {
		width: 20%;

		form {
			padding: $tab-filter-height+20px 10%;
		}
	}
}

.cd-filter-trigger {
	position: absolute;
	top: 0;
	left: 0;
	height: $tab-filter-height;
	line-height: $tab-filter-height;
	width: 60px;

	/* image replacement */
	overflow: hidden;
	text-indent: 100%;
	color: transparent;
	white-space: nowrap;
	background: transparent url('../img/cd-icon-filter.svg') no-repeat center center;

	z-index: 3;

	&.filter-is-visible {
		pointer-events: none;
	}

	@include MQ(L) {
		width: auto;
		left: 2%;

		text-indent: 0;
		color: $color-4;
		text-transform: uppercase;
		font-size: 1.3rem;
		font-weight: 700;

		padding-left: 24px;
		background-position: left center;

		@include transition(color .3s);

		.no-touch &:hover {
			color: $color-2;
		}

		&.filter-is-visible,
		&.filter-is-visible:hover {
			color: $color-3;
		}
	}
}

/* -------------------------------- 

xcustom form elements 

-------------------------------- */

.cd-filter-block {
	margin-bottom: 1.6em;

	h4 {
		/* filter block title */
		position: relative;
		margin-bottom: .2em;
		padding: 10px 0 10px 20px;

		color: $color-4;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 1.3rem;

		@include user-select(none);
		cursor: pointer;

		.no-touch &:hover {
			color: $color-2;
		}

		&::before {
			/* arrow */
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			width: 16px;
			height: 16px;
			background: url('../img/cd-icon-arrow.svg') no-repeat center center;

			@include transform(translateY(-50%));
			@include transition(transform .3s);
		}

		&.closed::before {
			@include transform(translateY(-50%) rotate(-90deg));
		}
	}

	input, select,
	.radio-label::before,
	.checkbox-label::before {
		/* shared style for input elements */
		font-family: $primary-font;
		border-radius: 0;
		background-color: $color-3;
		border: 2px solid darken($color-3, 10%);
	}

	input[type='search'],
	input[type='text'],
	select {
		width: 100%;
		padding: .8em;
		@include appearance(none);
		box-shadow: none;

		&:focus {
			outline: none;
			background-color: $color-3;
			border-color: $color-2;
		}
	}

	input[type='search'] {
		/* custom style for the search element */
		border-color: transparent;
		background-color: darken($color-3, 10%);
		/* prevent jump - ios devices */
		font-size: 1.6rem !important;
	}

	input[type='search']::-webkit-search-cancel-button {
		display: none;
	}

	.cd-select {
		/* select element wrapper */
		position: relative;
	}

	.cd-select::after {
		/* switcher arrow for select element */
		content: '';
		position: absolute;
		z-index: 1;
		right: 14px;
		top: 50%;
		@include transform(translateY(-50%));

		display: block;
		width: 16px;
		height: 16px;

		background: url('../img/cd-icon-arrow.svg') no-repeat center center;
		pointer-events: none;
	}

	select {
		cursor: pointer;
		font-size: 1.4rem;
	}

	select::-ms-expand {
      display: none;
	}

	.list li {
		position: relative;
		margin-bottom: .8em;

		&:last-of-type {
			margin-bottom: 0;
		}
	}

	input[type=radio],
	input[type=checkbox] {
		/* hide original check and radio buttons */
		position: absolute;
		left: 0;
		top: 0;
		margin: 0;
		padding: 0;
		opacity: 0;
		z-index: 2;
	}

	.checkbox-label,
	.radio-label {
		padding-left: 24px;
		font-size: 1.4rem;
		@include user-select(none);

		&::before,
		&::after {
			/* custom radio and check boxes */
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			@include transform(translateY(-50%));
		}

		&::before {
			width: 16px;
			height: 16px;
			left: 0;
		}

		&::after {
			/* check mark - hidden */
			display: none;
		}
	}

	.checkbox-label::after {
		/* check mark style for check boxes */
		width: 16px;
		height: 16px;
		background: url('../assets/images/cd-icon-check.svg') no-repeat center center;
	}

	.radio-label::before,
	.radio-label::after {
		border-radius: 50%;
	}

	.radio-label::after {
		/* check mark style for radio buttons */
		width: 6px;
		height: 6px;
		background-color: $color-3;
		left: 5px;
	}

	input[type=radio]:checked + label::before,
	input[type=checkbox]:checked + label::before {
		border-color: $color-2;
		background-color: $color-2;
	}

	input[type=radio]:checked + label::after,
	input[type=checkbox]:checked + label::after {
		display: block;
	}
}

</style>

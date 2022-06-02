<template>
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
</template>

<script setup>

</script>

<style scoped lang="scss">


@import "bourbon"; 
@import "bourbon-neat";

/* -------------------------------- 

Primary style

-------------------------------- */


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
    transform:translateY(-50%);
  }
}


// colors

$color-1: #331d35; // Bleached Cedar
$color-2: #41307c; // Minsk
$color-3: #ffffff; // White
$color-4: #9a9a9a; // Grey


// tab-filter size

$tab-filter-height: 50px;

a {
	color: $color-2;
	text-decoration: none;
}


/* -------------------------------- 

xfilter 

-------------------------------- */
.cd-filter {
  position: absolute;
  top: 90px;
  left: 0;
  width: 280px;
  background: #ffffff;
  box-shadow: 4px 4px 20px transparent;
  z-index: 1;
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
  /* z-index: 2; */
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
  /* z-index: 3; */
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
  position: fixed;
  top: 90px;
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

</style>
<template>
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

xtab-filter 

-------------------------------- */
.cd-tab-filter-wrapper {
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 8);
  position: fixed;
  margin-top: 90px;
  width: 100%;
  z-index: 2;
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

Main Components 

-------------------------------- */

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
	@include clearfix;

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
	@include clearfix;
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

		transition:all .3s;
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
			transform: (translateY(-50%) rotate(-180deg));  
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
		transition:width .3s;

		&.filter-is-visible {
			/* reduce width when filter is visible */
			width: 80%;
		}
	}
}

</style>
<template>
  <section class="cd-gallery">
          <ul>
            <li class="mix color-1 check1 radio2 option3">
              <img src="../../assets/images/jw_logo.png" alt="Image 1" />
            </li>
            <li class="mix color-2 check2 radio2 option2">
              <img src="../../assets/images/jw_logo2.png" alt="Image 2" />
            </li>
            <li class="mix color-1 check3 radio3 option1">
              <img src="../../assets/images/img-3.jpg" alt="Image 3" />
            </li>
            <li class="mix color-1 check3 radio2 option4">
              <img src="../../assets/images/img-4.jpg" alt="Image 4" />
            </li>
            <li class="mix color-1 check1 radio3 option2">
              <img src="../../assets/images/img-5.jpg" alt="Image 5" />
            </li>
            <li class="mix color-2 check2 radio3 option3">
              <img src="../../assets/images/img-6.jpg" alt="Image 6" />
            </li>
            <li class="mix color-2 check2 radio2 option1">
              <img src="../../assets/images/img-7.jpg" alt="Image 7" />
            </li>
            <li class="mix color-1 check1 radio3 option4">
              <img src="../../assets/images/img-8.jpg" alt="Image 8" />
            </li>
            <li class="mix color-2 check1 radio2 option3">
              <img src="../../assets/images/img-9.jpg" alt="Image 9" />
            </li>
            <li class="mix color-1 check3 radio2 option4">
              <img src="../../assets/images/img-10.jpg" alt="Image 10" />
            </li>
            <li class="mix color-1 check3 radio3 option2">
              <img src="../../assets/images/img-11.jpg" alt="Image 11" />
            </li>
            <li class="mix color-2 check1 radio3 option1">
              <img src="../../assets/images/img-12.jpg" alt="Image 12" />
            </li>
            <li class="gap"></li>
            <li class="gap"></li>
            <li class="gap"></li>
          </ul>
          <div class="cd-fail-message">No results found</div>
        </section>
        <!-- cd-gallery -->
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

xgallery 

-------------------------------- */
.cd-gallery {
  padding: 26px 5%;
  width: 100%;
  margin-top: 110px;
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

xgallery 

-------------------------------- */

.cd-gallery {
	padding: 26px 5%;
	width: 100%;

	li {
		margin-bottom: 1.6em;
		box-shadow: 0 1px 4px rgba(#000, .1);
		display: block;

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
			@include clearfix;
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
		transition:width .3s;

		li { 
			width: 23%;
		}

		&.filter-is-visible {
			/* reduce width when filter is visible */
			width: 80%;
		}
	}
}

</style>
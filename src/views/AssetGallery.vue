<template>
  <article class="gal-container">
      <main class="cd-main-content">
        <!-- cd-tab-filter-wrapper -->
        <Navbar></Navbar>
        
        <GalleryContainer></GalleryContainer>
        

       <FilterSidebar></FilterSidebar>
      </main>
    </article>
</template>

<script setup>
import Navbar from '../components/AssetGallery/Navbar.vue';
import FilterSidebar from '../components/AssetGallery/FilterSidebar.vue';
import Container from '../components/BgsGallery/Container.vue';
import GalleryContainer from '../components/AssetGallery/GalleryContainer.vue';

</script>

<style scoped lang="scss">

@import "bourbon"; 
@import "bourbon-neat";


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

<template>
  <!--User Navbar-->
  <header v-if="$route.params.bgsName !== undefined">
    <article id="user-header">
      <div style="display: flex">
        <div class="brand-title">
          <img src="images/stuurmen.jpg" alt="" />
        </div>
      </div>

      <UserProfile></UserProfile>
    </article>
  </header>
</template>

<script setup>
import UserProfile from "../UserProfile.vue";
</script>

<style scoped lang="scss">
/* width */

::-webkit-scrollbar {
  width: 10px;
}

/* Track */

::-webkit-scrollbar-track {
  background: #191827;
}

/* Handle */

::-webkit-scrollbar-thumb {
  background: #e9baedaf;
}

/* Handle on hover */

::-webkit-scrollbar-thumb {
  :hover {
    background: #e9baed;
  }
}
/*/////////USER ICON MENU/////////*/

$color_1: #e9baed;
$color_2: #fff;
$font-family_1: Gilroy, Extrabold;
$background-color_1: #191827;
$border-color_1: transparent transparent #e9baed;

article {
  display: flex;
  height: 90px;
  background-color: $background-color_1;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  -moz-box-shadow: 0 0 4px black;
  -webkit-box-shadow: 0 0 4px black;
  box-shadow: 0 0 4px black;
  border-bottom: #191827 1px solid;
}

.brand-title {
  vertical-align: middle;
  text-align: center;
  align-self: center;
  font-family: $font-family_1;
  color: $color_1;
  gap: 10px;
  display: flex;
  width: fit-content;
  margin-left: 260px;
  img {
    border: #e9baed 3px solid;
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 20%;
  }
}
.user_bar {
  border-radius: 10%;
  position: relative;
  text-align: center;
  top: 1%;
  display: inline-flex;
  gap: 8px;
  padding: 10px;
  align-self: center;
  li {
    align-self: center;
  }
  .bi {
    color: $color_2;
    align-self: baseline;
    vertical-align: middle;
  }
}
.user_icon {
  align-self: flex-end;
  width: 40px;
  height: auto;
  img {
    width: 40px;
    cursor: pointer;
  }
}
.user_name {
  cursor: pointer;
  display: inline-flex;
  gap: 2px;
  align-items: center;
  position: relative;
  a {
    align-self: center;
    text-decoration: none;
    color: $color_2;
    padding: 5px;
  }
  :hover {
    .bi-caret-down {
      ::before {
        content: url(../images/caret-down-fill.svg);
      }
    }
  }
}
.user-dropdown {
  ::before {
    -moz-border-color: none;
    border-color: $border-color_1;
    border-image: none;
    border-style: solid;
    border-width: 5px;
    content: "";
    display: block;
    height: 0;
    opacity: 1;
    width: 0;
    position: absolute;
    top: -12px;
    left: auto;
    right: 20px;
  }
  display: none;
  padding-top: 5px;
  padding-bottom: 15px;
  position: absolute;
  z-index: 1;
  top: 40px;
  background-color: $background-color_1;
  padding: 10px;
  right: -12px;
  -moz-box-shadow: 0 0 4px black;
  -webkit-box-shadow: 0 0 4px black;
  box-shadow: 0 0 4px black;
  border-top: 3px solid #e9baed;
  z-index: 5;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
$color_1: #fff;
$color_2: #e9baed;
$background-color_1: #5b5594;

.show-user {
  display: block;
}
.dpdw-menu {
  position: relative;
  padding: 0;
  color: $color_1;
  letter-spacing: 0.3px;
  width: max-content;
}
.content-list {
  .list-wrapper {
    margin: 0;
    padding: 0;
    > li {
      padding-top: 5px;
      padding-bottom: 8px;
      list-style: none;
      position: relative;
      text-align: left;
      width: 100%;
      > a {
        display: block;
      }
      ::after {
        clear: both;
        content: " ";
        display: table;
      }
      ::before {
        content: " ";
        display: table;
      }
    }
  }
  .menu-icon {
    display: block;
    float: left;
    width: 16px;
    text-align: center;
    font-size: 14px;
    .bi {
      color: $color_2;
    }
  }
  .menu-text {
    display: block;
    margin-left: 26px;
    text-transform: none;
    padding-right: 15px;
  }
}
.content-menu {
  .list-wrapper {
    li {
      border-bottom: none;
      padding-top: 3px;
      padding-bottom: 5px;
      :hover {
        background-color: $background-color_1;
      }
    }
  }
}
#tasks {
  border-bottom: 1px solid #eee;
}
#logout {
  border-bottom: 1px solid #eee;
}
</style>

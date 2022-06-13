<template>
  <div class="dpdw-menu">
                <div class="content-list">
                  <ul class="list-wrapper">
                    <li>
                      <div class="menu-icon">
                        <font-awesome-icon class="bi" icon="user"/>
                      </div>
                      <div class="menu-text">Edit Profile</div>
                    </li>
                    <li id="tasks">
                      <div class="menu-icon">
                        <font-awesome-icon class="bi" icon="list-check"/>
                      </div>
                      <div class="menu-text">Tasks</div>
                    </li>
                    <li>
                      <div class="menu-icon">
                        <font-awesome-icon class="bi" icon="lock"/>
                      </div>
                      <div class="menu-text">Privacy</div>
                    </li>
                    <li>
                      <div class="menu-icon">
                        <font-awesome-icon class="bi" icon="gear"/>
                      </div>
                      <div class="menu-text">Settings</div>
                    </li>
                    <li id="logout">
                      <div class="menu-icon">
                        <font-awesome-icon class="bi" icon="arrow-right-from-bracket"/>
                      </div>
                      <div class="menu-text">Log Out</div>
                    </li>

                    <li>
                      <div class="menu-icon">
                        <font-awesome-icon class="bi" icon="circle-question"/>
                      </div>
                      <div class="menu-text">Help</div>
                    </li>

                    <li>
                      <div class="menu-icon">
                        <font-awesome-icon class="bi" icon="triangle-exclamation"/>
                      </div>
                      <div ref="userDropdown" class="menu-text">Report a problem</div>
                    </li>
                  </ul>
                </div>
              </div>
</template>

<script setup>

import { BIconBootstrap } from 'bootstrap-icons-vue';

import { faUser } from "@fortawesome/free-solid-svg-icons";

</script>

<style scoped lang="scss">


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
	letter-spacing: .3px;
	width: 200px;
}
.content-list {
	.list-wrapper {
		margin: 0;
		padding: 0;
        position: relative;
        right: 10px;
		>li {
			padding-top: 5px;
			padding-bottom: 8px;
			list-style: none;
			position: relative;
            cursor: pointer !important;
			text-align: left;
			width: 100% !important;
			>a {
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
        li:hover{
            background-color: #32304d;
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
      width: 200px !important;
			padding-top: 3px;
			padding-bottom: 5px;
			:hover {
				background-color: $background-color_1;
			}
		}
	}
}
#tasks {
	border-bottom: 1px solid #EEE;
}
#logout {
	border-bottom: 1px solid #EEE;
}


</style>
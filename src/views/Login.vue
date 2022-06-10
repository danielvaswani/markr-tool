<template>
<div class="object">
<div id="circle"> <div id="purple"></div></div>
<img class="logoleft" src="../assets/images/Markr_w.png">  
</div>
<div id="objectcontainer">
  <div class="pp"></div>
<div class="container">
<div class="form">
  <div class="thumbnail"><img src="../assets/images/Markr_w.png"/></div>
  <form class="login-form">
        <input type="text" placeholder="Enter user name"/>
    <input type="password" placeholder="Enter password"/>
    <button>Log in</button>
    <p class="message">Forgot your password? <br> <a href="#">Recover it</a></p>
  </form>
</div>
</div>
</div>

</template>



<script setup></script>

<style scoped>

.object{
  position: relative;
  background-color:#e9baed;

}
.logoleft{
  position: absolute;
  width: 30%;
  margin-top: -450px;
  margin-left: 50px;
}

.pp{
  width: 10px;
  visibility: hidden;
}

.form {
  z-index: 1;
  background: #191827;
  position: relative;
  max-width: 400px;
  margin: 0 auto 100px;
  padding: 30px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  text-align: center;
-webkit-box-shadow: 0px 0px 37px 0px rgba(25, 24, 39, 1);
-moz-box-shadow: 0px 0px 37px 0px rgba(25, 24, 39, 1);
box-shadow: 0px 0px 37px 0px rgba(25, 24, 39, 1);
}

.thumbnail img{
  padding-left: 30px;
  width: 60%;

}
.form input {
  outline: 0;
  background: #ffffff;
  width: 700%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
 text-align: center;
}
.form button {
  outline: 0;
  background: #f3c0f3;
  width: 40%;
  border: 0;
  padding: 15px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  color: #FFFFFF;
  font-size: 18px;
  transition: all 0.3 ease;
  cursor: pointer;
  font-weight: bold;
  -webkit-box-shadow: 0px 0px 52px -17px rgba(243, 192, 243, 1);
-moz-box-shadow: 0px 0px 52px -17px rgba(243, 192, 243, 1);
box-shadow: 0px 0px 52px -17px rgba(243, 192, 243, 1);

  mask-size: 3000% 100%;
  border: none;
  color: #ffff;
  cursor: pointer;
  
}
 button:hover {
  -webkit-animation: ani 0.7s steps(29) forwards;
  animation: ani 0.7s steps(29) forwards;
}

@-webkit-keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}
@keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}
@-webkit-keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }


}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #f3c0f3;
  text-decoration: none;
}

.container {
  max-width: 600px;
    margin-top: -500px; /* half of you height */
padding-left: 50%;
}



/* END Form */

#circle {
  position: relative;
      width: 100%;
      height: 750px;
      margin-bottom: 0PX;
      margin-top: -10PX;
      margin-left:  -10px;
      shape-outside: circle(50% at 30%);
      clip-path: circle(50% at 0%);
      background: #191827;


    }


.form {
z-index: 1;
  background: #191827;
  position: relative;
  max-width: 600px;
    margin: 0 auto 100px;
    padding: 30px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  text-align: center;
-webkit-box-shadow: 0px 0px 37px 0px rgba(25, 24, 39, 1);
-moz-box-shadow: 0px 0px 37px 0px rgba(25, 24, 39, 1);
box-shadow: 0px 0px 37px 0px rgba(25, 24, 39, 1);
  
}

.thumbnail img{
  padding-left: 30px;
  width: 60%;

}
.form input {
  outline: 0;
  background: #ffffff;
  width: 70%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
 text-align: center;
}
.form button {
  outline: 0;
  background: #f3c0f3;
  width: 40%;
  border: 0;
  padding: 15px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  color: #FFFFFF;
  font-size: 18px;
  transition: all 0.3 ease;
  cursor: pointer;
  font-weight: bold;
  -webkit-box-shadow: 0px 0px 52px -17px rgba(243, 192, 243, 1);
-moz-box-shadow: 0px 0px 52px -17px rgba(243, 192, 243, 1);
box-shadow: 0px 0px 52px -17px rgba(243, 192, 243, 1);

  mask-size: 3000% 100%;
  border: none;
  color: #ffff;
  cursor: pointer;
  
}
 button:hover {
  -webkit-animation: ani 0.7s steps(29) forwards;
  animation: ani 0.7s steps(29) forwards;
}

@-webkit-keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}
@keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}
@-webkit-keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }


}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #f3c0f3;
  text-decoration: none;
}

.container {
  max-width: 1500px;
    margin-top: -500px; /* half of you height */
padding-left: 50%;
}



/* END Form */

#circle {
  position: relative;
      width: 100%;
      height: 750px;
      margin-bottom: 0PX;
      margin-top: -10PX;
      margin-left:  -10px;
      shape-outside: circle(50% at 30%);
      clip-path: circle(50% at 0%);
      background: #191827;


    }

</style>

<template>
<div class="user-container">
    <div class="circle">
        <h1>Welcome<span>.</span> </h1>
    </div>
    <div class="form">
        <h3>My Account</h3>
        <h4>User information</h4>
        <form>
            <div>
                <label for="uname">User name</label>
                <input type="text" id="uname" name="username" placeholder="Your user name..">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your first name..">
            </div>
            <div>
                <label for="email">Email address</label>
                <input type="text" id="email" name="email" placeholder="Email Adress..">

                <label for="lname">Last Name</label>
                <input type="text" id="name" name="lname" placeholder="Your last name..">
            </div>
        </form>
        <h4>Password</h4>
        <form>
            <div>
                <label for="password">Password</label>
                <input type="text" id="password" name="password" placeholder="Your Password..">
            </div>
            <div>
                <label for="password">Repeat password</label>
                <input type="text" id="password" name="password" placeholder="Repeat password..">
            </div>
        </form>
    </div>
    <div class="companyposition">
        <select id="Job" name="Job">
            <option value="CEO">CEO</option>
            <option value="CEO">Director</option>
            <option value="CEO">Designer</option>
            <option value="CEO">Programer</option>
            <option value="CEO">Manager</option>
            <option value="CEO">Guest</option>
        </select>
    </div>
    <div class="user">
        <img src="../assets/images/icon.png" alt="" height="80px" width="80px">
        <h4>Company Position</h4>
    </div>
    <div>
        <form action="">
            <input type="submit" value="Submit" class="submit">
        </form>
    </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">


.user-container{
    widows: 100%;
    background-color: #e189d9;
    overflow: hidden;
    height: 100%;
}

.circle {
    position: absolute;
    width: 800px;
    height: 800px;
    line-height: 50px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    text-align: right;
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 700;
    background-color: #0d071c;
    right: 75%;
}

h1 {
    text-align: center;
    position: relative;
    left: 28%;
    top: 43%;
    color: white;
    font-family: Gilroy ExtraBold;
}

h3 {
    position: relative;
    right: 19%;
    text-align: left;
    color: white;
    font-family: Gilroy ExtraBold;
}

h4 {
    position: relative;
    right: 19%;
    text-align: left;
    color: grey;
    font-family: Gilroy ExtraBold;
}

input[type=text]
{
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border-radius: 4px;
box-sizing: border-box;
}

select {
    padding: 15px;
    border-radius: 25px;
    -webkit-transition: 0.5s;
    font-size: 16px;
    font-family: Gilroy Light;
    margin-right: 2%;
}

label {
    color: #e189d9;
    font-family: Gilroy ExtraBold;
}

form {
    position: relative;
    right: 20%;
    display: flex;
    gap: 15px;
}

input {
    border-radius: 25px;
    -webkit-transition: 0.5s;
    margin: 3%;
    padding: 16px;
    font-size: 16px;
    font-family: Gilroy Light;
}

span {
    color: #e189d9;
    font-size: 64px;
}

.form {
    position: fixed;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 5%;
    padding-top: 2%;
    margin-left: 30%;
    margin-right: 40%;
    bottom: 12%;
    left: 4%;
    background-color: #0d071c;
    border-radius: 61px;
    box-shadow: 23px 23px 47px #bf74b8,
        -23px -23px 47px #ff9efa;
}

.user {
    position: absolute;
    bottom: 68%;
    left: 81%;
}

.companyposition {
    position: absolute;
    bottom: 60%;
    left: 78%;
}

.submit {
    position: absolute;
    bottom: 14%;
    left: 117%;
    padding: 5%;
    background: none;
    color: #e189d9;
    border-color: #e189d9;
    font-family: Gilroy ExtraBold;
}

</style>
<template>
<div>
  
  <div class="main-header">
      

      <div class="logReg">
          <h1>StarWars</h1>
      </div>
      <div class="routers" >
        <router-link  to="/login">Log In</router-link>
        <router-link  to="/register">Sign Up</router-link>
      </div>
     

    </div> 
    <navigationView/>
    <router-view/>
  </div>
</template>
<script>

import navigationView from '@/components/NavigationBar.vue'
export default {
  components:{
    navigationView
  }
}
</script>
<style>
body{
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  
}

input{
  color: black;
}
button{
    background-color: black;
    border: white solid 0.1rem;
    padding: 0.1rem;
    border-radius: 0.1rem;
    cursor: pointer;
}
nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #ffffff;
  border-left: 0.1rem solid white;
  border-right: 0.1rem solid white;
  border-bottom: 0.2rem solid rgb(46, 106, 203);
}
.routers a{
  text-decoration: none;
  margin-left: 1rem;
  font-size: 1.2rem;
}
*{
  
  color: white;
  padding: 0;
  margin: 0;
  

}

.main-header{
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3,1fr);
}
.logReg{
  grid-column: 2/3;
}
</style>

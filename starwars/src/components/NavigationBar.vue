<template>
    <div>
        <nav>
    <router-link to="/">Welcome Page</router-link> 
    <router-link to="/home">Starships!</router-link> 
    
        </nav>
        
    </div>
</template>

<script>
export default {
    name:'navigationView'
}
</script>

<style scoped>
nav a{
    text-decoration: none;
    margin: 1rem;
    
    
}

nav{
      border-bottom: rgb(255, 255, 255) solid 0.1rem ;
      border-top:rgb(255, 255, 255) solid 0.1rem ;
        margin-top: 2rem;
}
</style>
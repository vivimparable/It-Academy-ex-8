<template>
    <div>
        <h1>Welcome page to Star wars directory</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fuga nihil error exercitationem a incidunt velit praesentium odit nemo quae, pariatur quis reiciendis placeat doloribus saepe aspernatur eaque, eum ipsa!</p>
        <div class="mas-click">
        <router-link   to="/home">Clicka para tenere naves!</router-link>
    </div>
    </div>
</template>
<style scoped>
*{
    width: 80%;
    margin: auto;
}

div{
    margin-top: 4rem;
}
h1{
    margin-bottom: 2rem;
}

*{
    background-color: none;
    line-height: 2rem;
}

.mas-click {
    margin-top: 0.8rem; 
      
}
.mas-click a{
    padding: 0.4rem;
    text-decoration: none;
    border: solid 0.1rem white; 
    border-radius: 1rem;

}

.mas-click a:hover{
    background-color: white;
    color: black;
    transition: 0.3s;
}


</style>
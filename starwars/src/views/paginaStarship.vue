<template>
    <div>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nam laborum porro asperiores dolorem minima omnis fugiat vitae quis itaque nisi voluptate beatae consectetur ipsum? Quas animi similique vel nisi adipisci dolores harum quasi iste mollitia ab repudiandae dicta error ipsa cum eaque, illum temporibus laborum assumenda repellat placeat corporis. Aut iusto eveniet possimus nulla unde, corrupti mollitia labore perferendis!</p>
        
        
        <div class="content-ship" v-if="GetShips">
            <div>
            <p>Name: {{GetShips.name}}</p>
            <p>Model: {{GetShips.model}}</p> 
            <p>Cargo capacity: {{GetShips.cargo_capacity}}</p>
            </div>

            <div>
            <p>Price: {{GetShips.cost_in_credits}}</p>
            <p>Crew: {{GetShips.crew}}</p>
            </div>
        </div>  
        <div class="click-naves">
        <router-link to="/home">back</router-link>    
        </div>
    </div>
</template>


<script>

export default {
    computed:{
        GetShips(){
            return this.$store.getters.GetShips(this.$route.params.id)
        }
    }
}
</script>

<style scoped>
div{
    margin-top: 1rem;
    
}
.content-ship{
    display: grid;
    grid-template-columns: repeat(2,1fr);
}




</style>

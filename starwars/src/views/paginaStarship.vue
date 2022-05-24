<template>
    <div>
        <div class="mainein" v-if="GetShips">
            

            <div>
<img :src="`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`" alt="No hay imágen">
            <p class="MainHeader">{{GetShips.name}}</p> 
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nam laborum porro asperiores dolorem minima omnis fugiat vitae quis itaque nisi voluptate beatae consectetur ipsum? Quas animi similique vel nisi adipisci dolores harum quasi iste mollitia ab repudiandae dicta error ipsa cum eaque, illum temporibus laborum assumenda repellat placeat corporis. Aut iusto eveniet possimus nulla unde, corrupti mollitia labore perferendis!</p>
            
            <div class="content-ship">
                
                
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
            </div>
        </div>  
            <div class="click-naves">
            <router-link to="/home">Back</router-link>    
            </div>
    </div>
</template>


<script>

export default {
    computed:{
        GetShips(){
            return this.$store.getters.GetShips(this.$route.params.id)
        },
    },data(){
        return{
            id:this.$route.params.id
        }
    },methods:{
        
    }
}
</script>

<style scoped>
.mainein{
    width: 70%;
    margin: auto;
}

.content-ship{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin: 1rem 0rem;
    

    
    
}


.click-naves{
    text-align: center;
    
}

.click-naves a{
    text-decoration: none;
    border: solid white 0.1rem;
    padding: 0.4rem;
    border-radius: 0.4rem;
}

.click-naves a:hover{
    color:black;
    background-color: white;
    transition: 0.3s;
}
img{
    display: flex;
    justify-content: center;
    border-bottom: rgb(196, 42, 42) solid 0.1rem;
    margin-bottom:2rem ;
    width: 100%;
    
  

     
}

.MainHeader{
    margin-bottom: 1rem;
    font-size: 2rem;
    color: grey;
}


</style>

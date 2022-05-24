<template>
  <div class="home">
    
      
    
    <div class="ships">
      <ul v-for="(u, index) in naves" :key="index">
        <router-link :to="{name: 'paginaStarship', params:{id:(u.url).replace(/[^0-9]/g,'')}}">
        <li><span>Name: </span> {{ u.name }}</li>
        <br />
        <li><span>Model:</span>  {{ u.model }}</li>

        </router-link>
        <br />
      </ul>
      </div>
      <div class="nextone" v-if="nextOne">
        <button @click="newwen">Cargar más naves</button>
      </div>
    

   
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["llenadosNaves", "muchasNaves"]),
    newwen(){
      this.$store.dispatch('masNaves')
    }
  },
  mounted() {
    this.navesLlamada;
  },
  computed: {
    ...mapState(["naves", "nextOne", "naveFalsa"]),
    ...mapActions(["navesLlamada"]),
    
  },
  
};
</script>
<style scoped>
ul{
  list-style: none;
  background-color: rgb(50, 50, 50);
  cursor: pointer;
  width: 70%;
  margin: auto;
  margin-top: 1rem;
  display: flex;
  justify-content: left;
  padding: 1rem 1rem; 
  border-radius: 0.4rem;
  
}
ul li:nth-of-type(1){
  font-size: 1.2rem;
}
ul li:nth-of-type(2){
  font-size: 1rem;
}

ul li,ul span{
  color:rgb(225, 225, 225)
}
ul a{
  text-decoration: none;
  
  
}

button{
  color: rgb(255, 255, 255);
  margin: 1rem 0rem ;
  padding: 0.3rem 0.1rem;
  font-weight: bold;
  cursor: pointer;
  
}

button:hover{
  background-color: rgb(62, 62, 62);
  transition: 0.3s;
  color: white;
  border: solid white 0.1rem;
}
span{
  font-weight: 700;
}
.nextone{
  display: flex;
  justify-content: center;
}

</style>
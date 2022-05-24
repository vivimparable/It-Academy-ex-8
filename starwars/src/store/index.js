import { createStore } from 'vuex'

export default createStore({
  state: {
    naves:[],
    nextOne:null,  
    img :""
    
  },
  getters: {

    GetShips: state=>number=>{
      return state.naves.find(a=>
         a.url.replace(/[^0-9]/g,'') === 
         number )
    }
  },
  mutations: {

    llenadosNaves(state,actionNave){
      state.naves = actionNave;
    },llenarApi(state,apiLLena){
      state.nextOne=apiLLena;
    },muchasNaves(state, Masnaves){
      state.naves=[...state.naves,...Masnaves]
      
    }
    
  },
  actions: {
    navesLlamada: async function({commit}){
      const datos =  await fetch('https://swapi.dev/api/starships/')
      const datos2 = await datos.json();
      commit('llenadosNaves',datos2.results);
      commit('llenarApi',datos2.next)
      console.log(datos2) 
      
     },
     
     masNaves:async function({commit}){
      
      if(this.state.nextOne){
        const dato1 = await fetch(this.state.nextOne)
        const dato2 = await dato1.json();
        commit('muchasNaves', dato2.results);
        commit( 'llenarApi', dato2.next)
      }
     }  
     ,
  },
  modules: {
  }
})

<template>
    <div>
        <h1>Sign up</h1>
        <div class="firstOne">

        <p>Create User</p>
        <input v-model="user" type="email">
        <p>Create Password</p>
        <input v-model="password" type="password">
    <button @click="newRegister">Click</button>
    </div>
    {{errorMessage}}
    {{mensaje}}
    
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    data(){
        return{
            
            user:'',
            password:'',
            errorMessage:'',
            mensaje:''
        }
    },methods:{
        newRegister(){

            if(this.user.length==0 || this.password.length==0){
                this.errorMessage="Hay campos incompletos"
            }else{
                let users = JSON.parse(localStorage.getItem("userList") || "[]");
                this.errorMessage="";
                let newuser={
                    user: this.user,
                    pass: this.password
                }

                users.push(newuser);
                console.log(users);
                localStorage.setItem("userList", JSON.stringify(users));
                this.mensaje="Ya estás registrado!"

            }
        },...mapMutations(['autenticacion'])
    },computed:{
        ...mapState(['isLogged'])
    }
}
</script>

<style scoped>
h1{
  margin-bottom: 2rem;  
}
div{
    margin-top: 1rem;
    text-align: center;
    
    
}
.firstOne{
width: 20%;
margin: auto;
display: flex;
flex-direction: column;
border: solid white 0.1rem;
padding: 1rem;

}
input{
    margin: 1rem 0rem;
}
button{
    margin-top: 2rem;
}
</style>
<template>
    <div>
        <h1>Sign up</h1>
        <input v-model="user" type="email">
        <input v-model="password" type="password">
    <button @click="newRegister">Click</button>
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
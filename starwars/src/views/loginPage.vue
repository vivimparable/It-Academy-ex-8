<template>
    <div>
        <h1>Log In</h1>
        <input v-model="login" type="text" name="" id="">user
        <input v-model="password" type="password">Password
        <button @click="logeado">Click</button>
        <br>
        <p>{{mensaje}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            login:"",
            password:"",
            mensaje:""
        }
    },methods:{
        logeado(){
           let users = JSON.parse(localStorage.getItem("userList")) || [];
           let index = users.findIndex(a => a.user === this.login);
            console.log(users)

            if(index==-1){
                this.mensaje='Este usuario no existe.';
                return;
            }
            if(this.login== users[index].user && this.password== users[index].pass){
                this.mensaje="Sí que existe: "+ users[index].user+" bienvenido." 
                
                return;
            }

            if(this.password!= users[index].password){
                this.mensaje="Contraseña incorrecta";
                return;
            }
            
        }
    }
}
</script>

<style scoped>

div{
    margin-top: 1rem;
}
</style>
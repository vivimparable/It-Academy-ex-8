<template>
    <div>
        <h1>Log In</h1>

        <div class="firstOne">
            <p>User</p>
        <input v-model="login" type="text" name="" id="">
            <p>Password</p>
        <input v-model="password" type="password">
        <button @click="logeado">Click</button>
        </div>
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
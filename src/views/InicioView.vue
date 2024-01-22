<template>
  <div class="flex flex-col w-full items-center justify-center h-screen">
    
    <!-- Logo comentario -->
    <div class="flex flex-col items-center justify-center text-8xl mt-4 mb-6">
      <i class="fa-solid fa-comment text-black" @click="BackHome"></i>
    </div>
    <!-- Cierre Logo comentario -->

    <!-- Caja saludo + info -->
    <div class="flex flex-col items-center justify-center mt-4 mb-4 w-full">
      <h1 class="text-4xl font-semibold mb-3 flex flex-col text-[#9F9F9F] ">HOLA</h1>
      <p class=" flex flex-col italic text-xl">"Esto es TemaLogin"</p>
    </div>
    <!-- Cierre Caja saludo + info -->

    <!-- Inputs caja -->
    <div class="flex flex-col items-center justify-center mt-12 mb-12 w-full">
      <div class=" flex flex-col gap-20 w-full items-center">
        <div class="border-b-4 border-[#C2C2C2] w-[70%] flex items-center pr-6 pl-3">
          <i class="fa-solid fa-user text-[#C2C2C2] text-2xl mb-2 text-center"></i>
          <input type="text" class="flex items-center justify-center w-full bg-transparent	outline-none placeholder:text-center text-center text-xl mb-2 placeholder:italic" placeholder="@Usuario" v-model="usuario">
        </div>
        <div class="border-b-4 border-[#C2C2C2] w-[70%] flex items-center pr-6 pl-3">
          <i class="fa-solid fa-lock text-[#C2C2C2] text-2xl mb-2 "></i>
          <input type="password" class="flex items-center justify-center w-full bg-transparent	outline-none placeholder:text-center text-center mb-2 placeholder:italic text-xl" placeholder="Contraseña" v-model="contrasenya">
        </div>
      </div>
    </div>
    <!-- Cierre inputs caja -->

    <!-- Inicio caja de botones -->
    <div class="flex flex-col w-[75%] items-center justify-center mt-4 mb-4">
      <div class="flex flex-col items-center justify-center w-full gap-10">
        <button class="bg-[#26813A] text-white p-4 w-[60%] rounded-lg text-xl shadow-xl" @click="iniciar_sesion">Iniciar sesión</button>
        <button class="bg-[#813626] text-white p-4 w-[60%] rounded-lg text-xl shadow-xl " @click="crear_cuenta">Crear cuenta</button>
      </div>
    </div>
    <!-- Cierre Inicio caja de botones -->

  </div>
</template>

<script>
import { mis_usuarios } from '@/usuarios'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
console.log(mis_usuarios)
export default {
  name: 'InicioView',
  data(){
    return {
      usuarios: mis_usuarios,
      usuario: "",
      contrasenya: ""
    }
  },
  methods: {
    iniciar_sesion(){
      let buscar_usuario = this.usuarios.find(user => user.usuario == this.usuario && user.contrasenya == this.contrasenya)
      if (buscar_usuario){
        this.$router.push({name: 'temas', params: { id: buscar_usuario.id }})
      }else {
        Swal.fire("Error en la contraseña!");
      }
    },
    crear_cuenta(){
      this.$router.push({name: 'crear_cuenta'})
    },
    BackHome(){
      this.$router.push({'name': 'inicio'})
    }
  }
}
</script>

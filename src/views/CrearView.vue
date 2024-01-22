<template>
  <div class="flex flex-col w-full h-screen items-center justify-center">
    <!-- Logo comentario -->
    <div class="flex flex-col items-center justify-center text-8xl mt-4 mb-14">
      <i class="fa-solid fa-comment text-black" @click="BackHome"></i>
    </div>
    <!-- Cierre Logo comentario -->
    <!-- Inicio cajas -->
    <form>
      <div class="flex flex-col items-center justify-center gap-10">
        <div class="border-b-4 border-[#C2C2C2] w-[100%] flex items-center">
              <input type="text" class="flex items-center justify-center w-full bg-transparent	outline-none placeholder:text-center text-center mb-2 placeholder:italic text-2xl" placeholder="Nombre" v-model="nombre" required>
        </div>
        <div class="border-b-4 border-[#C2C2C2] w-[100%] flex items-center">
              <input type="text" class="flex items-center justify-center w-full bg-transparent	outline-none placeholder:text-center text-center mb-2 placeholder:italic text-2xl" placeholder="Apellidos" v-model="apellidos" required>
        </div>
        <div class="border-b-4 border-[#C2C2C2] w-[100%] flex items-center">
              <input type="text" class="flex items-center justify-center w-full bg-transparent	outline-none placeholder:text-center text-center mb-2 placeholder:italic text-2xl" placeholder="Usuario" v-model="usuario" required>
        </div>
        <div class="border-b-4 border-[#C2C2C2] w-[100%] flex items-center">
              <input type="password" class="flex items-center justify-center w-full bg-transparent	outline-none placeholder:text-center text-center mb-2 placeholder:italic text-2xl" placeholder="Contraseña" v-model="contrasenya" required>
        </div>
        <div class="border-b-4 border-[#C2C2C2] w-[100%] flex items-center">
              <input type="text" class="flex items-center justify-center w-full bg-transparent	outline-none placeholder:text-center text-center mb-2 placeholder:italic text-2xl" placeholder="Foto de perfil" v-model="foto" required>
        </div>
        <div class="border-b-4 border-[#C2C2C2] w-[100%] flex items-center">
              <input type="text" class="flex items-center justify-center w-full bg-transparent	outline-none placeholder:text-center text-center mb-2 placeholder:italic text-2xl" placeholder="Descripción" v-model="descripcion" required>
        </div>
      </div>
          <!-- Cierre cajas inputs -->
      <div class="flex flex-col items-center justify-center w-full mt-14 mb-2">
          <button class="bg-[#813626] text-white p-4 w-[75%] rounded-lg text-xl shadow-xl" @click="agregar_usuario">Crear cuenta</button>
      </div>
  </form>
  </div>
</template>

<script>
import { mis_usuarios } from '@/usuarios'
export default {
  name: 'InicioView',
  data(){
    return {
      usuarios: mis_usuarios,
      nombre: "",
      apellidos: "",
      usuario: "",
      contrasenya: "",
      foto: "",
      descripcion: "",
    }
  },
  methods: {
    agregar_usuario(){
      let numero = mis_usuarios.length + 1
      const nuevo_usuario = {
        id: numero, 
        nombre: this.nombre, 
        apellidos: this.apellidos, 
        usuario: this.usuario, 
        contrasenya: this.contrasenya, 
        foto: this.foto, 
        descripcion: 
        this.descripcion
      }
      mis_usuarios.push(nuevo_usuario)
      this.$router.push({name: 'temas', params: {id: nuevo_usuario.id}})
      // Para los temas, esto debería quitarse y actualizar el array de fuera
    },
    BackHome(){
      this.$router.push({'name': 'inicio'})
    }
  }
}
</script>

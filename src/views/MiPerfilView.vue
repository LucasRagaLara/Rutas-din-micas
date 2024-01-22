<template>
    <div class="flex flex-col w-full h-screen items-center justify-center pt-12">
      <div class="flex gap-x-60">
        <i class="fa-solid fa-arrow-left text-white text-5xl" @click="VolverTemas"></i>
        <i class="fa-solid fa-right-from-bracket text-[#9F77BF80] text-5xl" @click="BackHome"></i>
      </div>
      <div class="flex flex-col w-full h-screen items-center mt-10">
        <img :src="imagen_user" alt="" class="w-[150px] h-[150px] rounded-full mb-10">
        <h1 class="text-xl italic text-white mb-5">{{ nombre }}</h1>
        <h1 class="text-l italic text-white mb-10">{{ apellidos }}</h1>
        <p class="w-[75%] text-justify italic">{{ descripcion }}</p>
      </div>

    </div>
  </template>
  
  <script>

 import { mis_usuarios} from '@/usuarios'
  export default {
    name: 'HomeView',
    data(){
      return{
        usuarios: mis_usuarios,
        imagen_user: "",
        nombre: "",
        apellidos: "",
        descripcion: "",
      }
    },
    mounted(){
        const idUser = this.$route.params.id
        console.log(idUser)
        console.log(mis_usuarios)
        let datosUser = mis_usuarios.find(user => user.id === parseInt(idUser));
        console.log(datosUser)
        if (datosUser){
          console.log(datosUser)
          this.imagen_user = datosUser.foto
          this.nombre = datosUser.nombre
          this.apellidos = datosUser.apellidos
          this.descripcion = datosUser.descripcion
        }
      },
    methods: {
      BackHome(){
        this.$router.push({'name': 'inicio'})
      },
      VolverTemas(){
        const idUser = this.$route.params.id
        this.$router.push({name: 'temas', params: {id: idUser}})
      }
    }
  }
  </script>
  
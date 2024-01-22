<template>
  <div class="flex flex-col w-full h-screen items-center pt-12">
    <div class="flex gap-x-60">
        <i class="fa-solid fa-comment text-white text-5xl" @click="PerfilUsuario"></i>
        <i class="fa-solid fa-right-from-bracket text-[#9F77BF80] text-5xl" @click="BackHome"></i>
    </div>
    <div class="w-full pt-12 pb-12 justify-items-center grid">
        <img :src="imagen" width="75%" class="rounded-xl shadow-lg">
    </div>
    <div class="flex flex-col w-[85%] pb-12">
        <textarea cols="20" rows="6" maxlength="100" minlength="10" placeholder="¿En qué estás pensando?" class="bg-white text-[#333] placeholder:italic w-full rounded-xl outline-none p-3 text-l" v-model="content_area"></textarea>
        <div class="flex justify-end items-end">
          <button class="bg-[#315FB8] text-white p-4 w-[40%] rounded-lg text-xl shadow-xl items-center justify-center flex mt-6" @click="publicarCarta">Publicar</button>
        </div>
    </div>
    <div v-for="publicacion in lista_publicaciones" :key="publicacion.id" class="flex flex-col w-[90%] items-center justify-center text-white">
      <div class="flex mb-4 w-[100%]">
        <img :src="publicacion.imagen_user" class="rounded-full w-[75px] h-[75px] mr-3 ml-3">
        <div class="flex flex-col w-[75%] break-words ml-2 border-l-2 h-auto min-h-[100px]  border-[#3E3E3E]">
          <h1 class="text-xl pl-4 pb-2">Tema: {{publicacion.tema }}</h1>
          <p class="text-l text-justify pr-2 break-words pl-5 pb-4 italic text-[#C2C2C2]">{{ publicacion.content_area }}</p>
        </div>
      </div>
        <div class="flex flex-col border-b-2 max-h-[95%] border-[#3E3E3E] w-[95%] mb-4"></div>
    </div>
  </div>
</template>
<script>
  // @ is an alias to /src
  import { mis_usuarios } from '@/usuarios'
  console.log(mis_usuarios)
  import Swal from 'sweetalert2/dist/sweetalert2.js'
  import 'sweetalert2/src/sweetalert2.scss'
  export default {
    name: 'HomeView',
    data(){
      return{
        imagen: "",
        content_area: "",
        lista_publicaciones: [],
      }
    },
    mounted(){
      let idUser = this.$route.params.id 
      console.log(idUser)
      this.imagen = this.$route.params.src
      console.log(this.$route.params)
      console.log(this.imagen)
    },
    methods: {
      BackHome(){
        this.$router.push({'name': 'inicio'})
      },
      PerfilUsuario(){
        let idUser = this.$route.params.id
        this.$router.push({name: 'perfil', params: {id: idUser}})
      },
      publicarCarta(){
        if (this.content_area.length > 10){
          let idUser = this.$route.params.id
          let tema = this.$route.params.tema
          let datosUser = mis_usuarios.find(user => user.id == idUser)
          let imagen_user = datosUser.foto
          this.lista_publicaciones.push({id:idUser, tema:tema, imagen_user: imagen_user, content_area: this.content_area})
        }else{
          Swal.fire("El contenido mínimo son 10 caracteres!");
        }
      }
    }
  }
  </script>
  
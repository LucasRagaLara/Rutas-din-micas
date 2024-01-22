<template>
    <div class="flex flex-col w-full h-screen items-center pt-12">
      <div class="flex gap-x-60">
        <i class="fa-solid fa-comment text-white text-5xl" @click="PerfilUsuario"></i>
        <i class="fa-solid fa-right-from-bracket text-[#9F77BF80] text-5xl" @click="BackHome"></i>
      </div>
      <div class="flex flex-col justify-center items-center w-[85%] gap-20 h-screen">
          <img :src="god_of_war" alt="" width="330" height="270" class="rounded-xl" @click="GodOfWar">
          <img :src="gta" alt="" width="330" height="270" class="rounded-xl" @click="GtA">
      </div>
    </div>
  </template>

  <script>
  // @ is an alias to /src
  import { mis_usuarios } from '@/usuarios'
  console.log(mis_usuarios)
  export default {
    data(){
      return {
        usuarios: mis_usuarios,
        god_of_war: 'https://elcomercio.pe/resizer/vliJxRvqYoEWa9euEOkY9rf6vtE=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/B4CDNEDVB5GTJPHZ5TAZT62XQ4.jpg',
        gta: 'https://i.blogs.es/445eb6/skdifndsifg/1200_800.jpeg',
        tema: ''
      }
    },
    methods: {
      BackHome(){
        this.$router.push({'name': 'inicio'})
      },
      PerfilUsuario(){
        let idUser = this.$route.params.id
        this.$router.push({name: 'perfil', params: {id: idUser}})
      },
      GodOfWar(){
        this.tema = "God Of War"
        let idUser = this.$route.params.id
        this.$router.push({name: 'publicaciones', params: {id: idUser, src: this.god_of_war, tema: this.tema}})
      },
      GtA(){
        this.tema = "GTA"
        let idUser = this.$route.params.id
        this.$router.push({name: 'publicaciones', params: {id: idUser, src: this.gta, tema: this.tema}})
      }
    },
  }
  </script>
  
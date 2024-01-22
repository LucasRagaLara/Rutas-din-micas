import { createRouter, createWebHashHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import "@/usuarios"

const routes = [
  // Si consigue iniciar sesión le pasas el id, si no, le creas cuenta.
  {
    path: '/inicio',
    name: 'inicio',
    component: InicioView
  },
  // No requiere el id porque se crea en este momento. Una vez la creas si se la tienes que pasar al perfil.
  {
    path: '/crear_cuenta',
    name: 'crear_cuenta',
    component: () => import('../views/CrearView.vue')
  },
  // Necesita el id para poder actualizar perfil con tus datos
  {
    path: '/perfil/:id',
    name: 'perfil',
    component: () => import('../views/MiPerfilView.vue')
  },
  // Pásale el id, porque necesita la comunicación con publicaciones dicho id
  {
    path: '/temas/:id',
    name: 'temas',
    component: () => import('../views/TemasView.vue')
  },
  // Publicaciones requiere que se le pase el id, para poder luego comentar como tu usuario
  {
    path: '/publicaciones/:id/:src/:tema',
    name: 'publicaciones',
    component: () => import('../views/PublicacionesView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

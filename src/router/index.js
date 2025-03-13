import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonView from '@/views/PokemonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon',
      component: PokemonView,
      props: route => ({ id: route.params.id })
    }
  ]
})

export default router

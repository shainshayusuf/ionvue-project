import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/memories/MemoriesIndex.vue';



const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/memories/:id',
    component: () => import('../pages/memories/MemoriesDetail.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

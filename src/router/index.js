import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/data',
      name: 'dtat',
      component: () => import('../views/DataView.vue')
    }
  ]
})

export default router

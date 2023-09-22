import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/RegisterView.vue'
import { useUserStore } from '@/stores'

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

router.beforeEach((to, from, next) => {
  const { getToken } = useUserStore()
  const token = getToken()
  if (token) {
    return next()
  }
  if (to.path === '/login') {
    return next()
  }
  return next({ path: '/login' })
})

export default router

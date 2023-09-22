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
  // 取得token
  const { getToken } = useUserStore()
  const token = getToken()

  // 有token
  if (token) {
    // 放行
    return next()
  }
  // 否則沒有token
  // 如果去的登陸
  if (to.path === '/login') {
    // 放行
    return next()
  }
  // 如果去的是其他頁,跳轉到登陸
  return next({ path: '/login' })
})

export default router

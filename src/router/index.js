import { createRouter, createWebHistory } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'DefaultLayout' },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: 'DefaultLayout' },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'DefaultLayout' },
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/ErrorView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const { isLogin } = storeToRefs(userStore)
  if (isLogin) {
    return next()
  }
  if (to.path === '/login') {
    return next({ path: '/' })
  }
})

export default router

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
      path: '/register',
      name: 'register',
      meta: { layout: 'DefaultLayout' },
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/memberArea',
      name: 'memberArea',
      meta: { layout: 'DefaultLayout' },
      component: () => import('../views/memberArea.vue')
    },
    {
      path: '/deny',
      name: 'deny',
      meta: { layout: 'ErrorLayout' },
      component: () => import('../views/DenyView.vue')
    },

    {
      path: '/404',
      name: '404',
      meta: { layout: 'ErrorLayout' },
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
  const loginDeny = ['/login', '/register']
  const loginOnly = ['/memberArea']

  if (isLogin.value && loginDeny.includes(to.path)) {
    return next({ path: '/deny' })
  }
  if (!isLogin.value && loginOnly.includes(to.path)) {
    return next({ path: '/deny' })
  }
  return next()
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/views/index.vue'
const routerHistory = createWebHashHistory()
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      redirect: '/home',
      component: home
    }
  ]
})

// router.beforeEach((to, from) => {
//    console.warn(to, from)
// })
 
export default router

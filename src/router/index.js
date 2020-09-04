import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import login from '@/views/login.vue'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    beforeEnter: (to, from, next) => {
      
    }
  },
  {
    path: '/login/:page?',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router

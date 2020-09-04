import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import login from '@/views/login.vue'
import sginup from '@/views/sginup.vue'

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
  },
  {
    path: '/login/:page?',
    name: 'login',
    component: login
  },
  {
    path: '/sginup/:page?',
    name: 'sginup',
    component: sginup
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import logInFrom from './logInFrom'
import myPageFrom from './myPageFrom'
import boardFrom from './boardFrom'
import signUpFrom from './signUpFrom'

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
        path: '/Hello',
        name: 'Hello',
        component: () => import('@/views/Hello.vue'),
    },
    ...logInFrom,
    ...myPageFrom,
    ...boardFrom,
    ...signUpFrom
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router
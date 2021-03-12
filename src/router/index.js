import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import logInFrom from './logInFrom'
import myPageFrom from './myPageFrom'
import boardFrom from './boardFrom'
import signUpFrom from './signUpFrom'
import giftCardBuyingFrom from './giftCardBuyingFrom'
import HelloWorldFrom from '@/components/HelloWorld'
import termsFrom from './termsFrom'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(() => {
        return window.location.reload()
    })
};

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
    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorldFrom
    },
    ...giftCardBuyingFrom,
    ...logInFrom,
    ...myPageFrom,
    ...boardFrom,
    ...signUpFrom,
    ...termsFrom
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Cart from './views/Cart.vue'
import Checkout from './views/Checkout.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/categories', component: Category },
        { path: '/cart', component: Cart },
        { path: '/checkout', component: Checkout}
    ]
})

export default router;
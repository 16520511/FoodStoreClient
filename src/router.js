import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Cart from './views/Cart.vue'
import Checkout from './views/Checkout.vue'
import OrderSuccess from './views/OrderSuccess.vue'
import Search from './views/Search.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/cart', component: Cart },
        { name: 'checkout', path: '/checkout', component: Checkout},
        { name: 'order-success', path: '/order-success', component: OrderSuccess},
        { name: 'category', path: '/category/:categoryName', component: Category},
        { name: 'search', path: '/search', component: Search}
    ]
})

export default router;
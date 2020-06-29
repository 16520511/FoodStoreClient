<template>
    <div>
        <ProductGrid v-bind:initialProducts="products" />
    </div>
</template>

<script>
import axios from '../axios'
import ProductGrid from '../components/ProductGrid';

export default {
    name: 'Category',
    components: { ProductGrid },
    data() {
        return {
            products: [],
        }
    },
    async mounted() {
        await axios.get('/products')
        .then(res => {
            this.products = res.data;
        })
    }
}
</script>
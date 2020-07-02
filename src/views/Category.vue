<template>
    <div>
        <h2>{{title}}</h2>
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
            title: ''
        }
    },
    async mounted() {
        this.title = this.$route.params.categoryName;
        await axios.get('/products?category=' + this.$route.params.categoryName)
        .then(res => {
            this.products = res.data;
        })
    }
}
</script>
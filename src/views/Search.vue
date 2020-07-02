<template>
    <div>
        <h2>Search Result For: {{q}}</h2>
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
            q: ''
        }
    },
    async mounted() {
        this.q = this.$route.query.q;
        await this.getProducts();
    },
    watch: {
        $route: function (val) {
            let q = val.query.q;
            if (q != this.q) {
                this.q = q;
                this.getProducts();
            }
        }
    },
    methods: {
        async getProducts() {
            await axios.get('/products?q=' + this.q)
            .then(res => {
                this.products = res.data;
            })
        }
    },
}
</script>
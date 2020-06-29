<template>
    <div v-if="products.length > 0">
    <el-row class="product-grid" gutter="30">
        <el-col @mouseenter.native="showProductOverlay(product.id)" 
        @mouseleave.native="hideProductOverlay(product.id)" 
        class="product" :md="4" :sm="12" v-for="product in products" :key="product.id">
            <div class="product-overlay" :id="'product-overlay-' + product.id"></div>
            <el-button @click="handleAdddToCart(product.id)" class="add-to-cart-button color-primary" :id="'button-' + product.id" round>
                <i class="el-icon-shopping-cart-full"></i> Add To Cart
            </el-button>
            <img class="product-image" v-bind:src="'http://localhost:3000/uploads/products/' + product.image" />
            <h3>{{ product.name }}</h3>
            <h4 v-if="!product.onSale">${{ product.price }}</h4>
            <h4 v-if="product.onSale" style="text-decoration: line-through">${{ product.price }}</h4>
            <h4 v-if="product.onSale">On Sale: ${{ product.salePrice }}</h4>
            <p>{{ product.description }}</p>
        </el-col>
    </el-row>
    </div>
</template>

<script>
import axios from '../axios';

export default {
    name: "ProductGrid",
    props: ['initialProducts'],
    data: function () {
        return {
            products: []
        }
    },
    mounted() {
        console.log(this.initialProducts);
    },
    watch: {
        initialProducts: function (val) {
            this.products = val;
        },
    },
    methods: {
        showProductOverlay(id) {
            let overlay = document.getElementById('product-overlay-' + id);
            overlay.style.display = "flex";
            let button = document.getElementById('button-' + id);
            button.style.display = "inherit";
        },

        hideProductOverlay(id) {
            let overlay = document.getElementById('product-overlay-' + id);
            overlay.style.display = "none";
            let button = document.getElementById('button-' + id);
            button.style.display = "none";
        },

        handleAdddToCart(id) {
            axios.post("/cart/add-to-cart", { productId: id }, {
            withCredentials: true
        })
            .then(res => {
                console.log(res);
                this.$message({
                    dangerouslyUseHTMLString: true,
                    message: '<p style="font-size: 1.1rem; color: green">Item added to cart.</hp>',
                    type: 'success',
                    duration: 2000,
                    center: true,
                    offset: 40
                });
            })
            .catch(err => console.log(err));
        }
    },
}
</script>

<style>
    .product-grid.el-row {
        margin: 1rem 3rem 1rem 3rem !important;
        display: flex !important;             /* primary flex container */
        flex-direction: row !important; 
        align-items: stretch !important; 
    }

    .product {
        position: relative;
        box-shadow: 0px 9px 18px 0px rgba(0, 0, 0, 0.075);
        border-radius: 0.3333333333333333em;
        padding: 1rem;
        background-color: #fff;
    }

    .product-overlay{
        display: none;
        position: absolute;
        top: 1rem;
        left: 0;
        width: 100%;
        height: calc(100% - 1rem);
        background-color: black;
        opacity: 0.4;
    }

    .add-to-cart-button.el-button {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    .product-image {
        width: 100%;
        max-width: 350px;
    }

    @media screen and (max-device-width: 1024px){
        .product-grid.el-row {
            display: initial !important;             /* primary flex container */
            flex-direction: initial !important; 
            align-items: initial !important; 
        }
    }
</style>
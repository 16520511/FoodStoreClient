<template>
    <div class="home-page">
        <div class="banner-section">
            <img class="banner-image" v-bind:src="'/static/img/banner-' + this.banner + '.jpg'">
            <div class="hidden-sm-and-down" id="color-overlay"></div>
            <div class="banner-overlay">
                <img class="logo-image" v-bind:src="'/static/img/logo3.png'">
                <h1 class="hidden-sm-and-down">Fresh and Delicious</h1>
                <p class="hidden-sm-and-down banner-description">Order your favourite dishes from different cuisines and have them delivered to your door in minutes</p>
            </div>
        </div>
        <h2 class="header-text">Food Delivery</h2>
        <div class="divider"></div>
        <el-row class="featured-section" gutter=0>
            <el-col :md="12" :sm="24">
                <img class="featured-image" v-bind:src="'/static/img/featured-image.jpg'">
            </el-col>
            <el-col class="featured-section-second-col" :md="12" :sm="24">
            <div class="second-col-wrapper">
            <h2>Feeling Hungry But Don't Want To Go Out?</h2>
            <p>Don't worry, we’ve got you covered.</p>
            <p>Empty kitchen? Easy as! Sick of sangers? AFA to the office! Can’t leave the couch? Count on us!</p>
            <p>We’ll bring your fave dish right to you.</p>
            <el-button class="color-primary">
                START ORDERING!
            </el-button>
            </div>
            </el-col>
        </el-row>
        <h2 class="header-text">Items On Sale</h2>
        <div class="divider"></div>
        <ProductGrid v-bind:initialProducts="products" />
    </div>
</template>

<script>
import axios from '../axios'
import 'element-ui/lib/theme-chalk/display.css';
import ProductGrid from '../components/ProductGrid';

export default {
    name: 'Home',
    components: { ProductGrid },
    data() {
        return {
            banner: 1,
            products: [],
            cartNumber: 0,
        }
    },
    async mounted() {
        setInterval(() => {
            this.banner = this.banner == 3 ? 1 : (this.banner + 1);
        }
        ,8000);

        await axios.get('/products?onSale=true', {
            withCredentials: true
        })
        .then(res => {
            this.products = res.data;
        })
    },
}
</script>

<style>
    .banner-section {
        margin-bottom: 3rem;
        position: relative;
    }

    .banner-image {
        width: 100%;
        z-index: -100;
        display: block;
    }

    #color-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.6;
    }

    .banner-overlay {
        position: absolute;
        max-width: 45rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        font-family: 'Pangram';
        color: white;
    }

    .banner-overlay h2 {
        font-weight: lighter;
        margin-bottom: 2rem;
    }

    .banner-description {
        font-size: 1.5rem;
    }

    .el-input-group__append {
        background-color: #ff4100 !important;
        color: white !important;
        border: 0 !important;
    }

    .featured-section.el-row {
        margin: 0 !important;
        padding: 2rem 7rem 2rem 7rem;
        display: flex !important;             /* primary flex container */
        flex-direction: row !important; 
        align-items: stretch !important; 
    }

    .featured-image {
        width: 100%;
        display: block
    }

    .featured-section-second-col.el-col {
        background-color: rgb(241, 241, 241);
        color: black;
        position: relative;
    }

    .featured-section-second-col.el-col .second-col-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    @media screen and (max-device-width: 1024px){
        .banner-overlay {
            transform: none;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
        }

        .featured-section.el-row {
            padding: 0 !important;
            display: initial !important;             /* primary flex container */
            flex-direction: initial !important; 
            align-items: initial !important; 
        }
    }
</style>
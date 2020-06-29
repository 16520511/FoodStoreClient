<template>
    <div>
    <el-menu
    class="navbar hidden-sm-and-down"
    mode="horizontal"
    background-color="white"
    text-color="#ff4100"
    active-text-color="red">
    <el-menu-item index="1"><a href="/"><i class="el-icon-s-home"></i></a></el-menu-item>
    <el-menu-item index="2"><a href="/store">Store</a></el-menu-item>
    <el-menu-item index="3"><a href="/news">News</a></el-menu-item>
    <el-menu-item index="4"><a href="/promotion">Promotion</a></el-menu-item>
    <el-submenu index="5">
        <template slot="title">Menu</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
        <template slot="title">item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="6" style="float: right"><a href="/cart"><el-badge :value="this.cartNumber" :max="9" class="cart"><i class="el-icon-shopping-cart-2"></i>Cart</el-badge></a></el-menu-item>
    </el-menu>


    <el-button class="navbar-open-button hidden-md-and-up" v-on:click="handleOpenNavBar" icon="el-icon-menu"> Navigation</el-button>
    
    <el-menu default-active="2" class="hidden-md-and-up" :collapse="isCollapse">
    <el-submenu index="1">
        <template slot="title">

        <span slot="title">Navigator One</span>
        </template>
        <el-menu-item-group>
        <span slot="title">Group One</span>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
        <span slot="title">item four</span>
        <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="2">

        <span slot="title">Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>

        <span slot="title">Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">

        <span slot="title">Navigator Four</span>
    </el-menu-item>
    </el-menu>
    </div>
</template>

<script>
import axios from '../axios'

export default {
    name: "NavBar",
    data: function() {
        return {
            cartNumber: 0,
            isCollapse: true,
        }
    },
    mounted() {
        axios.get('/check-session', {
            withCredentials: true
        }).then(res => {
            console.log(res);
            let cart = res.data.cart;
            this.cartNumber = cart.length;
        })
        .catch(err => console.log(err));
    },
    methods: {
        handleOpenNavBar() {
            this.isCollapse = !this.isCollapse;
        }
    },
}
</script>

<style>
    .navbar {
        border-bottom: none !important;
        font-weight: bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    .el-submenu__title {
        font-size: 1.2rem !important;
    }

    .el-menu-item {
        font-size: 1.2rem !important;
        padding: 0 !important;
    }

    .el-menu-item a {
        padding: 0 1rem;
        text-decoration: none;
    }

    .el-icon-s-home {
        color: red !important;
        font-size: 1.5rem !important;
    }

    .cart {
        padding-right: 20px;
    }

    .el-badge__content {
        top: initial !important;
        bottom: 30%;
        right: 15px !important;
    }
    
    .el-menu--collapse {
        display: none;
    }

    .navbar-open-button {
        margin: 10px !important;
    }

    .navbar-open-button i {
       color: orange;
    }
</style>
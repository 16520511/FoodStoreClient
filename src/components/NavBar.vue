<template>
    <div>
    <el-menu
    class="navbar hidden-sm-and-down"
    mode="horizontal"
    background-color="white"
    text-color="#ff4100"
    active-text-color="red">
    <el-menu-item index="1"><a href="/"><i class="el-icon-s-home"></i></a></el-menu-item>
    <el-menu-item index="2-1"><a href="/category/france">France</a></el-menu-item>
    <el-menu-item index="2-2"><a href="/category/italy">Italy</a></el-menu-item>
    <el-menu-item index="2-3"><a href="/category/china">China</a></el-menu-item>


    <el-input @keyup.enter.native="handleSearch" class="search-box hidden-sm-and-down" placeholder="What do you want to eat?" v-model="searchQuery">
    <el-button @click="handleSearch" class="search-button hidden-sm-and-down" slot="append" icon="el-icon-search"></el-button></el-input>


    <el-menu-item index="7" style="float: right"><a href="/cart"><el-badge :value="this.cartNumber" :max="9" class="cart"><i class="el-icon-shopping-cart-2"></i>Cart</el-badge></a></el-menu-item>
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
            searchQuery: ""
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
        },
        handleSearch() {
            this.$router.push("/search?q=" + this.searchQuery);
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

    .search-box {
        font-size: 1.07rem !important;
        margin: 10px 0;
        width: 350px !important;
    }

    .search-box .el-input-group__append {
        background-color: #ff4100 !important;
    }
</style>
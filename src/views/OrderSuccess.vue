<template>
    <div>
        <h4 v-if="status == 200">Your order has been received. We will call you shortly to confirm your order.</h4>
        <h4 v-if="status != 200">There's an error with your order. Please try again.</h4>
        <el-button v-on:click="backToHomePage" class="color-primary">BACK TO HOME PAGE</el-button>
    </div>
</template>

<script>
import axios from "../axios";

export default {
    name: 'Checkout',
    data: function() {
        return {
            status: 200
        }
    },
    mounted() {
        this.status = this.$route.params.status;
    },
    methods: {
        backToHomePage() {
            this.$router.push("/");
        }
    },
}
</script>
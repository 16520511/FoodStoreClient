<template>
    <div>
        <h2>CHECK OUT</h2>
        <el-row class="product-grid" gutter="50">
            <el-col :sm="24" :md="9" :offset="3">
                <div class="shipping-address">
                    <div class="header-bar">
                        <h5>SHIPPING INFORMATION</h5>
                    </div>
                    <el-form label-position="left" label-width="170px">
                        <el-form-item label="Full Name" required>
                            <el-input v-model="fullName"></el-input>
                        </el-form-item>
                        <el-form-item label="Phone Number" required>
                            <el-input v-model="phoneNumber"></el-input>
                        </el-form-item>
                        <el-form-item label="Email Address" required>
                            <el-input v-model="email"></el-input>
                        </el-form-item>
                        <el-form-item label="Address" required>
                            <el-input v-model="address"></el-input>
                        </el-form-item>
                        <el-form-item label="Customer's Note" required>
                            <el-input v-model="note"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
            <el-col :sm="24" :md="9">
                        <div class="order-info">
                <div class="header-bar">
                    <h5>ORDER SUMMARY</h5>
                </div>
                <div class="order-summary-body">
                    <p>Subtotal: ${{total}}</p>
                    <p>Discounted: $0</p>
                    <p>Delivering Fee: $20</p>
                    <p>Tax: ${{total*0.1}}</p>
                    <hr/>
                    <h3>Total Cost: ${{Math.round(total*1.1)}}</h3>
                </div>
                <el-button v-on:click="toOrder" class="order-button" type="success">PLACE ORDER</el-button>
            </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from "../axios";

export default {
    name: 'Checkout',
    data: function() {
        return {
            fullName: '',
            phoneNumber: '',
            email: '',
            address: '',
            note: '',
            orderContent: '',
            total: 0
        }
    },
    mounted() {
        this.total = this.$route.params.total;
        let items = this.$route.params.items;
        let orderContent = '';
        for (let i = 0; i < items.length; i++) {
            orderContent += `${items[i].name} x ${items[i].quantity}
`;
        }

        this.orderContent = orderContent;
    },
    methods: {
        toOrder() {
            let customerInfo = this.fullName + '\n'
            + this.phoneNumber + '\n'
            + this.email + '\n'
            + this.address + '\n'
            + 'Note:' + this.note + '\n';

            axios.put("/order", { customerInfo, orderContent: this.orderContent, total: String(this.total), confirm: false, deliver: false }, {
                withCredentials: true
            }).then(res => {
                this.$router.push({name: 'order-success', params: {status: res.status}});
            })
            .catch(err => console.log(err));
        }
    },
}
</script>

<style>
    .el-form {
        margin: 1rem 0;
        padding: 0.5rem;
    }
</style>
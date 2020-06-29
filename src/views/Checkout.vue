<template>
    <div>
        <h2>CHECK OUT</h2>
        <el-row class="product-grid" gutter="50">
            <el-col :sm="24" :md="10">
                <div class="shipping-address">
                    <div class="header-bar">
                        <h5>SHIPPING INFORMATION</h5>
                    </div>
                    <el-form label-position="left" label-width="170px">
                        <el-form-item label="Full Name" required>
                            <el-input v-model="fullName"></el-input>
                        </el-form-item>
                        <el-form-item label="Phone Number" required>
                            <el-input v-model="phoneNum"></el-input>
                        </el-form-item>
                        <el-form-item label="Email Address" required>
                            <el-input v-model="email"></el-input>
                        </el-form-item>
                        <el-form-item label="Address 1" required>
                            <el-input v-model="address1"></el-input>
                        </el-form-item>
                        <el-form-item label="Adress 2 (Optional)" required>
                            <el-input v-model="address2"></el-input>
                        </el-form-item>
                        <el-form-item label="Zip Code" required>
                            <el-input v-model="zip"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
            <el-col :sm="24" :md="7">
                        <div class="order-info">
                <div class="header-bar">
                    <h5>ORDER SUMMARY</h5>
                </div>
                <div class="order-summary-body">
                    <p>Subtotal: </p>
                    <p>Discounted: </p>
                    <p>Delivering Fee: </p>
                    <p>Tax: </p>
                    <hr/>
                    <h3>Total Cost: </h3>
                </div>
            </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Checkout',
    data: function() {
        return {
            fullName: '',
            phoneNum: '',
            email: '',
            address1: '',
            address2: '',
            zip: '',
        }
    }
}
</script>

<style>
    .el-form {
        margin: 1rem 0;
        padding: 0.5rem;
    }
</style>
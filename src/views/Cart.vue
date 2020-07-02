<template>
    <div>
        <h2>SHOPPING CART</h2>
        <el-row v-if="items.length != 0" class="product-grid" gutter="50">
        <el-col :sm="24" :md="17">
            <el-row v-if="items.length > 0" class="grid-header" gutter="0">
                <el-col :span="5">
                    <h5>IMAGE</h5>
                </el-col>
                <el-col :span="4">
                    <h5>NAME</h5>
                </el-col>
                <el-col :span="4">
                    <h5>DESCIPTION</h5>
                </el-col>
                <el-col :span="4">
                    <h5>QUANTITY</h5>
                </el-col>
                <el-col :span="2">
                    <h5>PRICE</h5>
                </el-col>
                <el-col :span="2">
                    <h5>TOTAL</h5>
                </el-col>
                <el-col :span="3">
                    <h5>ACTION</h5>
                </el-col>
            </el-row>
            <div class="item-grid">
            <el-row v-if="items.length > 0" v-for="item in items" :key="item.id" class="item" gutter="0">
                <el-col :span="5">
                    <img class="item-image" v-bind:src="'http://localhost:3000/uploads/products/' + item.image" />
                </el-col>
                <el-col :span="4">
                    <p class="item-name">{{ item.name }}</p>
                </el-col>
                <el-col :span="4">
                    <p class="item-description">{{ item.description }}</p>
                </el-col>
                <el-col :span="4">
                    <p><i v-on:click="handleChangeQuantity(item.id, 'minus')" class="el-icon-remove add-button"></i> 
                    {{ item.quantity }} <i v-on:click="handleChangeQuantity(item.id, 'plus')" class="el-icon-circle-plus minus-button"></i></p>
                </el-col>
                <el-col :span="2">
                    <p v-if="!item.onSale">${{ item.price }}</p>
                    <p v-if="item.onSale">${{ item.salePrice }}</p>
                </el-col>
                <el-col :span="2">
                    <p v-if="!item.onSale">${{ item.price*item.quantity }}</p>
                    <p v-if="item.onSale">${{ item.salePrice*item.quantity }}</p>
                </el-col>
                <el-col :span="3">
                    <p v-on:click="deleteItem(item.id)" class="remove-button">Remove</p>
                </el-col>
            </el-row>
            </div>
        </el-col>

        <el-col :sm="24" :md="7">
            <div class="discount">
                <div class="header-bar">
                    <h5>DISCOUNT CODE</h5>
                </div>
                <div>
                    <el-input placeholder="Enter Discount Code" v-model="discountCode">
                        <el-button class="discount-code-button" slot="append" icon="el-icon-discount"></el-button>
                    </el-input>
                </div>
            </div>
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
            </div>

            <el-button v-on:click="toCheckOut" class="order-button" type="success">PROCEED TO CHECKOUT</el-button>
        </el-col>
        </el-row>
        <h4 v-if="items.length == 0">You don't have any item in cart.</h4>
    </div>
</template>

<script>
import axios from "../axios";

export default {
    name: "Cart",
    data: function () {
        return {
            items: [],
            cusName: '',
            cusPhoneNum: '',
            cusAddress: '',
            discountCode: ''
        }
    },
    mounted() {
        axios.get("/cart/cart-items", {
            withCredentials: true
        }).then(res => {
            console.log(res.data);
            this.items = res.data;
        })
        .catch(err => console.log(err));
    },
    computed: {
        total: function () {
            let items = this.items;
            let total = 0;
            for (let i = 0; i < items.length; i++) {
                let price = items[i].onSale ? items[i].salePrice : items[i].price;
                price *= items[i].quantity;
                total += price;
            }

            return total;
        }
    },
    methods: {
        handleUpdateCart() {
            let items = [...this.items];
            let cart = [];

            for (let i = 0; i < items.length; i++) {
                let id = items[i].id;
                let quantity = items[i].quantity;

                cart.push({ productId: id, quantity: quantity });
            }

            axios.post("/cart", { cart: cart }, {
                withCredentials: true
            }).then(res => console.log(res))
            .catch(err => console.log(err));
        },

        handleChangeQuantity(productId, action) {
            let items = [...this.items];
            for (let i = 0; i < items.length; i++)
                if (items[i].id === productId) {
                    if (action === "plus")
                        items[i].quantity++;
                    else if (action === "minus")
                    {
                        items[i].quantity--;
                        if (items[i].quantity == 0)
                            items.splice(i, 1);
                    }
                    break;
                }
            
            this.items = items;
            this.handleUpdateCart();
        },

        deleteItem(productId) {
            let items = [...this.items];
            for (let i = 0; i < items.length; i++)
                if (items[i].id === productId) {
                    items.splice(i, 1);
                    break;
                }
            
            this.items = items;
            this.handleUpdateCart();
        },

        toCheckOut() {
            this.$router.push({ name: 'checkout', params: { total: this.total, items: this.items } });
        }
    }
}
</script>

<style>
    .item-grid {
        border-radius: 2rem;
        border: 1px solid #ccc;
        padding: 0.05rem 0.5rem;
        margin: 1.2rem 0;
    }

    .item {
        margin: 1rem;
    }

    .item-image {
        width: 90%;
    }

    .item-name {
        font-weight: bold;
    }

    .add-button,.minus-button {
        cursor: pointer;
        margin: 0 0.8rem;
    }

    .add-button:hover,.minus-button:hover{
        filter: brightness(1.2);
    }

    .remove-button {
        cursor: pointer;
        color: red;
    }

    .remove-button:hover {
        text-decoration: underline;
    }

    .order-summary-body {
        text-align: left;
        padding: 0.05rem 0.5rem;
        margin: 1.2rem 0;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    .shipping-info {
        text-align: left;

    }

    .shipping-info .el-form {
        padding: 0.05rem 0.5rem;
    }

    .el-form-item__label {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 1.2rem !important;
    }

    .el-input-group__append {
        background-color: rgb(71, 71, 71) !important;
    }

    .discount {
        margin-bottom: 2rem;
    }

    .discount .header-bar {
        margin-bottom: 1.5rem;
    }

    .discount-code-button {
        background-color: rgb(71, 71, 71) !important;
    }

    .discount-code-button:hover {
        filter: brightness(1.5);
    }

    .order-button {
        width: 100%;
    }
</style>
<template>
    <div class="col-12 mb-4">
        <h1>Наши товары</h1>
    </div>
    <div class="col-12 mb-4">
        <button class="btn btn-sm btn-outline-secondary">Все</button>
        <button class="btn btn-sm btn-secondary">Хлеб</button>
        <button class="btn btn-sm btn-outline-secondary">Колбасы</button>
        <button class="btn btn-sm btn-outline-secondary">Молочные продукты</button>
        <button class="btn btn-sm btn-outline-secondary">Фрукты</button>
    </div>

    <div
        class="col-md-6 col-lg-4 col-xl-3 mb-4"
        v-for="product in products"
        :key="product.id"
    >
        <base-product
            v-bind="product"
            @add-product-cart="onAddProductCart"
        ></base-product> 
    </div>
    
</template>

<script>
import axios from "axios";
import BaseProduct from '@/components/BaseProduct.vue';

export default {
    emits: ['addCart'],
    data: function () {
        return {
            products: []
        };
    },
    mounted: function () {
        this.getProducts(); 
    },
    methods: {
        getProducts: async function () {
            const result = await axios.get('https://dummyjson.com/products');
            this.products = result.data.products;
        },
        onAddProductCart: function (id, price, quantity) {
            this.$emit('addCart', id, price, quantity);
        }
    },
    components: {
        BaseProduct
    }
};
</script>
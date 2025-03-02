<template>
    <div class="col-12 mb-4">
        <h1>Корзина</h1>
    </div>

    <!-- Список товаров в корзине -->
    <div class="col-lg-8" v-if="(typeof cart.id) != 'undefined'">
        <div class="card mb-4">
            <div class="card-body">
                <!-- Товар в корзине -->
                <div class="row align-items-center mb-4"
                    v-for="product in cart.products"
                    :key="product.id"
                >
                    <div class="col-auto">
                        <img :src="product.thumbnail" :alt="product.title" class="rounded"
                            style="width: 100px; height: 100px; object-fit: contain;">
                    </div>
                    <div class="col">
                        <h5 class="mb-1">{{ product.title }}</h5>
                    </div>
                    <div class="col-auto">
                        <div class="input-group" style="width: 120px;">
                            <button class="btn btn-outline-secondary" type="button">-</button>
                            <input type="text" class="form-control text-center" :value="product.quantity" readonly>
                            <button class="btn btn-outline-secondary" type="button">+</button>
                        </div>
                    </div>
                    <div class="col-auto text-end">
                        <div class="fs-5 fw-bold mb-1"><span>{{ product.price }}</span> ₸</div>
                        <button class="btn btn-sm btn-outline-danger"
                            @click="deleteProduct(product.id)"
                        >
                            <i class="bi-trash"></i> Удалить
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- Итоговая информация -->
    <div class="col-lg-4" v-if="(typeof cart.id) != 'undefined'">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title mb-4">Итого</h5>
                <div class="d-flex justify-content-between mb-2">
                    <span>Товары (<span>{{ cart.totalQuantity }}</span> шт.)</span>
                    <span><span>{{ cart.total }}</span> ₸</span>
                </div>
                <hr>
                <div class="d-flex justify-content-between mb-4">
                    <span class="fw-bold">К оплате</span>
                    <span class="fw-bold"><span>{{ cart.total }}</span> ₸</span>
                </div>
                <button class="btn btn-danger w-100">Перейти к оплате</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data: function () {
        return {
            cart: {}
        };
    },
    mounted: function () {
        this.getCart();
    },
    methods: {
        getCart: async function () {
            const result = await axios.get('https://dummyjson.com/carts/1');
            this.cart = result.data;
        },
        deleteProduct: function (id) {
            let index = this.cart.products.findIndex(function (product) {
                return product.id == id;
            });
            this.cart.products.splice(index, 1);
        }
    }
};
</script>
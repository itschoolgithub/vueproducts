<template>
    <div v-if="(typeof product.title) == 'undefined'">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/6b449513765711.56277d303236b.gif" alt="">
    </div>
    <div
        class="col-12 mb-4"
        v-if="(typeof product.title) != 'undefined'"
    >
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link :to="{name: 'products'}" class="text-decoration-none">
                        Главная
                    </router-link>
                </li>
                <li class="breadcrumb-item">
                    <a href="products.html" class="text-decoration-none">
                        {{ product.category }}
                    </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
            </ol>
        </nav>
    </div>
    <div class="col-md-6 mb-4"
        v-if="(typeof product.title) != 'undefined'"
    >
        <div class="card">
            <div class="ratio ratio-4x3">
                <img :src="product.images[0]" class="card-img-top object-fit-contain">
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4"
        v-if="(typeof product.title) != 'undefined'"
    >
        <h1 class="mb-4">{{ product.title }}</h1>
        <div class="d-flex gap-2 align-items-center mb-4">
            <div class="badge text-bg-success">Рейтинг: <span>{{ product.rating }}</span></div>
            <div class="text-muted"><span>{{ product.reviews.length }}</span> отзывов</div>
        </div>
        <div class="mb-4">
            <h5>Описание</h5>
            <p class="text-muted">
                {{ product.description }}
            </p>
        </div>
        <div class="mb-4">
            <h5>Характеристики</h5>
            <table class="table">
                <tbody>
                    <tr>
                        <td class="text-muted">Бренд</td>
                        <td>{{ product.brand }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted">Артикул</td>
                        <td>{{ product.sku }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <div class="fs-3 fw-bold mb-1"><span>{{ product.price }}</span> ₸</div>
                        <div>
                            <span class="badge text-bg-warning"><span>{{ priceCredit }}</span> ₸</span> <small>x3</small>
                        </div>
                    </div>
                    <div class="input-group" style="max-width: 150px;">
                        <button
                            class="btn btn-outline-secondary"
                            type="button"
                            @click="decrementQuantity"
                        >-</button>
                        <input type="text" class="form-control text-center" v-model="quantity" readonly>
                        <button
                            class="btn btn-outline-secondary"
                            type="button"
                            @click="incrementQuantity"
                        >+</button>
                    </div>
                </div>
                <button
                    class="btn btn-danger w-100"
                    @click="addCartProduct"
                >Добавить в корзину</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { useCartStore } from "@/stores/cart";
export default {
    data: function () {
        return {
            product: {},
            quantity: 1,
            cartStore: useCartStore()
        };
    },
    mounted: function () {
        this.getProduct();
    },
    computed: {
        priceCredit: function () {
            return Math.round(this.product.price / 3);
        }
    },
    methods: {
        getProduct: async function () {
            const result = await axios.get('https://dummyjson.com/products/' + this.$route.params.id);
            this.product = result.data;
        },
        addCartProduct: function () {
            this.cartStore.addProduct(this.product.id, this.product.price, this.quantity);
        },
        decrementQuantity: function () {
            if (this.quantity > 1) {
                this.quantity--;   
            }
        },
        incrementQuantity: function () {
            if (this.quantity < 99) {
                this.quantity++;   
            }
        }
    }
};
</script>
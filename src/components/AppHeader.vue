<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container">
            <router-link :to="{name: 'products'}" class="navbar-brand fw-medium fs-3">
                <i class="bi-ui-radios-grid text-danger"></i> FakeStore
            </router-link>
            <div class="d-flex gap-3 align-items-center">
                <div class="fs-6 lh-1 text-end" v-if="cartStore.totalPrice > 0">
                    <div>
                        К оплате: <strong><span>{{ cartStore.totalPrice }}</span> ₸</strong>
                    </div>
                </div>
                <router-link :to="{name: 'cart'}" class="text-dark position-relative">
                    <i class="bi-cart4 fs-3"></i>
                    <div
                        class="badge rounded-pill text-bg-danger border border-light position-absolute top-0 start-0 ms-3" v-if="cartStore.count > 0">
                        {{ cartStore.count }}
                    </div>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { useCartStore } from "../stores/cart";
export default {
    data: function () {
        return {
            cartStore: useCartStore()
        }
    }
};
</script>
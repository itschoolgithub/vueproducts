<template>
    <app-header :total="totalPrice" :count="cartProducts.length" />

    <div class="container py-5">
        <div class="row">
            <router-view
                @add-cart="onAddCart"
            />
        </div>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  data: function () {
    return {
        cartProducts: [
            {
                id: 1,
                price: 100,
                quantity: 5
            },
            {
                id: 2,
                price: 50,
                quantity: 5
            }
        ]
    };
  },
  computed: {
    totalPrice: function () {
        let total = 0;
        this.cartProducts.forEach(function (product) {
            total += product.price * product.quantity;
        });
        return Math.round(total * 100) / 100;
    }
  },
  methods: {
    onAddCart: function (id, price, quantity) {
        this.cartProducts.push({
            id,
            price,
            quantity
        });
    }
  },
  components: {
    AppHeader
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
</style>

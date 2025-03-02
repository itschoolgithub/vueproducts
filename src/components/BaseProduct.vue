<template>
    <div class="card h-100 position-relative">
        <router-link :to="{name: 'product', params: {id: id}}" class="text-decoration-none text-dark">
            <div class="ratio ratio-4x3">
                <img :src="thumbnail" class="card-img-top object-fit-contain">
            </div>
            <div class="badge rounded-pill position-absolute mt-2 ms-2 top-0 start-0 text-bg-success">
                {{ rating }}
            </div>
            <div class="card-body d-flex flex-column justify-content-between gap-2">
                <div>
                    <h5 class="card-title">{{ title }}</h5>
                    <p class="card-text text-muted">
                        Бренд: <span>{{ brand }}</span>.
                        Артикул: <span>{{ sku }}</span>
                    </p>
                </div>
                <div class="d-flex align-items-end justify-content-between">
                    <div>
                        <div class="fs-5 fw-bold"><span>{{ price }}</span> ₸</div>
                        <div>
                            <span class="badge text-bg-warning">
                                <span>{{ priceCredit }}</span> ₸
                            </span>
                            <small> x3</small>
                        </div>
                    </div>
                    <button class="btn btn-danger"
                        @click.prevent="addProductCart"
                        v-if="!inCart"
                    >В корзину</button>
                    <div class="input-group" style="max-width: 100px;" v-else>
                        <button class="btn btn-outline-secondary" type="button"
                            @click.prevent="quantity--"
                        >-</button>
                        <input type="text" readonly
                            class="form-control border-secondary px-0 pe-none text-center" v-model="quantity">
                        <button class="btn btn-outline-secondary" type="button"
                            @click.prevent="quantity++"
                        >+</button>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    emits: ['addProductCart'],
    props: [
        'id',
        'title',
        'price',
        'rating',
        'brand',
        'sku',
        'thumbnail'
    ],
    data: function () {
        return {
            inCart: false,
            quantity: 1
        };
    },
    methods: {
        addProductCart: function () {
            this.inCart = true;
            this.$emit('addProductCart', this.id, this.price, this.quantity);
        }
    },
    computed: {
        priceCredit: function () {
            return Math.round(this.price / 3);
        }
    }
};
</script>
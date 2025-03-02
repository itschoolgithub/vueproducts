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
                    <button class="btn btn-danger">В корзину</button>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: [
        'id',
        'title',
        'price',
        'rating',
        'brand',
        'sku',
        'thumbnail'
    ],
    computed: {
        priceCredit: function () {
            return Math.round(this.price / 3);
        }
    }
};
</script>
<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container">
            <router-link :to="{name: 'products'}" class="navbar-brand fw-medium fs-3">
                <i class="bi-ui-radios-grid text-danger"></i> FakeStore
            </router-link>
            <div class="d-flex gap-3 align-items-center">
                <div class="fs-6 lh-1 text-end" v-if="total > 0">
                    <div>
                        К оплате: <strong><span>{{ total }}</span> ₸</strong>
                    </div>
                </div>
                <router-link :to="{name: 'cart'}" class="text-dark position-relative">
                    <i class="bi-cart4 fs-3"></i>
                    <div
                        class="badge rounded-pill text-bg-danger border border-light position-absolute top-0 start-0 ms-3" v-if="count > 0">
                        {{ count }}
                    </div>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['total', 'count']
};
</script>
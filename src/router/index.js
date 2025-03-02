import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "@/views/ProductsView.vue";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";

const routes = [
    {
        name: 'products',
        path: '/',
        component: ProductsView
    },
    {
        name: 'product',
        path: '/product/:id',
        component: ProductView
    },
    {
        name: 'cart',
        path: '/cart',
        component: CartView
    }
];

const router = createRouter({
    routes: routes,
    history: createWebHistory()
});

export default router;
import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: function () {
        return {
            products: JSON.parse( localStorage.getItem('cartStore') ) ?? []
        };
    },
    getters: {
        totalPrice: function () {
            let total = 0;
            this.products.forEach(function (product) {
                total += product.price * product.quantity;
            });
            return Math.round(total * 100) / 100;
        },
        count: function () {
            return this.products.length;
        }
    },
    actions: {
        addProduct: function (id, price, quantity) {
            let index = this.products.findIndex(function (product) {
                return product.id == id;
            });
            if (index === -1) {
                this.products.push({
                    id,
                    price,
                    quantity
                });
            } else {
                this.products[index].quantity += quantity;
            }
            this.save();
        },
        updateQuanitity: function (id, newQuantity) {
            let index = this.products.findIndex(function (product) {
                return product.id == id;
            });
            if (index !== -1) {
                this.products[index].quantity = newQuantity;
            }
            this.save();
        },
        removeProduct: function (id) {
            let index = this.products.findIndex(function (product) {
                return product.id == id;
            });
            if (index !== -1) {
                this.products.splice(index, 1);
            }
            this.save();
        },
        getQuantity: function (id) {
            let index = this.products.findIndex(function (product) {
                return product.id == id;
            });
            if (index !== -1) {
                return this.products[index].quantity;
            }
            return 0;
        },
        save: function () {
            localStorage.setItem('cartStore', JSON.stringify(this.products));
        }
    }
});
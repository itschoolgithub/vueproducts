<template>
    <div class="col-12 mb-4">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="products.html" class="text-decoration-none">Главная</a>
                </li>
                <li class="breadcrumb-item"><a href="products.html" class="text-decoration-none">Молочные
                        продукты</a></li>
                <li class="breadcrumb-item active" aria-current="page">Творог рассыпчатый 9%</li>
            </ol>
        </nav>
    </div>
    <div class="col-md-6 mb-4">
        <div class="card">
            <div class="ratio ratio-4x3">
                <img src="products/photo-1.jpg" class="card-img-top object-fit-contain">
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4">
        <h1 class="mb-4">{{ $route.params.id }}</h1>
        <div class="d-flex gap-2 align-items-center mb-4">
            <div class="badge text-bg-success">Рейтинг: 3.9</div>
            <div class="text-muted">12 отзывов</div>
        </div>
        <div class="mb-4">
            <h5>Описание</h5>
            <p class="text-muted">
                Творог рассыпчатый 9% - натуральный молочный продукт, богатый белком и кальцием.
                Изготовлен из свежего коровьего молока высшего качества. Идеально подходит для
                приготовления творожных запеканок, сырников и других блюд.
            </p>
        </div>
        <div class="mb-4">
            <h5>Характеристики</h5>
            <table class="table">
                <tbody>
                    <tr>
                        <td class="text-muted">Страна производства</td>
                        <td>Казахстан</td>
                    </tr>
                    <tr>
                        <td class="text-muted">Вес упаковки</td>
                        <td>300 г</td>
                    </tr>
                    <tr>
                        <td class="text-muted">Жирность</td>
                        <td>9%</td>
                    </tr>
                    <tr>
                        <td class="text-muted">Срок годности</td>
                        <td>7 дней</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <div class="fs-3 fw-bold mb-1">300 ₸</div>
                        <div>
                            <span class="badge text-bg-warning">100 ₸</span> <small>x3</small>
                        </div>
                    </div>
                    <div class="input-group" style="max-width: 150px;">
                        <button class="btn btn-outline-secondary" type="button">-</button>
                        <input type="text" class="form-control text-center" value="1" readonly>
                        <button class="btn btn-outline-secondary" type="button">+</button>
                    </div>
                </div>
                <button class="btn btn-danger w-100">Добавить в корзину</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            product: {}
        };
    },
    mounted: function () {
        this.getProduct();
    },
    methods: {
        getProduct: function () {
            // axios
            // this.product = ljlasff
        }
    }
};
</script>
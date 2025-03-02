<template>
    <div class="col-12 mb-4">
        <h1>Корзина</h1>
    </div>

    <!-- Список товаров в корзине -->
    <div class="col-lg-8">
        <div class="card mb-4">
            <div class="card-body">
                <!-- Товар в корзине -->
                <div class="row align-items-center mb-4">
                    <div class="col-auto">
                        <img src="products/photo-12.jpg" alt="Колбаса Салями" class="rounded"
                            style="width: 100px; height: 100px; object-fit: contain;">
                    </div>
                    <div class="col">
                        <h5 class="mb-1">Колбаса Салями</h5>
                        <p class="text-muted mb-0">Страна: Белоруссия. Упаковка: 700 г.</p>
                    </div>
                    <div class="col-auto">
                        <div class="input-group" style="width: 120px;">
                            <button class="btn btn-outline-secondary" type="button">-</button>
                            <input type="text" class="form-control text-center" value="1" readonly>
                            <button class="btn btn-outline-secondary" type="button">+</button>
                        </div>
                    </div>
                    <div class="col-auto text-end">
                        <div class="fs-5 fw-bold mb-1">550 ₸</div>
                        <button class="btn btn-sm btn-outline-danger">
                            <i class="bi-trash"></i> Удалить
                        </button>
                    </div>
                </div>

                <!-- Пример второго товара -->
                <div class="row align-items-center">
                    <div class="col-auto">
                        <img src="products/photo-1.jpg" alt="Творог" class="rounded"
                            style="width: 100px; height: 100px; object-fit: contain;">
                    </div>
                    <div class="col">
                        <h5 class="mb-1">Творог рассыпчатый 9%</h5>
                        <p class="text-muted mb-0">Страна: Казахстан. Упаковка: 300 г.</p>
                    </div>
                    <div class="col-auto">
                        <div class="input-group" style="width: 120px;">
                            <button class="btn btn-outline-secondary" type="button">-</button>
                            <input type="text" class="form-control text-center" value="2" readonly>
                            <button class="btn btn-outline-secondary" type="button">+</button>
                        </div>
                    </div>
                    <div class="col-auto text-end">
                        <div class="fs-5 fw-bold mb-1">600 ₸</div>
                        <button class="btn btn-sm btn-outline-danger">
                            <i class="bi-trash"></i> Удалить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Итоговая информация -->
    <div class="col-lg-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title mb-4">Итого</h5>
                <div class="d-flex justify-content-between mb-2">
                    <span>Товары (3 шт.)</span>
                    <span>1150 ₸</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                    <span>Скидка</span>
                    <span class="text-danger">-100 ₸</span>
                </div>
                <hr>
                <div class="d-flex justify-content-between mb-4">
                    <span class="fw-bold">К оплате</span>
                    <span class="fw-bold">1050 ₸</span>
                </div>
                <button class="btn btn-danger w-100">Перейти к оплате</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
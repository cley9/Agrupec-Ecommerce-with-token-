<template>
    <div class="row row-cols-2 row-cols-sm-3  row-cols-md-4 row-cols-lg-5 row-cols-xl-6 d-flex justify-content-center ">
        <div class="col  mb-5 mb-lg-6 " v-for="itemProduct in productoHome" :key="itemProduct.id">
            <div class="card box-love box-efect">
                <a :href="`/View-page/${itemProduct.id}`" class="pt-3">
                    <img :src="`/storage/img/Productos/${itemProduct.imagen}`" class=" card-img-top" width="200px" alt=""
                        draggable="false">
                </a>
                <div class="bg-warning- box--btn--addHomeP ">
                    <div class="card-body">
                        <div class="mb-2 d-flex  align-items-center  box--home--text">
                            <h5 class="card-title text-dark h6 txtBoxTitle textBoxHeadTitle">{{ itemProduct.nombre }}
                            </h5>
                        </div>
                        <div class="mb-2 d-flex justify-content-between  ">
                            <span class="text-dark- txtBoxPreBefore textPrecioProBefore"><del>S/
                                    {{ itemProduct.precio }}.00
                                </del></span>
                            <span class="text-dark textPrecioProAfter">S/
                                {{ itemProduct.newPrecio }}.00
                            </span>
                        </div>
                        <div class=" align-items-center d-flex mb-2 ">
                            <span class="h6 mb-0 text-muted fw-normal textCountProDis">
                                <small class="">{{ itemProduct.cantidad }} disponibles</small>
                            </span>
                        </div>
                        <hr class="arrow--box">
                        <div v-if="userObj" class="overlay d-flex align-items-center-- justify-content-center">
                            <a class="icon btnAddCardLove btnEfectClick" @click="addCartPro(itemProduct)"><i
                                    class="bi bi-heart"></i></a>
                        </div>
                        <div v-if="userObj" class="box--btn--addHome">
                            <div class=" d-flex justify-content-end align-items-center mb-4 ">
                                <a class="btn-sm text-dark btn--view-add btn-sm btnEfectClick btnBodyAddProHome"
                                    id="addProCard" @click="addCartPro(itemProduct)">Agregar</a>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <a class="des btn rounded-circle  btn--addCard--count btnEfectClick fw-normal"
                                    @click="less(itemProduct)">-</a>
                                <span id="numDate">{{ itemProduct.numero }}</span>
                                <a class="start btn rounded-circle btn--addCard--count btnEfectClick"
                                    @click="plus(itemProduct)">+</a>
                            </div>
                        </div>
                        <div v-if="!userObj" class="overlay d-flex align-items-center-- justify-content-center">
                            <a class="icon" @click="msjInicieSesion()"><i class="bi bi-heart"></i></a>
                        </div>

                        <div v-if="!userObj" class=" d-flex justify-content-center align-items-center">
                            <a :href="`/View-page/${itemProduct.id}`" class="btn btn-sm  btn--view-add btnEfectClick">Ver
                                Producto </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <addProductCartModal />
</template>

<script>
import addProductCartModal from './addProductCartModal.vue';
import { viewModalProductAddCart } from '../js/addProductCart.js';
import { msjInicieSesion } from '../js/msj.js';

export default {
    props: {
        productos: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            userObj: '',
            productoHome: '',
        }
    },
    components: {
        addProductCartModal,
        // cart,
    },
    mounted() {
        this.producto();
    },
    methods: {
        async producto() {
            this.productoHome = this.productos.data;
            this.productoHome.forEach(itemProduct => {
                itemProduct.numero = 1;
            });
            // console.log(this.productos.data);
            this.userObj = JSON.parse(localStorage.getItem("userObj"));
            if (this.userObj) {
                console.log("esta lleno");
            } else {
                console.log("esta vacio");
            }
        },
        msjInicieSesion() {
            msjInicieSesion();
        },
        less(itemProduct) {
            itemProduct.numero > 1 ? console.log("mas +", itemProduct.numero--) : console.log("no se puede --");
        },
        plus(itemProduct) {
            itemProduct.numero < itemProduct.cantidad ? console.log("mas +", itemProduct.numero++) : console.log("no se puede ++");
        },
        async addCartPro(itemProduct) {
            // console.log('------- >',itemProduct.id, itemProduct.numero, itemProduct.nombre, itemProduct.newPrecio, itemProduct.imagen);
            await this.addProductCart(itemProduct.id, itemProduct.numero, itemProduct.nombre, itemProduct.newPrecio, itemProduct.imagen);
        },
        async addProductCart(idProducto, cantidad, nameProduct, newPrecio, imgProduct) {

            const data = await fetch(`/api/user/${this.userObj.user[0].id}/addCart/${idProducto}/${cantidad}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.userObj.token}`,
                },
            });
            const view = await data.json();
            console.log(view);

            await viewModalProductAddCart(cantidad, nameProduct, newPrecio, imgProduct);
        },
    }
}
</script>

<style></style>
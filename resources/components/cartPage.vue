<template>
    <!-- <h3>this is ..{{ listProduct[3].nombre }} </h3> -->
    <!-- <Link :href="route('download.user.pdf')">gaaa</Link> -->
    <div class="container boxContainerCart">
        <div class="row">
            <div class="col boxBodyCart">
                <!-- {{-- <div class="col">
        <h5 class="text-center"><i class="bi bi-cart3 me-2"></i>Carro de compras</h5>
      </div> --}} -->
                <div class="col-12 col-md-11 mb-3 box--flip--one">
                    <h6 class="mb-1 h4 fw-normal text-center p-4"><i class="bi bi-cart3 me-2"></i>Carro de compras</h6>
                    <div v-if="existProduct">
                        <div class="mb-3 col" v-for="itemProduct in listProduct" :key="itemProduct">
                            <div class="mb-4 col p-4 rounded-3 shadow box--view--favorite">
                                <div class="row col d-flex aling-items-center">
                                    <div class="col-4 col-md-2">
                                        <a :href="`/View-page/${itemProduct.id}`">
                                            <img :src="`/storage/img/Productos/${itemProduct.imagen}`"
                                                class="card-img-top" />
                                        </a>
                                    </div>
                                    <div class="col col-md-4">
                                        <div class="row">
                                            <span class="fw-normal mb-3 ">{{ itemProduct.nombre }}</span>
                                            <small class="mb-0 md-0 text-muted"> SKU: {{ 1023 }}</small>
                                            <small
                                                class="mb-1 d-flex justify-content-end d-md-none d-sm-block d-block me-2">
                                                <small class="me-2 d-flex align-items-center">Eliminar</small>
                                                <a href="" class="text-danger icons--delete--cart"
                                                    @click="deleteProduct(itemProduct.id)"> <i
                                                        class="bi bi-trash"></i></a>
                                            </small>
                                            <div
                                                class="col d-flex justify-content-between aling-items-center  d-md-none d-sm-block d-block">
                                                <small>Cantidad : {{ itemProduct.pivot.cantidad }}</small>
                                                <small>Precio : {{ itemProduct.newPrecio }}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-md-6  d-none d-sm-none d-md-block">
                                        <div class=" col ">
                                            <div class="row  ">
                                                <div class="col ">
                                                    <div
                                                        class="col mb-4  rounded-3 d-flex justify-content-center aling-items-center bg-light">
                                                        <h6 class="pt-2">Precio unitario</h6>
                                                    </div>
                                                    <div class="d-flex justify-content-center aling-items-center ">
                                                        <h6>S/ {{ itemProduct.newPrecio }}</h6>
                                                    </div>
                                                </div>
                                                <div class="col ">
                                                    <div
                                                        class="col mb-4  rounded-3 d-flex justify-content-center aling-items-center bg-light">
                                                        <h6 class="pt-2">Cantidad</h6>
                                                    </div>
                                                    <div class="d-flex justify-content-center aling-items-center ">
                                                        <h6>{{ itemProduct.pivot.cantidad }}</h6>
                                                    </div>
                                                </div>
                                                <div class="col ">
                                                    <div
                                                        class="col mb-4 rounded-3 d-flex justify-content-center aling-items-center bg-light">
                                                        <h6 class="pt-2">Subtotal</h6>
                                                    </div>
                                                    <div class="d-flex justify-content-center aling-items-center ">
                                                        <!-- <h6>S/ {{ itemProduct.newPrecio * itemProduct.pivot.cantidad }}</h6> -->
                                                        <h6>S/ {{ itemProduct.precioSubProduct }}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-end">

                                            <button class="text-danger icons--delete--cart btnDelete"
                                                @click="deleteProduct(itemProduct.id)"> <i
                                                    class="bi bi-trash"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center" v-if="!existProduct">
                        <div class="box-cart-validar p-3 text-center">
                            <h4>El carrito está vacío, agregue producto a su carrito</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3  boxBodyCartInfoMain">
                <div
                    class="mb-4 col-sm-1  p-4 rounded-3 shadow box--view--favorite-- boxBodyCartInfoCompra boxBodyCartInfo">
                    <h5 class="mb-4 ">Resumen de la compra:</h5>
                    <div class=" mb-0 d-flex justify-content-between aling-items-center ">
                        <small class="mb-0 text-muted  fw-normal">Total productos </small>
                        <small class=" mb-0 text-muted ">{{ cantidad }}</small>
                    </div>
                    <hr class=" ">
                    <div class="col">
                        <div class="mb-3 d-flex justify-content-between aling-items-center ">
                            <span class="text-dark h5 fw-normal">Total</span>
                            <small class="text-dark h5 fw-normal">S/ {{ precioSubAll }}</small>
                        </div>
                        <div class="container">
                            <div class="row d-flex justify-content-center">
                                <a href="/Producto-view"
                                    class="col-md-12 col-12 mb-md-3 btn btn--paymet--ver mb-3 btnEfectClick"><i
                                        class="bi bi-arrow-90deg-left me-2"></i>Ver más productos</a>
                                <a href="" class="col-md-12 col-12 btn btn--paymet--ir mb-3 btnEfectClick"
                                    data-bs-toggle="modal" data-bs-target="#prePayment"><i
                                        class="bi bi-paypal me-2"></i>Pagar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3 col-  p-4 rounded-3 shadow box--view--favorite-- boxBodyCartInfo">
                    <h5 class="mb-4 text-center fw-normal">Opcciones Disponibles de la compra:</h5>
                    <div class=" mb-0 d-flex justify-content-between aling-items-center bg-info">
                    </div>
                    <hr class=" ">
                    <div class="col">
                        <div class="container">
                            <div class="row d-flex justify-content-center">
                                <a :href="`/User-pdfDownload/${idUser}`"
                                    class="col-md-12 col-12 btn btnPaymetGenerar mb-3 btnEfectClick" target="_blank"><i
                                        class="bi bi-ticket-detailed-fill me-2"></i>Generar tikect de compra </a>
                                <button @click="deleteAllProduct()"
                                    class="col-md-12 col-12 btn btn--paymet--vaciar  mb-3 btnEfectClick"><i
                                        class="bi bi-trash-fill me-2"></i> vaciar carrito </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { deleteItemProduct, deleteAllProduct } from '../js/addProductCart.js';
import { validateUser, payment } from '../js/methods.js';
export default {
    props: {
        // listProduct: {
        //     type: Object,
        //     // type:Array,
        //     // type:String,
        //     required: true,
        // }
    },
    data() {
        return {
            userObj: '',
            existProduct: '',
            val: true,
            cantidad: 0,
            precioTotal: 0.0,
            total: 0,
            idUser: 0,
            listCartData: [],
            listProduct: {},
            precioSubAll: 0.0,
            // itemPrecioSub:0.0
        }
    },
    mounted() {
        this.listProductCart();
    },
    methods: {
        async listProductCart() {
            const listData = JSON.parse(localStorage.getItem('userObj'));
            const dataCart = await fetch(`/api/user/${listData.user[0].id}/getCart/`, {
                method: "Get",
                headers: {
                    Authorization: `Bearer ${listData.token}`,
                }
            });
            if (dataCart.ok) {
                const cartJsonData = await dataCart.json();
                this.listProduct = cartJsonData.listProduct.productos;
                this.existProduct = cartJsonData.existProduct;
                this.idUser = listData.user[0].id;
                let subtotal=0;
                let catidadAll=0;
                this.listProduct.forEach(itemProduct => {
                    catidadAll += itemProduct.pivot.cantidad;
                    itemProduct.precioSubProduct=(itemProduct.newPrecio * itemProduct.pivot.cantidad).toFixed(2);
                    subtotal += parseInt(itemProduct.precioSubProduct);
                });
                this.cantidad=catidadAll;
                this.precioSubAll=subtotal.toFixed(2);
            }
            payment(this.precioTotal);
        },
         async deleteProduct(idProduct) {
            // console.log("i ", idProduct);
            await deleteItemProduct(idProduct);
            this.listProductCart();
        },
        async deleteAllProduct() {
            await deleteAllProduct();
            this.listProductCart();
        },
    },
}
</script>

<style scoped>
.btnDelete {
    background: none;
    border: none;
}

.imgItemPage {
    /* width:90px;
    height: 120px; */
}
</style>
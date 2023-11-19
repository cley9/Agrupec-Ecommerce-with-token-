<template>
    <!-- <h4 v-for="product in producto" :key="product"> {{ product.nombre }}</h4> -->
    <body class="bg-light">
        <div class="container mb-4 pt-4">
            <div class="row ">
                <!-- @foreach ($productoId as $idProducto) -->
                    <div class="col-md-8   ">
                        <div class="row">

                            <div class="col-2 " style="width:140px;">
                                <div class="card card-body mb-2">
                                    <img :src="`/storage/img/Productos/${producto[0].imagen}`"
                                        class="card-img-top" />
                                </div>
                                <div class="card card-body mb-2">
                                    <img :src="`/storage/img/Productos/${producto[0].imagen}`"
                                        class="card-img-top" />

                                </div>
                                <div class="card card-body mb-2">
                                    <img :src="`/storage/img/Productos/${producto[0].imagen}`"
                                        class="card-img-top" />

                                </div>
                                <div class="card card-body mb-2">
                                    <img :src="`/storage/img/Productos/${producto[0].imagen}`"
                                        class="card-img-top" />

                                </div>

                            </div>
                            <div class="col d-flex justify-content-center align-items-center">
                                <img :src="`/storage/img/Productos/${producto[0].imagen}`"
                                    class="img-fluid" />
                            </div>
                        </div>
                        <br>
                        <hr>
                        <div class="  col mb-5">

                            <div class="col mb-5">
                                <h4 class="fw-normal">Descripción</h4>
                                <small class="h6 fw-normal "> {{ producto[0].description }} </small>
                            </div>
                            <div class="col-md-7 col">

                                <div class="">
                                    <h6 class="h5 fw-normal mb-4">Características del producto</h6>

                                </div>
                                <div class=" row row-cols-2  row-cols-md-2  ">

                                    <div class="col  mb-4">
                                        <h6><i class="bi bi-tools"></i> Heramienta : <small class="h6 fw-normal">No</small>
                                        </h6>
                                    </div>
                                    <div class="col ">
                                        <h6><i class="bi bi-hurricane"></i> Material : <small
                                                class="h6 fw-normal">Sí</small></h6>
                                    </div>
                                    <div class="col ">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <h6><i class="bi bi-gear-wide-connected"></i> Peso :
                                                <small class="h6 fw-normal">{{ producto[0].peso }}</small>
                                                <span class="h6 fw-normal"> g </span>

                                            </h6>
                                        </div>

                                    </div>
                                    <div class="col ">
                                        <h6><i class="bi bi-egg-fried "></i> Tamaño : <small
                                                class="h6 fw-normal">Mediano</small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <small class="h4 fw-normal">Más productos en nuestra tienda virtual </small>
                            <div class="">
                                Hay más productos en variedad en stock, consultanos en linea con los productos a llevar
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class=" mb-4 p-4 rounded-3 box--view--favorite shadow-sm ">
                            <small class="text-muted">Nuevo</small>

                            <div class="align-items-center justify-content-between d-flex mb-2">
                                <h6 class="h5 ">{{ producto[0].nombre }}</h6>
                                <!-- @if (session()->exists('name') && session()->get('rol') === '0')
                                @else -->
                                <a v-if="objUser" class="hers" @click="addProductCart(producto[0].id, 1, producto[0].nombre, producto[0].newPrecio, producto[0].imagen)"><i class=" bi bi-heart"></i></a>
                                <a v-if="!objUser" class="hers" @click=" msjInicieSesion()"><i class=" bi bi-heart"></i></a>
                                <!-- @endif -->
                            </div>
                            <div class="mb-2">
                                <small class="text-lef mb-3 text-muted fw-normal">
                                    <del><b>S/.{{ producto[0].precio }}</b></del>
                                    <!-- <del><b>S/.{{ number_format($idProducto['precio'], 2, ',', '.') }}</b></del> -->
                                        </small>
                            </div>
                            <div class="d-flex align-items-center ">

                                <h6 class="h3 fw-normal textPrecioProViewAfter me-4">S/
                                    {{ producto[0].newPrecio }}
                                    <!-- {{ number_format($idProducto['newPrecio'], 2, ',', '.') }} -->
                                </h6>
                                <small class=" h5 fw-normal textPrecioProViewOff"> OFF</small>
                            </div>

                            <div class="mb-2">
                                <!-- <div class="fb-share-button" data-href="http://agrupec.com/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fagrupec.com/%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore btn btn-danger">Compartir</a></div> -->
                                <small class="mb-5"><a href="#" class="loudingLinkEfectClick" data-bs-toggle="modal"
                                        data-bs-target="#Mpayment">Ver los medios de pago</a> </small>

                            </div>
                            <div class="">
                                <small class="text-success"><i class="bi  bi-truck" style="font-size:23px;"></i> Envío
                                    gratis a todo el país</small>
                            </div>
                            <div class=" col-md-8	 offset-md-1 col-6 offset-6 mb-4">
                                <small class="col textPlace textDistrito">Lima, Lima</small>
                                    <div class="col">
                                        <a href="#" class="loudingLinkEfectClick" data-bs-toggle="modal"
                                            data-bs-target="#district">Ver costos de envío</a>

                                    </div>

                            </div>
                            <div class=" align-items-center d-flex ">
                                <span class="h6 mb-4 text-muted fw-normal"> Cantidad : <small
                                        class="text-dark h6">{{ producto[0].cantidad }} unidad</small> <small>
                                        ({{ producto[0].cantidad }} disponibles)
                                    </small> </span>
                            </div>
                            <div class="text-center mb-4">
                                <div class="row d-flex justify-content-center">
                                    <button type="button"
                                        class="col-9 col-sm-9 col-md-12 col-lg-9 mb-3 btn btnEfectClick btnPaymetView "
                                       v-if="objUser" data-bs-toggle="modal" data-bs-target="#Mpayment">
                                        Comprar ahora</button>
                                        <a id="addProductoId"
                                            class="col-9 col-sm-9 col-md-12 col-lg-9 btnEfectClick btnAddProView" v-if="objUser" 
                                            @click="addProductCart(producto[0].id, 1, producto[0].nombre, producto[0].newPrecio, producto[0].imagen)">Agregar
                                            al carrito</a>
                                    <!-- @if (session()->exists('name') && session()->get('rol') === '0')
                                        <script>
                                            addProductoId.addEventListener("click", (e) => {
                                                console.log({{ $idProducto['id'] }});
                                                addProCart({{ $idProducto['id'] }}, 1, {{ $idProducto['newPrecio'] }},
                                                    '{{ $idProducto['nombre'] }}', '{{ $idProducto['imagen'] }}');
                                                

                                            });
                                        </script>
                                    @else
                                    @endif -->
                                    <button type="button"
                                        class="col-9 col-sm-9 col-md-12 col-lg-9 mb-3 btn btn--paymet--ver  btnEfectClick"
                                       v-if="!objUser" @click="msjInicieSesion()">Comprar ahora</button>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <small><i class="bi bi-shield-check"></i> Se abrirá en una nueva ventana recibe el producto
                                    que esperabas o te devolvemos tu dinero.</small>
                            </div>
                            <div class="">
                                <small class="txtViewProduct  fw-normal"> <i class="bi bi-award "></i> 12 meses de
                                    garantía de fábrica.</small>

                            </div>
                        </div>
                        <div class="col">

                            <div class="box--view--favorite pt-3 p-4 shadow-sm  rounded-3">
                                <div class="mb-4">
                                    <small class="text-center h5 fw-normal ">Información de la tienda</small>
                                </div>

                                <div class="text-center">
                                    <a class="navbar-brand" href="index.php"><img
                                            :src="'/storage/img/icons/tienda-de-reparacion.svg'"
                                            class="img-fluid imgInfoProductoView" alt=""></a>

                                    <!-- <span> {{ config('constants.nameProyect') }}</span> -->

                                </div>
                                <hr>

                                <div class="mb-3">
                                    <p> <small class="text-center h6 fw-normal">Medios de pago </small></p>
                                    <p> <small>Por aplicativos </small></p>


                                </div>

                                <div class="col  text-center mb-4">
                                    <a href="https://play.google.com/store/apps/details?id=pe.interbank.bie"
                                        target="_blank"> <img :src="'/storage/img/medio de pago/lukita.png'" class="imgInfoProductoView"
                                             alt="" ></a>
                                    <a href="https://play.google.com/store/apps/details?id=pe.com.interbank.mpay.customer&hl=es_PE&gl=US"
                                        target="_blank"> <img :src="'/storage/img/medio de pago/tunki.png'" class="imgInfoProductoView"
                                             alt="" ></a>

                                    <a href="https://www.bbva.pe/personas/servicios-digitales/lukita.html"
                                        target="_blank"> <img :src="'/storage/img/medio de pago/pling.jpg'" class="imgInfoProductoView"
                                             alt="" ></a>

                                    <a href="https://play.google.com/store/apps/details?id=com.bcp.innovacxion.yapeapp&hl=es_PE&gl=US"
                                        target="_blank"> <img :src="'/storage/img/medio de pago/yape.jpg'" class="imgInfoProductoView"
                                             alt="" ></a>

                                </div>
                                <div class="mb-1">
                                    <p class=""> <small class="text-center">Tarjetas de crédito y débito</small></p>
                                    <p class="mb-3 text-muted"> <small>¡Cuotas sin interés con bancos
                                            seleccionados!</small> </p>
                                </div>
                                <div class="col  text-center mb-3">
                                    <a href="https://www.bbva.pe/personas/servicios-digitales/banca-por-internet.html"
                                        target="_blank"> <img :src="'/storage/img/medio de pago/bbva.png'" class="imgInfoProductoView"
                                            alt="" ></a>
                                    <a href="https://www.bbva.pe/personas/servicios-digitales/banca-por-internet.html"
                                        target="_blank"> <img :src="'/storage/img/medio de pago/bbva.png'" class="imgInfoProductoView"
                                            alt="" ></a>
                                    <a href="https://bcpzonasegurabeta.viabcp.com/#/iniciar-sesion" target="_blank"><img
                                            :src="'/storage/img/medio de pago/bcp.png'" class="imgInfoProductoView" alt=""
                                            ></a>

                                    <a href="https://bancaporinternet.interbank.pe/" target="_blank"> <img
                                            :src="'/storage/img/medio de pago/interbank.png'" class="imgInfoProductoView" alt=""
                                            ></a>

                                    <a href="https://www.scotiabank.com.pe/Personas/Canales-digitales/canales/banca-por-internet"
                                        target="_blank"> <img
                                            :src="'/storage/img/medio de pago/scotiabank.png'" class="imgInfoProductoView" alt=""
                                            ></a>
                                </div>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#Mpayment"
                                    class="loudingLinkEfectClick">Conoce otros medios
                                    de pago</a>
                                <hr>
                            </div>
                        </div>
                    </div>
                    <hr class="mb-5">
                <!-- @endforeach -->
            </div>
        </div>
        <div id="modalAddProductCart"></div>
        <!-- {{-- <script src=""></script> --}} -->
        <!-- @include('User.modalPaymentCart') -->

        <!-- @include('User.modalDestino') -->
        <!-- @include('User.modelAddProCart') -->
        <add-product-cart-modal></add-product-cart-modal>
        
    </body>
</template>

<script>
import {msjInicieSesion} from '../js/msj.js';
import {validateUser} from '../js/methods.js';
import addProductCartModal from './addProductCartModal.vue';
import {addProductCart} from '../js/addProductCart.js';
export default {
    data(){
        return {
            objUser:'',
        }
    },
    props:{
        producto:{
            type:Object,
            required:true,
        },
    },
    components: { addProductCartModal },
    created(){

    },
    mounted(){
     this.objUser= validateUser(); // se valida el dato que retorna de la funcion que a sido exportado por el moduclo js {}
    },
    methods:{
        msjInicieSesion(){
            msjInicieSesion();
        },
         addProductCart(idProducto, cantidad, nameProduct, newPrecio, imgProduct) {
         addProductCart(idProducto, cantidad, nameProduct, newPrecio, imgProduct);
        },
    },
}
</script>

<style scoped>
.imgInfoProductoView{
    width:70px;
}
.textDistrito{
font-weight: 100;
}
.hers{
    font-size:25px;
}
/* 400px  */
</style>
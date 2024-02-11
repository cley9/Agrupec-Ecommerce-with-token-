<template>
    <div class="containerSearch">
        <div class="rowSearch">
            <div class="boxSearch boxProductSearch- box-efect- productoPageBox shadowProductoPage"
                v-for="itemSearch in searchMain" :key="itemSearch">
                <a :href="`/View-page/${itemSearch.id}`">
                    <img :src="`storage/img/Productos/${itemSearch.imagen}`" class="imgSearch mb-4" alt="">
                </a>
                <h5 class="card-title h6 title--box--pro textTitleProSearch">{{ itemSearch.nombre }}</h5>
                <div class="mb-1 mb-md-0 d-flex justify-content-between  mb-4-">
                    <span class="box--text--pre- text-dark- txtBoxPreBefore textPrecioProBefore"><del>S/
                            {{ itemSearch.precio }}
                        </del></span>
                    <span class="box--text--pre- text-dark textPrecioProAfter">S/
                        {{ itemSearch.newPrecio }}
                    </span>
                </div>
                <div class=" align-items-center d-flex mb-3">
                    <span class="h6 mb-0 text-muted fw-normal">
                        <small class="box--text--pre- h7 mb-0 text-muted fw-normal textCountProDis">
                            {{ itemSearch.cantidad }} disponibles </small>
                    </span>
                </div>
                <hr class="hrProductSearch ">
                <a @click="addProduct(itemSearch.id,1,itemSearch.nombre,itemSearch.newPrecio,itemSearch.imagen)" class="btn btn--view-add btn-sm btnAddProduct">Agregar </a>
            </div>
        </div>
    </div>
    <addProductCartModal/>
</template>

<script>
import addProductCartModal from './addProductCartModal.vue';
import {addProductCart,viewModalProductAddCart} from '../js/addProductCart.js';
export default {
    props: {
        // search-main
        searchMain: {
            type: Object,
            required: true,

        }
    },
    data() {
        return {}

    },
    components:{
        addProductCartModal,
    },
    mounted() {
        // console.log("h1111", this.searchMain);
    },
    methods: {
        addProduct(id,cantidad,nombre,newprecio,img){
            addProductCart(id,cantidad,nombre,newprecio,img);
        }
    }
}
</script>

<style scoped>
.containerSearch {
    display: flex;
    justify-content: center;
    align-content: center;
    /* background: blueviolet; */
}

.rowSearch {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    /* background: salmon; */
    gap: 52px 30px;
}

.boxSearch {
    /* background: orange; */
    padding: 16px 13px;
    border-color: #0D6EFD !important;
    border-radius: 8px;
}

.imgSearch {
    width: 100%;
}

.btnAddProduct {
    /* background: #0D6EFD; */
    width: 100%;
    margin-bottom: 10px;
}

.shadowProductoPage {
    box-shadow: 5px 10px 12px #e7eeee;
    border-radius: 6px;
    height: 384;
    /* border:1px solid #6C757D; */
    border: 1px solid #DFDFDF;
    transition: transform 0.2s ease-in-out;
    /* Añadido para una transición suave en ambos sentidos */
}

.shadowProductoPage:hover {
    border-radius: 6px;
    box-shadow: 5px 10px 12px #e0e7e7;
    transform: scale(1.04);
}

@media(width<=1168px){
.rowSearch{
    grid-template-columns: repeat(5,1fr) !important;
}
}

@media(width<=1040px){
.rowSearch{
    grid-template-columns: repeat(4,1fr) !important;
}
}

@media(width<=830px){
.rowSearch{
    grid-template-columns: repeat(3,1fr) !important;
}
}

@media(width<=620px){
.rowSearch{
    grid-template-columns: repeat(2,1fr) !important;
}
}

@media(width<=380px){
.rowSearch{
    gap: 30px 20px;
    grid-template-columns: repeat(2,1fr) !important;
}
}
</style>
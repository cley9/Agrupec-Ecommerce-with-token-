<template>
    <div class="row  row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-6">
        <div class="pt-4 mb-4 " v-for="item in productos" :key="item.id">
            <div class="card shadow box--produ--view">
                <a :href="`/View-page/${item.id}`">
                    <img :src="`/storage/img/Productos/${item.imagen}`" class="img-fluid card-img-top" height="210px"
                        width="100px" alt="">
                </a>
                <div class="card-body justify-content-between align-items-center">
                    <div class="d-flex  align-items-center ">
                        <h5 class="card-title title--box--pro-view txtBoxTitle">{{ item.nombre }}</h5>
                    </div>
                    <div class="mb-0 d-flex justify-content-between  ">
                        <span class="box--text--pre txtBoxPreBefore"><del>S/
                                {{ item.precio }}</del></span>
                        <span class="box--text--pre">S/ {{ item.newPrecio }}</span>
                    </div>
                    <div class=" align-items-center d-flex ">
                        <span class="h6 mb-0 text-muted fw-normal">
                            <small class="box--text--pre">{{ item.cantidad }}: disponibles </small> </span>
                    </div>
                    <hr class="hrProduView hrProductSearch">
                    <div class="text-center">

                        <a v-if="userObj"
                            class="btn--addCard--countMaster- btn--view-add  btn-sm text-dark viewCP btnEfectClick" id="d"
                            @click="addProductCart(item.id, 1, item.nombre, item.newPrecio, item.imagen)">Agregar</a>
                        <a v-if="!userObj" onclick="msjInicieSesion()"
                            class="btn btn--view-add btn-sm btnEfectClick">Agregar</a>
                        <a :href="`/View-page/${item.id}`"
                            class="btn btn--view-page btn-sm btnEfectClick btnViewPro">Ver</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import '../../js/methods.js';
// import MyComponent from '../components/data.vue';
export default {
    data() {
        return {
            productos: [],
            userName: '',
            userObj: [],
            userV: "",
        }
    },
    created() {
        // Intenta obtener el valor de 'name' de la sesión
        this.userName = localStorage.getItem('name') || ''; // Cambia a sessionStorage si es necesario
    },
    mounted() {// cuando ya eta creado se auto ejecuta si esta dentro de aqui
        this.producto();
    },
    //   name:'cartComponents',
    components: {
        // cart,
    },
    methods: {
        async producto() {
            const productList = await fetch("/view/productoView");
            if (productList.ok) {
                const productoJson = await productList.json();
                this.productos = productoJson.data.data;
                console.log(productoJson.data.data);
            }
            this.userObj = JSON.parse(localStorage.getItem("userObj"));
            if (this.userObj) {
                console.log("esta lleno");
            } else {
                console.log("esta vacio");
            }

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

            await viewModalProAddCart(cantidad, nameProduct, newPrecio, imgProduct);
        },

    },

}
</script>
  
<style></style>
<template>
    <registerProduct />
    <!-- <registerProduct></registerProduct> -->
    <div class="d-flex justify-content-end">
        <a href="{{ route('download.admin.pdf') }}" class="btn btn-success btn-sm">Export to PDF</a>
    </div>
    <div class="container mb-5 ">
        <div class="row d-flex justify-content-end ">
            <div class="mb-3 col-4 ">
                <form action="" id="searchProducto" class="frm--search--home-- ">
                    <label for="recipient-name" class="col-form-label">Producto a buscar:</label>
                    <div class="input-group mb-3 ">
                        <input type="text" class="form-control fNumRut" id="fProductoLista"
                            placeholder="Ingrese el nombre a buscar" required>
                        <button class="input-group-text btn btn-outline-secondary" id="fBtnSearchLista"><i
                                class="bi bi-search"></i> Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="container mb-5"><br>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-bordered text-center table-hover">
                    <thead class="table-dark">
                        <th>id</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>nuevo pre</th>
                        <th>Foto</th>
                        <th>Editar</th>
                    </thead>
                    <tbody id="dataProducto">
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-bordered text-center table-hover">
                    <thead class="table-dark">
                        <th>id</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>nuevo pre</th>
                        <th>Foto</th>
                        <th>Editar</th>
                    </thead>
                    <tbody>
                        <tr v-for="itemList in productAdmin.data" :key="itemList">
                            <td>{{ itemList.id }}</td>
                            <td>{{ itemList.nombre }}</td>
                            <td>S/ {{ itemList.precio }}</td>
                            <td>S/ {{ itemList.newPrecio }}</td>
                            <td>
                                <img :src="`storage/img/Productos/${itemList.imagen}`" class="imglistAdmin" alt="">
                            </td>
                            <td>
                                <a @click="msgUpdate(itemList)" class="mb-md-0 mb-2 btn btn-warning" data-bs-toggle="modal"
                                    data-bs-target="#updateProductModal"> <i class="bi bi-pencil"></i></a>
                                <a onclick="productDelete({{ $itemList.id }},'{{ $itemList.nombre }}','{{ $itemList.imagen }}')"
                                    class="btn btn-danger " id="delete-frm"> <i class="bi bi-trash"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <update-product :item-product="itemProductObj" />
</template>

<script>
import registerProduct from './modal/registerProducto.vue';
import updateProduct from './modal/updateProduct.vue';
export default {
    props: {
        productAdmin: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            itemProductObj: {},
        }
    },
    components: {
        registerProduct,
        updateProduct,
    },
    mounted() {
    },
    methods: {
        msgUpdate(productObj) {
            this.itemProductObj = productObj;
            // console.log("data --",productObj, " -- ",this.itemProductObj);
        }
    },
}
</script>

<style scoped>
.imglistAdmin {
    width: 40%;
}
</style>
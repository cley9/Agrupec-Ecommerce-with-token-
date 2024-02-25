<template>
  <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog mainUpdateProductModal">
        <div class="modal-content containerModalAddCatalogo">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar Producto </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                <form class="modal-body" method="post" action="" id="formUpdate"
                    enctype="multipart/form-data" @submit.prevent="updateProductSave">
                    <div class="row row-cols-md-3">
                        <div class=" mb-3">
                            <label for="recipient-name" class="col-form-label">Nombre del Producto:</label>
                            <input type="hidden" name="Pid" id="edIdUpdate" value="">
                            <input type="hidden" name="PimgGet" id="edImgUpdate" value="">
                            <input type="text" v-model="updateProduct.name" class="form-control" id="edNombre"
                                required />
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Precio del Producto:</label>
                            <input type="number" step="0.01" name="Pprecio" class="form-control" id="edPrecioA"
                                v-model="updateProduct.precio" required />
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Precio Nuevo :</label>
                            <input type="number" step="0.01" name="PnewPre" class="form-control" id="edPrecioNew"
                                v-model="updateProduct.precioNew" required />
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Descripcion de Producto:</label>
                            <input type="text" name="Pdescrip" class="form-control" id="edDescription" v-model="updateProduct.description"
                                required />
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Cantidad de Producto:</label>
                            <input type="number" name="Pcant" class="form-control" id="edCount" v-model="updateProduct.cantidad"
                                required />
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Peso del Producto:</label>
                            <div class="d-flex justify-content-between align-items-center">
                                <input type="number" step="0.01" name="Ppeso" class="form-control" id="edPeso"
                                    v-model="updateProduct.peso" required />
                                <span class="h5"> g </span>
                            </div>
                        </div>
                        <div class="mb-3 text-center">
                            <div class="col">
                                <label for="message-text" class="col-form-label">Foto del Producto</label>
                            </div>
                            <input type="hidden" name="srcImg" id="srcImagen" value="">
                            <img class="mb-3" :src="img" height="150" width="150" id="edPreviewImgUpdate" onerror="this.src='/storage/img/icons/arrastra-y-suelta.png'"
                                alt="Image preview..." />
                            <div class="mb-3">
                                <input type="file" class="form-control" name="imagen"
                                    id="edPicturUpdate" aria-describedby="fileHelp" @change="handleImg" accept="image/*" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <input type="file" class="form-control" id="edPicturUpdateB"
                                aria-describedby="fileHelp" name="imagenB" accept="image/*" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="submit" class="btn btn-primary" name="btnUpdate" id="btnUpdate"
                            value="Guardar">
                        <button type="reset" class="btn btn-warning">Borrar</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            id="exitProdu">Salir</button>
                    </div>
                </form>
        </div>
    </div>
</div>

</template>

<script>
import { getAdminObj } from '../../../js/admin/methods.js';

export default {
    props:{
        itemProduct:{
            type:Object,
            required:true,
        }
    },
    data(){
        return {
            imagen: '',
            updateProduct: { 
                id:'',
                name: '',
                precio: '',
                precioNew: '',
                description: '',
                cantidad: '',
                peso: '',
                imagen: ''
            },
            img:'',
        }
    },
    mounted(){
    },
    watch:{
        itemProduct(itemObj){
    this.updateProduct={
        id: this.itemProduct.id,
        name: this.itemProduct.nombre,
                precio: this.itemProduct.precio,
                precioNew:this.itemProduct.newPrecio,
                description: this.itemProduct.description,
                cantidad: this.itemProduct.cantidad,
                peso: this.itemProduct.peso,
                imagen: this.itemProduct.imagen
            }
            this.img= `./storage/img/productos/${this.updateProduct.imagen}`;
            // console.log("new watch ",itemObj, "-- ",itemObj.nombre);
        }
    },
    methods:{
        handleImg(event){
            const file = event.target.files[0];
            if (file) {
                this.img = file.name;
                this.updateProduct.imagen = file;
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.img = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        async updateProductSave(){
            const formDataUpdate = new FormData();
            formDataUpdate.append('id', this.updateProduct.id);
            formDataUpdate.append('name', this.updateProduct.name);
            formDataUpdate.append('precio', this.updateProduct.precio);
            formDataUpdate.append('precioNew', this.updateProduct.precioNew);
            formDataUpdate.append('description', this.updateProduct.description);
            formDataUpdate.append('peso', this.updateProduct.peso);
            formDataUpdate.append('cantidad', this.updateProduct.cantidad);
            formDataUpdate.append('imagen', this.updateProduct.imagen);
            const token = await fetch('/token');
            const tokenMain = await token.json();
            const registroRes = await fetch("/api/admin/Admin-update", {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': tokenMain.token,
                    Authorization: `Bearer ${getAdminObj()}`,
                },
                body: formDataUpdate
            });
            const dataResponse = await registroRes.json();
            console.log("data --",dataResponse);
            if(dataResponse.status == 200){
                $('#updateProductModal').modal('hide');
            }
            console.log("data ",this.updateProduct);
        }
    }
}
</script>

<style scoped>
.modal-dialog {
    max-width: 800px;
}
</style>
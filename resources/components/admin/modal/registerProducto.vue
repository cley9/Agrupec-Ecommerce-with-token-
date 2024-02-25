<template>
    <div class="text-center pt-5">
        <button type="button" id="btnRegistroPro" class="btn btn-success" data-bs-toggle="modal"
            data-bs-target="#modelAgregar" data-bs-whatever="@fat" data-bs-backdrop="static"
            data-bs-keyboard="false">Agregar Producto</button>
    </div>
    <div class="modal fade  " id="modelAgregar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  ">
            <div class="modal-content containerModalAddProduct">
                <div class="modal-header text-center d-flex justify-content-center">
                    <h5 class="modal-title " id="exampleModalLabel">Agregar Producto a la Tienda </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form method="post" action="" id="formRegistroPro" enctype="multipart/form-data"
                        @submit.prevent="registroAdmin">
                        <div class="row row-cols-md-2 row-cols-1">
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Nombre del Producto:</label>
                                <input type="text" name="Pnombre" v-model="registroProduct.name" id="nameP"
                                    class="form-control" placeholder="Ingrese el nombre del producto" required />
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Precio del Producto:</label>
                                <input type="number" step="0.01" name="Pprecio" v-model="registroProduct.precio"
                                    class="form-control" placeholder="Ingrese el precio del producto" required />
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Precio Nuevo :</label>
                                <input type="number" step="0.01" name="PnewPre" v-model="registroProduct.precioNew"
                                    class="form-control" placeholder="Ingrese el precio  nuevo del producto" required />
                            </div>

                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Descripcion de Producto:</label>
                                <input type="text" name="Pdescrip" v-model="registroProduct.description"
                                    class="form-control" placeholder="Ingrese la descripcion del producto" required />
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Cantidad de Producto:</label>
                                <input type="number" name="Pcant" v-model="registroProduct.cantidad" class="form-control"
                                    placeholder="Ingrese la cantidad del producto" required />
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Peso de Producto:</label>
                                <div class="d-flex justify-content-between align-items-center">
                                    <input type="number" step="0.01" name="Ppeso" v-model="registroProduct.peso"
                                        class="form-control" placeholder="Ingrese el peso del producto" required />
                                    <span class="h5"> g </span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="col">
                                    <label for="message-text" class="col-form-label">Foto del Producto Principal</label>
                                </div>
                                <img class="mb-3" :src="imagen" id="edPreviewImg" height="150" width="320"
                                    onerror="this.src='/storage/img/icons/arrastra-y-suelta.png'"
                                    alt="Imagen prevista..." />
                                <div class="mb-3">
                                    <input type="file" class="form-control" id="archivo" name="imagen" @change="handleFile"
                                        aria-describedby="fileHelp" accept="image/*" required />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <input type="submit" class="btn btn-primary" name="btnsave" id="btnSavei" value="Guardar">
                            <button type="reset" class="btn btn-warning" id="d">Borrar</button>
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                                aria-label="Close">Salir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAdminObj } from '../../../js/admin/methods.js';
export default {
    data() {
        return {
            imagen: '',
            registroProduct: {
                name: '',
                precio: '',
                precioNew: '',
                description: '',
                cantidad: '',
                peso: '',
                imagen: ''
            }
        }
    },
    mounted() {
        // console.log("data ==", this.registroProduct);
        // console.log("token", getAdminObj());
    },
    methods: {
        handleFile(event) {
            const file = event.target.files[0];
            if (file) {
                this.imagen = file.name;
                this.registroProduct.imagen = file;
                const reader = new FileReader(); // Crea un objeto FileReader
                // Configura la función de devolución de llamada cuando la lectura del archivo se complete
                reader.onload = (e) => {
                    // Actualiza la fuente de la imagen con la URL del archivo leído
                    // document.getElementById('previewImg').src = e.target.result;
                    this.imagen = e.target.result;
                };
                // Lee el archivo como una URL de datos
                reader.readAsDataURL(file);
            }
        },
        async registroAdmin() {
            const formData = new FormData();
            formData.append('name', this.registroProduct.name);
            formData.append('precio', this.registroProduct.precio);
            formData.append('precioNew', this.registroProduct.precioNew);
            formData.append('description', this.registroProduct.description);
            formData.append('peso', this.registroProduct.peso);
            formData.append('cantidad', this.registroProduct.cantidad);
            formData.append('imagen', this.registroProduct.imagen);
            const token = await fetch('/token');
            const tokenMain = await token.json();
            const registroRes = await fetch("/api/admin/Admin-registro", {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': tokenMain.token,
                    Authorization: `Bearer ${getAdminObj()}`,
                },
                body: formData
            });
            const dataResponse = await registroRes.json();
            if(dataResponse.status == 200){
                $('#modelAgregar').modal('hide');
            }
        },

    },

}
// }
</script>

<style scoped>
.modal-dialog {
    max-width: 700px;
}
</style>
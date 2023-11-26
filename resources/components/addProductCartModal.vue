<template>
    <!-- <h3>this is dev cley</h3> -->
    <section class="modal--form--data">
        <div class="modal__container">
            <div class="btn--close icons--close">
                <i class="bi bi-x-lg text-bolder"></i>
            </div>
            <h2 class="modal__title fw-normal "><i class="bi bi-check-circle-fill me-3"></i>Producto agregado a tu carrito
            </h2>
            <div class="row item--viewPro">
                <div class="col-4 col-md-2 col-sm-2  img--min">
                    <h6 class="icons--countProd " id="outCount">1</h6>
                    <div id="outImg" class="img--cart-modal"></div>
                </div>
                <div class="col-8 col-md-10">

                    <h6 class="mb-4  fw-normal" id="outNombre">Chalked aerosol rosa invierno</h6>
                    <div class="  d-flex justify-content-between align-items-center">
                        <span class=" text-muted fw-normal" id="outCodigo">c3323</span>
                        <span class=" text-dark fw-bolder outPrecio__" id="outPrecio">S/ 3</span>
                    </div>
                </div>
            </div>
            <div class="btn--optionCard ">
                <a class="modal__close btnEfectClick-">Seguir comprando</a>
                <a class="modal__viewPro btnEfectClick" @click="cartWebSite()">Ir a mi carrito</a>
                <!-- <a href="/Cart" class="modal__viewPro btnEfectClick" @click="cartWebSite()">Ir a mi carrito</a> -->
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    created() {

    },
    mounted() {
        // viewModalProductAddCart();
    },
    methods: {
        cartWebSite() {
            console.log("hola");
            const token = JSON.parse(localStorage.getItem('userObj'));
            console.log('----- ga token ', token);
            console.log('... ', token.token);

            fetch('/Cart', {
                method: "GET",
                headers: {
                    authorization: `Bearer ${token.token}`, // Corrige aquí añadiendo el espacio después de "Bearer"
                }
            })
                .then(response => {
                    // Verifica si la respuesta no es nula
                    if (!response) {
                        console.error('La respuesta de la solicitud fetch es nula');
                        return;
                    }

                    // Verifica si la respuesta fue exitosa (código 2xx)
                    if (response.ok) {
                        // Redirecciona al usuario al carrito después de la solicitud exitosa
                        window.location.href = '/Cart';
                    } else {
                        // Maneja errores aquí si es necesario
                        console.error('Error en la solicitud fetch:', response.status, response.statusText);
                    }
                })
                .catch(error => {
                    // Maneja errores de red u otros aquí
                    console.error('Error en la solicitud fetch:', error);
                });
        },
    }
}
</script>
  
<style></style>
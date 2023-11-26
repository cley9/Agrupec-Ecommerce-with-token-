// require('./bootstrap');
import './bootstrap';

import  { createApp } from "vue";
import promocion from '../components/promocion.vue'; 
import promoListProduct from '../components/promocionListProducto.vue';
import beneficio from '../components/beneficio.vue';
// import openModala from '../components/openModal.vue';
import openModala from '../components/openModal.vue';
import thisCley from '../components/cleyModal.vue';
// import countC from '../components/count.vue';
import loginUser from '../components/loginUserModal.vue';
import productoView from '../components/productoView.vue';
// import modal  from '../components/modal.vue';

// createApp(closeModal).mount('#closeModal');
createApp(thisCley).mount('#thisCley');
// import closeModal from '../components/closeModal.vue';
createApp(openModala).mount('#openModala');

// import juan from '../components/modal.vue';
// createApp(juan).mount('#dee');
// createApp(modal).mount('#modal');
// createApp(loginUser).mount('#loginUser');
createApp(productoView).mount("#productoView");
createApp(promocion).mount("#promocion");
createApp(promoListProduct).mount("#promoListProducto");
createApp(beneficio).mount('#beneficio');

// createApp(countC).mount('#count');
import './viewPassword';
import './btn-up';
import './addCartProduct';
import './msj';
import './logicAgrupec';

// import './todo';
// {{-- <script src="{{ asset('js/btn-up.js') }}"></script> --}}

// import './productoSearchAdmin';
// console.log("home");

{/* <script src="{{ asset('js/msj.js') }}"></script>
<script src="{{ asset('js/dataPictur.js') }}"></script>
<script src="{{ asset('js/addCart.js') }}"></script>
<script src="{{ asset('js/btn-msg.js') }}"></script>
<script src="{{ asset('js/btn-up.js') }}"></script>
<script src="{{ asset('js/viewPassword.js') }}"></script> */}

// this va en layout 
{/* <script src="{{ asset('js/msj.js') }}"></script>
<script src="{{ asset('js/dataPictur.js') }}"></script>
<script src="{{ asset('js/addCart.js') }}"></script>
<script src="{{ asset('js/btn-msg.js') }}"></script>  */}





// nota de body











<div class="row  row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 bg-info"  v-for="item in productos" :key="item.id">

<div class="card shadow box--produ--view">
                          <a :href="`/View-page/${item.id}`">
                              <img :src="`/storage/img/Productos/${item.imagen}`" class="img-fluid card-img-top" height="210px" width="100px" alt="">
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
  
                                      <a v-if="userObj" class="btn--addCard--countMaster- btn--view-add  btn-sm text-dark viewCP btnEfectClick"
                                          id="d" @click="addProductCart(item.id , 1)"
                                           >Agregar user</a>
                                      <a v-if="!userObj" onclick="msjInicieSesion()" class="btn btn--view-add btn-sm btnEfectClick">Agregar</a>
                                  <a :href="`/View-page/${item.id}`"
                                      class="btn btn--view-page btn-sm btnEfectClick btnViewPro">Ver</a>
                              </div>
                          </div>
                      </div>


                      <!-- <script>
import { ref } from 'vue'
import Modal from '../components/ga.vue'

export default {
  components: {
    Modal
  },
  setup(){
    const isOpen = ref(false)

    const openModal = () => {
      isOpen.value = true
      //HERE OTHER CHANGES

      return isOpen.value
    }

    return{
      isOpen, openModal
    }
  }
}

</script>

<template>
  <button @click="openModal">
    Open Modal
  </button>
  <Modal :open="isOpen" @close="isOpen = !isOpen" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->




open modal
<template>
    <div>
      <button @click="openModal">Abrir Modal</button>
      <modal v-if="showModal" @closeModal="closeModal">
        <!-- Contenido del modal -->
        <h2>Mi Modal</h2>
        <p>Este es el contenido de mi modal.</p>
      </modal>
    </div>
  </template>
  
  <script>
  import Modal from "@/components/ga.vue";
  
  export default {
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
    },
    components: {
      Modal,
    },
  };
  </script>














<style>


<!--  -->
display: grid; 
/* grid-template-columns:max-content max-content; esta propiedad no es conveniente para las comulan sino el auto , auto para que sea dos columnas del mismo tamaño */
  /* .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
} */

place-items: center; pra centrar los item de una columna
text-align:center  es par centrar == equivalente a text-center de bootstraps 
display: grid;
    place-content: center;  /*pra centra los tesxtos sin uso del div */


</style>

grid-template-columns: auto auto; /* Dos columnas de ancho automático */
display: grid; /* Utilizamos grid para las columnas internas */


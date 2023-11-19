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
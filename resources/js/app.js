// require('./bootstrap');
import './bootstrap';

// my scripts
// function msjInicieSesion() {
//     // console.log("home");
//        console.log(123);
//       // Swal.fire({
//       //   title: ' Debes de iniciar sesi&oacute;n para agregar ',
//       //   text: 'Gracias por entender',
//       //   icon: 'info',
//       //   showConfirmButton:false,
//       //   timer: 2000
//       //   })
//     }
// import a from  './msj.js';
// console.log(a);
// require('./bootstrap');
// import './bootstrap';
// my scripts
// import '../../public/js/msj.js';
// import msj from './msj';
// msj.msjInicieSesion();

// af
// import './msj';
// import './dataPictur';
// import './addCart';
// import './btn-msg';

import  { createApp } from "vue";

import promocion from '../components/promocion.vue'; 
import promoListProduct from '../components/promocionListProducto.vue';
import beneficio from '../components/beneficio.vue';
import loginUser from '../components/loginUserModal.vue';
import loginAdmin from '../components/loginAdminModal.vue';
import producto from '../components/productoView.vue';
import productoList from '../components/productoList.vue';
import productoSlayderHome from '../components/productoSlayderHome.vue';
// import cley from '../components/addCart.vue';
// createApp(cley).mount('#cal');
createApp(productoSlayderHome).mount('#productoSlayderHome');
createApp(productoList).mount('#productoList');
createApp(producto).mount('#producto');
createApp(loginUser).mount('#loginUser');
createApp(loginAdmin).mount('#loginAdmin');
createApp(promocion).mount("#promocion");
createApp(promoListProduct).mount("#promoListProducto");
createApp(beneficio).mount('#beneficio');

import './metod.js';
// import './viewPassword';
// import './btn-up';
// import './addCartProduct';
// import './msj';
// import './logicAgrupec';

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
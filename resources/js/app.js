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
// import App from './App.vue';

import promocion from '../components/productoBaner.vue'; 
import promoListProduct from '../components/promocionListProducto.vue';
import beneficio from '../components/beneficio.vue';
import loginUser from '../components/loginUserModal.vue';
import loginAdmin from '../components/loginAdminModal.vue';
import producto from '../components/productoView.vue';
import productoList from '../components/productoList.vue';
import productoSlayderHome from '../components/productoSlayderHome.vue';
import gridPrueba from '../components/pruebaGrid.vue';
import hora from '../components/hora.vue';
import productoCategoria from '../components/productoCategoria.vue';
import productoTendencia from '../components/productoTendencia.vue';
import productoPage from '../components/productoPage.vue';
import addProductCartModal from '../components/addProductCartModal.vue';
import cartPage from '../components/cartPage.vue';
import viewPage from '../components/viewPage.vue';
// 
import logoutUserLink from '../components/logoutUserLink.vue';

// after un solo createapp
// const app=createApp(App);
const app=createApp();
// app.components('name_componponente', elModulo);
// Registrar los componentes globalmente
app.component('promocion', promocion);
app.component('promoListProducto', promoListProduct);
// app.component('productoBaner', productoBaner);
app.component('beneficio', beneficio);
// app.component('loginUser', loginUser);
// app.component('loginAdmin', loginAdmin);
// app.component('productoView', productoView);
app.component('grid',gridPrueba);
app.component('viewPage', viewPage)
app.component('productoList', productoList);
app.component('productoSlayderHome', productoSlayderHome);
// app.component('pruebaGrid', pruebaGrid);
app.component('hora', hora);
app.component('productoCategoria', productoCategoria);
app.component('productoTendencia', productoTendencia);
app.component('productoPage', productoPage);
// app.component('addProductCartModal', addProductCartModal);
app.component('appProductCartModal',addProductCartModal);
app.component('cartPage', cartPage);
app.mount('#app'); // elemento especifico 

// befere creapp por cada individual
// createApp(modalAddProductCart).mount('#modalAddProductCart');
// createApp(productoPage).mount('#productoPage');
// createApp(productoTendencia).mount('#productoTendencia');
// createApp(productoCategoria).mount('#productoCategoria');
// createApp(hora).mount('#hora');
// createApp(gridPru).mount('#grid');
// createApp(productoSlayderHome).mount('#productoSlayderHome');
// createApp(productoList).mount('#productoList');
// createApp(producto).mount('#producto');
createApp(loginUser).mount('#loginUser');
createApp(loginAdmin).mount('#loginAdmin');
createApp(logoutUserLink).mount('#logout');
// createApp(promocion).mount("#productoBaner");
// createApp(promoListProduct).mount("#promoListProducto");
// createApp(beneficio).mount('#beneficio');

import './methods.js';
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
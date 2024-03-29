// require('./bootstrap');
import './bootstrap';
import  { createApp } from "vue";

import productoBaner from '../components/productoBaner.vue'; 
import promoListProduct from '../components/promocionListProducto.vue';
import beneficio from '../components/beneficio.vue';
import loginUser from '../components/loginUserModal.vue';
import loginAdmin from '../components/loginAdminModal.vue';
import productoHome from '../components/productoHome.vue';
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
import layout from '../components/layout.vue';
import navApp from '../components/navApp.vue';
import filterPage from '../components/filterPage.vue';
import btnHigh from '../components/btnHigh.vue';
import perfilPage from '../components/perfilPage.vue';
import registroUser from '../components/registroUserModal.vue';
import recuperacionCuenta from '../components/recuperacionCuentaModal.vue';
import search from '../components/search.vue';

// UI and UX for admin
import listProductAdmin from '../components/admin/listProduct.vue'; 
// import updateProductAdmin from '../components/admin/modal/updateProduct.vue'; 
// const app=createApp(App);
const app=createApp();
app.component('btnHigh',btnHigh);
app.component('layout',layout);
app.component('navApp', navApp);
app.component('loginUser',loginUser);
app.component('loginAdmin',loginAdmin);
app.component('productoBaner', productoBaner);
app.component('promoListProducto', promoListProduct);
app.component('beneficio', beneficio);
app.component('productoHome', productoHome);
app.component('grid', gridPrueba);
app.component('viewPage', viewPage)
app.component('productoList', productoList);
app.component('productoSlayderHome', productoSlayderHome);
app.component('hora', hora);
app.component('productoCategoria', productoCategoria);
app.component('productoTendencia', productoTendencia);
app.component('filterPage', filterPage);
app.component('productoPage', productoPage);
app.component('appProductCartModal',addProductCartModal);
app.component('cartPage', cartPage);
app.component('perfilPage', perfilPage);
app.component('registroUser',registroUser);
app.component('recuperacionCuenta',recuperacionCuenta);
app.component('search',search);
// admin component 
app.component('listProductAdmin',listProductAdmin);
// app.component('listProductAdmin',listProductAdmin);
app.mount('#app'); // elemento especifico 

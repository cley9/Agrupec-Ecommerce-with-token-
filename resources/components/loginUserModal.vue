<template>
    <!-- @include('User.modalRegistro') -->
  <!-- @include('User.moldalRecuperarCuenta') -->
  <div class="modal fade modal-destino boxContainerModalUser modalEfectGlass" id="loginUserModal" aria-hidden="true" aria-labelledby="loginUserM" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal--frm--userLog">
    <div class="modal-content ">
        <form class="shadow form--frm--userLog col-md-12 col-12 p-4 rounded-3" id="formLoginUser" action=""
            method="POST" @submit.prevent="envioUser">
            <h2 class="fw-normal text-center mb-4">Iniciar sesion</h2>
            <div class="mb-3">
                <input type="email" class="form-control input--frm--userLog" id="emailLoginUser"  v-model="formData.email"
                    placeholder="Correo electronico " required />
            </div>
            <div class="mb-3">
                <input :type="passwordType" class="form-control input--frm--userLog" id="passwordLoginUser"
                v-model="formData.password" placeholder="Clave" required />
                <img :src="imgShowPassword" class="frm--loginUser--img imgPasswordLoginUser"
                    id="imgPassLoginUser" @click="showPassword" alt="">
                    
            </div>
            <div class="d-flex justify-content-center  btnBodyLoginUser">
                    <button type="submit" class="btn col-12 btn-primary btnIniciarSesion">Iniciar sesion</button>
                </div>
            <div class="mb-3 text-center">
                <a href="login/google" class="form-control- mb-3 googleBody- "><img
                        :src="`/storage/img/icons/logoGoogle.png`" alt=""
                        class="logoSesion me-2"> </a>
                <a href="#" class="form-control- mb-3 facebookBody- "><img
                        :src="`/storage/img/icons/logoFb.svg`" width="30px"
                        class="logoSesion img-fluid me-2" alt=""></a>
            </div>
            <hr>
            <div class="mb-4 text-center">
                <a class="text-primary linkModal nameTitle" data-bs-target="#registrarse" data-bs-toggle="modal"
                    data-bs-dismiss="modal">¿Eres nuevo?,Registrate Aqui.</a>
                <a class="text-primary linkModal nameTitle" data-bs-target="#recuperarCuenta" data-bs-toggle="modal"
                    data-bs-dismiss="modal">¿Olvidaste tu contraseña?</a>
            </div>
        </form>
    </div>
  </div>
  </div>
  <registro-user></registro-user>
  <recuperacion-cuenta></recuperacion-cuenta>
  </template>
  
  <script>
//   import mark from '../js/metod.js';  // esto es para usar con 1 y no recomendable 
  import {msjOkUser, msjError} from '../js/msj.js';// this is for use por monto de funciones
  export default {
  data() {
    return {
        passwordType:"password",
        imgShowPassword:"/storage/img/icons/eye-slash-fill.svg",
        formData: {
            email: "",
            password: "",
        },
        objToken:[],
        // get:"",
    }
  },
  // mounted:{
  
  // },
  methods: {
    showPassword(){
        this.passwordType=="password"? this.passwordType="text": this.passwordType="password";
        this.imgShowPassword=="/storage/img/icons/eye-slash-fill.svg" ? this.imgShowPassword="/storage/img/icons/eye-fill.svg" :this.imgShowPassword="/storage/img/icons/eye-slash-fill.svg";
    },
    async envioUser() {
  
        const data = {
            email: this.formData.email,
            password: this.formData.password
        };
        const token = await fetch('/token');
        const tokenMain = await token.json();
        // console.log(tokenMain.token);
        const response = await fetch('/loginLocalUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': tokenMain.token, // Reemplaza 'tu_token_csrf_aqui' con tu token CSRF
            },
            body: JSON.stringify(data)
        });
        const validateUser = await response.json();
        // console.log(validateUser.status);
        if (validateUser.status == 200) {
            const userObj=validateUser;
            // const userObj=validateUser.user[0];
            // console.log("data ",userObj);
            userObj.userValidate="true";
          localStorage.setItem("userObj", JSON.stringify(userObj));
            // localStorage.setItem("userObj", JSON.stringify(validateUser.user[0]));
            // console.log("si", validateUser.user[0]);
            msjOkUser();
            // mark();
                location.href = '/';
        } else {
            // console.log("usuario no valido o contraseña incorrecta");
            msjError();
        }
    },
  },
  
  }
  </script>
  
<style scoped>
  .linkModal{
    cursor: pointer;
  }
  .nameTitle {
  text-decoration: none !important;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;
  padding: 8px;
}
</style>
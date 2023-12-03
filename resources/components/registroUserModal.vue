<template>
    <div class="modal fade modal-general modalEfectGlass" id="registrarse" aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal--frm--userLog">
            <div class="modal-content ">
                <form class="shadow form--frm--userRegistro col-md-12 col-12 p-4 rounded-3" method="POST"
                    @submit.prevent="createUser">
                    <h2 class="fw-normal text-center mb-4">Crear Cuenta</h2>
                    <div class="mb-3">
                        <input type="text" class="form-control input--frm--userLog inputName" v-model="registro.name"
                            placeholder="Ingrese su nombre" required />
                    </div>
                    <div class="mb-3 groud--email">
                        <input type="email" class="form-control  input--frm--userLog inputEmail" id="inputEmail"
                            v-model="registro.email" placeholder="Tu correo electronico " required />
                        <span class="text--frm--msgVacio">El correo que ingresastes ya existe , porfavor ingrese otro correo
                            para continuar con el registro, gracias.</span>
                        <!-- {{--  <i class="bi bi-x-circle-fill icon--frm--vacio " ></i>  --}} -->
                        <i class="bi bi-check2-circle icon--frm--vacio"></i>
                        <!-- {{-- <span class="text--frm--msgVacio" id="bienGroud">Correo electronico correcto</span>  --}} -->
                    </div>
                    <div class="mb-3">
                        <input :type="passwordType" class="form-control input--frm--userLog inputPass1"
                            v-model="registro.password" id="registroUserPassword" placeholder="Ingresa la contraseña"
                            required />
                        <!-- <img src="{{ asset('storage/img/icons/eye-slash-fill.svg') }}" class="frm--loginUser--img"
                        id="imgPassLoginUser" onclick="mostrar()" alt=""> -->
                        <img :src="imgShowPassword" class="frm--loginUser--img imgPasswordLoginUser" id="imgPassRecordUser"
                            @click="showPassword" alt="">
                    </div>
                    <div class="mb-4">
                        <input :type="passwordTypeTwo" class="form-control input--frm--userLog inputPass2"
                            id="registroUserPasswordB" v-model="registro.password_confirmation"
                            placeholder="Vuelva a ingresar su contraseña" required />
                        <!-- <img src="{{ asset('storage/img/icons/eye-slash-fill.svg') }}" class="frm--loginUser--img"
                        id="imgPassLoginUserB" onclick="mostrarB()" alt=""> -->
                        <img :src="imgShowPasswordTwo" class="frm--loginUser--img imgPasswordLoginUser"
                            id="imgPassRecordUser" @click="showPasswordTwo" alt="">
                    </div>

                    <div class="mb-4 form-check">
                        <input type="checkbox" class="form-check-input" id="checkTermino1" required />
                        <label class="form-check-label" for="checkTermino1">Acepto los Terminos y Condiciones</label>
                    </div>
                    <div class="mb-3 d-flex justify-content-center">
                        <button class="btn col-12 btn-primary btnIniciarSesion">Registrar</button>
                        <!-- <a class="btn col-12 btn-primary btnIniciarSesion" id="validarEmail" @click="createUser()">Registrar</a> -->
                    </div>

                    <hr class="" id="formDiv">
                    <div class="mb-3 text-center" id="formOpcion">
                        <h6>¿Cambiaste de opinión? <a class="text-primary textRegistration"
                                data-bs-target="#loginUserModal" data-bs-toggle="modal" data-bs-dismiss="modal">Iniciar
                                sesión</a></h6>
                    </div>
                </form>
                <!-- <a class="btn col-12 btn-primary btnIniciarSesion" id="validarEmail" @click="registro()">Registrar</a> -->

            </div>
        </div>
    </div>
    <!-- <login-user></login-user> -->
</template>

<script>
import { msjOkUser, msjError, msjCreateUser, msjCreateUserError } from '../js/msj.js';

export default {
    props: {
        // imgShowPassword:"",
        // imgShowPassword:"/storage/img/icons/eye-slash-fill.svg",

    },
    data() {
        return {
            passwordType: '',
            imgShowPassword: "/storage/img/icons/eye-slash-fill.svg",
            passwordTypeTwo: '',
            imgShowPasswordTwo: "/storage/img/icons/eye-slash-fill.svg",
            registro: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
        }
    },
    methods: {
        showPassword() {
            this.passwordType == "password" ? this.passwordType = "text" : this.passwordType = "password";
            this.imgShowPassword == "/storage/img/icons/eye-slash-fill.svg" ? this.imgShowPassword = "/storage/img/icons/eye-fill.svg" : this.imgShowPassword = "/storage/img/icons/eye-slash-fill.svg";
        },
        showPasswordTwo() {
            this.passwordTypeTwo == "password" ? this.passwordTypeTwo = "text" : this.passwordTypeTwo = "password";
            this.imgShowPasswordTwo == "/storage/img/icons/eye-slash-fill.svg" ? this.imgShowPasswordTwo = "/storage/img/icons/eye-fill.svg" : this.imgShowPasswordTwo = "/storage/img/icons/eye-slash-fill.svg";
        },
        async createUser() {
            // console.log("data registro", " objeto ", this.registro);
            if (this.registro.passwordOne === this.registro.passwordTwo) {
                // console.log("true pass");
                const token = await fetch('/token');
                const tokenMain = await token.json();
                const data = await fetch("/createUser", {
                    method: 'POST',
                    headers: {
                        // Authorization: `bearer ${token}`,
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': tokenMain.token, // Reemplaza 'tu_token_csrf_aqui' con tu token CSRF
                    },
                    body: JSON.stringify(this.registro)
                });

                const request = await data.json();
                if (request.status == 200) {
                    msjCreateUser();
                    // ---------------------------
                    const data = {
                        email: this.registro.email,
                        password: this.registro.password
                    };
                    const response = await fetch('/loginLocalUser', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': tokenMain.token, // Reemplaza 'tu_token_csrf_aqui' con tu token CSRF
                        },
                        body: JSON.stringify(data)
                    });
                    const validateUser = await response.json();
                    if (validateUser.status == 200) {
                        const userObj = validateUser;
                        userObj.userValidate = "true";
                        localStorage.setItem("userObj", JSON.stringify(userObj));
                        // console.log("data ", userObj);
                        location.href = "/";
                    }
                    // -------------------------------------
                    // const userObj=request;
                    // userObj.userValidate="true";
                    // localStorage.setItem("userObj",JSON.stringify(userObj));
                    // localStorage.setItem("userObj",JSON.stringify(request));
                    // console.log("user iniciado",request);
                    // location.href="/";
                    // console.log("data total insert", userObj);
                }
                // console.log("creado user", request);
            } else {
                msjCreateUserError();
                // console.log("false pass");
            }
        },
    },

}
</script>

<style></style>
<template>
<div class="modal fade modal-destino modalEfectGlass" id="loginAdminModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
    tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal--frm--adminLog ">
        <div class="modal-content ">
            <form class="shadow  form--frm--adminLog col-md-12 col-12 p-4 rounded-3" id="formLoginAdmin" action=""
            method="POST" @submit.prevent="envioAdmin">
            <h2 class="fw-normal text-center titleFormLoginUser">Iniciar sesion</h2>
            <div class="mb-3">
                <input type="email" class="form-control input--frm--adminLog" id="emailLoginAdmin"  v-model="formData.email"
                    placeholder="Correo electronico " required />
            </div>
            <div class="mb-3">
                <input :type="passwordType" class="form-control input--frm--adminLog" id="passwordLoginAdmin"
                v-model="formData.password" placeholder="Clave" required />
                <img :src="imgShowPassword" class="frm--loginUser--img imgPasswordLoginAdmin"
                    id="imgPassLoginAdmin" @click="showPassword" alt="">
                    
            </div>
            <div class="mb-3 d-flex justify-content-center pt-3">
                    <button type="submit" class="btn col-12 btn-primary btnIniciarSesion">Registrar</button>
                </div>
        </form>
    </div>
  </div>
  </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
        passwordType:"password",
        imgShowPassword:"storage/img/icons/eye-slash-fill.svg",
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
        this.imgShowPassword=="storage/img/icons/eye-slash-fill.svg" ? this.imgShowPassword="/storage/img/icons/eye-fill.svg" :this.imgShowPassword="storage/img/icons/eye-slash-fill.svg";
    },
    async envioAdmin() {
  
        const data = {
            email: this.formData.email,
            password: this.formData.password
        };
        const token = await fetch('/token');
        const tokenMain = await token.json();
        console.log(tokenMain.token);
        const response = await fetch('/loginAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': tokenMain.token, // Reemplaza 'tu_token_csrf_aqui' con tu token CSRF
            },
            body: JSON.stringify(data)
        });
        const validateUser = await response.json();
        console.log(validateUser.status);
        if (validateUser.status == 200) {
            const userObj=validateUser;
            // const userObj=validateUser.user[0];
            userObj.userValidate="true";
          localStorage.setItem("AdminObj", JSON.stringify(userObj));
            // localStorage.setItem("userObj", JSON.stringify(validateUser.user[0]));
            console.log("si", validateUser.user[0]);
            msjOkUser();
                location.href = '/';
        } else {
            console.log("usuario no valido o contraseña incorrecta");
            msjError();
        }
    },
  },
  
  }
  </script>
  
  <style scoped>
</style>
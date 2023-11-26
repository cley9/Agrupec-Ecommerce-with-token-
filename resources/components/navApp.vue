<template>
    <nav class="navbar navbar-light bg-light fixed-top navBarHome">
        <div class="container-fluid navHeadDising">
            <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#"> Agrupec</a>
            <div class="bg-warning-">
                <div class="sidebar-social boxCartIcomBody" v-if="userObj">
                    <a href="/Cart" class="cart" id="cartHover" title="Facebook" rel="nofollow"><i
                            class="fas fa-shopping-cart icomCartBody"></i>
                        <span class="badge numCartPro" id="cartMenu">12</span>
                    </a>
                </div>
                <a href="" data-bs-toggle="modal" data-bs-target="#loginUserModal" v-if="!userObj"><img
                        :src="'/storage/img/icons/userLogin.png'" class="icon--loginMin" alt=""></a>
                <div class="offcanvas offcanvas-start gb-info" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu </h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav row justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item"> <a class="nav-link active icons--style--raya"
                                    href="/">Home</a></li>
                            <li class="nav-item"> <a class="nav-link active icons--style--raya"
                                    href="/Producto-view">Ver Producto</a></li>
                            <li class="nav-item"> <a class="nav-link active icons--style--raya"
                                    href="/Nosotros">Nosotros</a>
                            </li>
                            <li class="nav-item"> <a class="nav-link active icons--style--raya"
                                    href="/Ayuda">Atencion</a></li>
                            <li class="nav-item"> <a class="nav-link active icons--style--raya"
                                    href="/Producto-view">lista producto</a></li>
                            <li class="nav-item"  v-if="userObj">
                                <a href="/User-Perfil" class="nav-link active icons--style--raya" aria-current="page">Mi perfil</a>
                            </li>
                            <li class="nav-item boxBtnCerrarSession" v-if="userObj">
                                <a  href="/logout" @click="logout()"
                                    class="nav-link active icons--style--raya btnEfectClick btnPaymetView- btnCerrarSesion "
                                    aria-current="page" >Cerrar Sesion</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            userObj: '',
            userName: '',
        }
    },
    mounted() {
        this.userObj = JSON.parse(localStorage.getItem('userObj'));
        // console.log('-- ',this.userObj);
        // this.userObj ? this.userName = this.userObj.user[0].email : console.log('vacio user');
        this.userObj ? this.userName = this.userObj.user[0].email : false;
    },
    methods: {
        logout() {
            const localStorage = window.localStorage;
            localStorage.removeItem('userObj');
        },
    }

}
</script>

<style></style>
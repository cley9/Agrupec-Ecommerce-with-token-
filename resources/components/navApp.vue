<template>
      <nav class="navbar fixed-top containerNavMain">
        <div class="container-fluid navHeadBox">
            <button type="button" class="btnHamburNav" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"><i class="fa-solid fa-bars colorNav"></i></button>
            <a class="navbar-brand colorNav- titleUscNav" href="/">Agrupec</a>
            <div class="bg-warning-">
                <div class="sidebar-social boxCartIcomBody" v-if="userObj">
                    <a href="/Cart" class="cart" id="cartHover" title="Facebook" rel="nofollow"><i
                            class="fas fa-shopping-cart icomCartBody"></i>
                        <span class="badge numCartPro" id="cartMenu">12</span>
                    </a>
                </div>
                <a href="" data-bs-toggle="modal" data-bs-target="#loginUserModal" v-if="!userObj">
                        <i class="fa-regular fa-circle-user iconLoginNav colorNav"></i></a>
                <div class="offcanvas offcanvas-start containerNavColor" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header headNavBox">
                        <h5 class="offcanvas-title titleNavBody" id="offcanvasNavbarLabel">Menu </h5>
                        <button type="button" class="btn-close base" data-bs-dismiss="offcanvas"
                            aria-label="Close"><i class="fa-solid fa-xmark colorIconNav"></i></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav row justify-content-end flex-grow-1 navBody">
                            <li class="nav-item navItem"> <a class="nav-link active icons--style--raya textNavColor"
                                    href="/"><i class="fa-solid fa-house-chimney"></i> Home</a></li>
                            <li class="nav-item navItem"> <a class="nav-link active icons--style--raya textNavColor"
                                    href="/Producto-view"><i class="fa-solid fa-bell"></i> Ver Producto</a></li>
                                    <li class="nav-item navItem"> <a class="nav-link active icons--style--raya textNavColor"
                                            href="/Nosotros"><i class="fa-solid fa-award"></i> Nosotros</a>
                                    </li>
                                    <li class="nav-item navItem"> <a class="nav-link active icons--style--raya textNavColor"
                                        href="/Ayuda"><i class="fa-solid fa-phone-volume"></i> Atención</a></li>
                                        <li class="nav-item navItem"> <a class="nav-link active icons--style--raya textNavColor"
                                                href="/Producto-view"><i class="fa-solid fa-building-columns"></i> Lista Productos</a></li>
                                        
                                    <!-- <li class="nav-item navItem"> <a class="nav-link iconNav"
                                        href="https://www.toprevenuegate.com/dzbis7wu?key=6b2fc7f81ab9e5da2c815eb16e8437d9" target="_blank"><i class="fa-brands fa-telegram"></i></a></li>
                                     -->
                            <li class="nav-item navItem" v-if="userObj">
                                <a href="/User-Perfil" class="nav-link active icons--style--raya textNavColor"
                                    aria-current="page">Mi perfil</a>
                            </li>
                            <li class="nav-item navItem boxBtnCerrarSession" v-if="userObj">
                                <a href="/logout" @click="logout()"
                                    class="nav-link active icons--style--raya textNavColor btnEfectClick btnPaymetView- btnCerrarSesion"
                                    aria-current="page">Cerrar Sesion</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- <nav class="navbar navbar-light bg-light fixed-top navBarHome">
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
    </nav> -->
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

<style scoped>
.containerNavMain {
    background: #22282D !important;
    border-radius: 0px;
    padding: 8px 14px;
}
.navHeadBox{
    /* background: salmon; */
    padding: 0px;
    display: flex;
    /* justify-content: center; */
}
.containerNavColor {
    background: #22282D !important;
    width: 60%;
}
.btnHamburNav{
    color:white;
    background: #22282D;
    border: #22282D;
    /* border-color: none !important; */
    font-size: 30px;
    padding: 0px 12px 0px 8px;
}
.colorNav{
    /* color:white; */
    color:#D3D4D5;
    /* background: salmon; */
}
.titleUscNav{
    font-size: 24px;
    color:white;
    /* background: salmon; */
    /* padding: 0px 20px; */
    /* text-align: center; */
}

.titleNavBody {
    font-size: 20px;
    color: white;
}

.textNavColor {
    color: #D3D4D5 !important;
    font-size: 18px;
}

.base {
    /* background: white !important; */
    width:20%;
    height:100%;
    /* display: flex; */
    /* align-content: center;
    justify-content: center; */
}
.colorIconNav{
    color:white;
    font-size:48px;
}

.navItem {
    padding: 15px 0px 22px;
}

.navBody {
    /* background: salmon; */
    padding: 0px 24px !important;
    /* color:blue !important; */
}
.iconNav{
    color:#289FD9 !important;
    font-size:50px;
    text-align: center;
}
.headNavBox{
    /* background: slateblue !important; */
/* margin-bottom: 0px !important; */
}
.iconLoginNav{
    /* color:white; */
    font-size:48px;
}
.btnNav{
    /* background: salmon; */
    color:white !important;
}

.navHeadBox {
    /* background: #22282D; */
  height: 70px;
}
@media(width >= 830px){
.containerNavMain{
    display:none;
}
}
@media(width <= 500px){
    .containerNavMain{
        /* display: none !important; */
        /* background: salmon !important; */
        /* margin-bottom: 0px !important; */
    }
}
</style>
<template>
    <nav class="navHeadMain">
        <div class="navTitle">
            <h4 class="navTitleText"><a href="/">Agrupec</a></h4>
        </div>
        <!-- <ul>
            <h3>dfajl</h3>
        </ul> -->
        <ul class="navBody">
            <li class="nameBody">
                <a href="/" class="nav-link-a textHead nameTitle">Home</a>
            </li>
            <li class="nameBody">
                <a href="/Producto-view" class="nav-link-a textHead nameTitle">Ver producto</a>
            </li>
            <li class="nameBody">
                <a href="/Nosotros" class="nav-link-a textHead nameTitle">Nosotros</a>
            </li>
            <li class="nameBody">
                <a href="/Ayuda" class="nav-link-a textHead nameTitle">Atención</a>
            </li>
            <li class="nameBody" v-if="!userObj">
                <a href="#">Iniciar Sesión</a>
                <ul class="subMenu">
                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#loginUserModal">Usuario</a></li>
                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#loginAdminModal">Administrador</a></li>
                </ul>
            </li>
            <li class="nameBody- bg-info cartBox" v-if="userObj">
                <a href="/Cart" class="cart" id="cartHover" title="Facebook" rel="nofollow">
                        <i class="fas fa-shopping-cart icomCart"></i>
                        <span class="badge numCartPro" id="cartMenu">16</span>
                    </a>
            </li>
            <!-- <li class="colorHeadPerfil"></li> -->
            <li class="nameBody- perfilBox" v-if="userObj">
                <img :src="'/storage/img/icons/userLogin.png'" class=" icons--login--user"
                        alt="">
                        <ul class="subMenuPerfil">
                            <li class="textPerfil"><h5>Usuario</h5></li>
                            <img :src="'/storage/img/icons/userLogin.png'" alt="" class="textPerfil perfil--body--img">
                             <li class="nameText">{{userName }}</li>
                             <li class="miPerfilText textPerfil" > <a href="/User-Perfil">Mi Perfil</a></li>
                             <li class="logoutLinkText textPerfil"><a  href="/logout" @click="logout()">Cerrar Sesion </a></li>
                        </ul>
            </li>
        </ul>
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
        this.userObj ? this.userName = this.userObj.user[0].email :console.log('vacio user'); 
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
* {
    margin: 0;
    box-sizing: border-box;
}

a {
    color: black;
}
/* 
.navTitleText{
    background: #198754;
} */
.nameTitle {
    text-decoration: none !important;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
}

.nameTitle:hover,
.nameTitle:focus {
    background-size: 100% 2px;
}

.navHeadMain {
    background: orange;
    display: grid;
    grid-template-columns: auto auto;
    width:100%;
    position: fixed;
    align-items: center;
    z-index: 999;
    margin-bottom: 30px;
}
@media(width >=1090px){
    .navHeadMain{
        background:silver;
        padding: 10px 40px;
    }
    .navTitle{
        max-width:620px;
        min-width: 2px;
        padding: 20px 90px;
        background: skyblue !important;
    }
    .navBody{
        padding: 20px;
    background: salmon !important;
    }
}

@media(960px <= width <1090px){
    .navHeadMain{
        padding: 10px 40px;
    }
}
@media(830px <= width < 960px){
    .navHeadMain{
        grid-column: span 2;
        background: palegreen !important;
    }
    .navTitleText{
        display: none;
        background: skyblue !important;
        
    }
    .navTitle{
        background: sienna !important;
        
    }
}
@media(30px <= width <830px){

    .nameBody{
        margin:none !important;
    }
    .navHeadMain{
        padding: 10px 10px;
        background: salmon !important;
    }
    .navTitleText{
        display: none;
        /* background: rgb(76, 114, 93) 235, 165) !important; */
        
    }
    .navTitle{
        background: sienna !important;
    }
}

.navTitle {
    background: salmon;
}

.navBody {
    background: slateblue;
    display: flex;
    justify-content: center;
    align-self: center;
    list-style: none;
}

.nameBody {
    /* background:salmon; */
    padding: 26px;
}

/* submenu */
.subMenu {
    position: absolute;
    display: none;
    list-style: none;
    width: 200px;
    background-color: rgba(0, 0, 0, .5);
}

.navBody li:hover .subMenu {
    display: block;
}

.subMenu li:hover {
    background-color: black;
}

.subMenu li a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 15px 15px 15px 20px;
}
/* cart */
.cartBox{
 display: grid;
 align-content: center;
 padding: 10px 50px;
 /* align-items: center; */
}
.icomCart {
    /* background: rebeccapurple; */
    font-size: 30px;
  }
/*  mi perfil*/
.perfilBox{
    background: #198754;
    display: grid;
    place-items: center;
   
    padding:10px 50px; 
}
.subMenuPerfil{
    display: none;
}
.perfilBox:hover{
    background:skyblue;
    display: block;
    padding: 16px 50px;
}


/* .navBody li:active .subMenuPerfil, .navBody li:hover .subMenuPerfil { */
/* .navBody li:active .subMenuPerfil { */
/* .navBody li:focus .subMenuPerfil { */
.navBody li:hover .subMenuPerfil {
    display: block;
    list-style: none;
    position: absolute;
    text-align: center;
    /* bottom: 120px 34px; */
    width:238px;
    height: 370px;
    padding: 30px 10px;
    border-radius: 6px;
    z-index: 2;
    background: #FFFFFF;
    margin-top: 16px;
    right: 30px;
    /* border: 2px solid black; */
    box-sizing: border-box;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    /* box-shadow: 12px 12px 12px 12px #198754; */
}
.colorHeadPerfil{
    background: orange;
  opacity: 80%;
  display: flex;
  position: relative;
  height: 94px;
  z-index: 1;
  /* margin-top: -8px;
  border-radius: 4px; */
}
/* #FFB733 */
.nameText{
 margin-bottom: 30px;

}
.textPerfil{
    margin-bottom:20px;
}
.subMenuPerfil li:hover{
    background: salmon;
}
</style>
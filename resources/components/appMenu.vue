<template>
    <nav class="navHeadMain">
        <div class="navTitle">
            <h4 class="navTitleText"><a href="/">Agrupec</a></h4>
        </div>
        <!-- <ul>
            <h3>dfajl</h3>
        </ul> -->
        <input type="checkbox" class="check" name="" id="menu">
        <label for="menu" class="navOpen">
            <img :src="'/storage/img/icons/1148680.png'" class="navIcon" alt="">
        </label>
        <label for="menu" class="navClose">
            <img :src="'/storage/img/icons/1178852.png'" class="navIcon" alt="">
        </label>
        <!--  -->
        <ul class="navBody">
            <li class="nameBody navList">
                <a href="/" class="nav-link-a textHead nameTitle">Home</a>
            </li>
            <li class="nameBody navList">
                <a href="/Producto-view" class="nav-link-a textHead nameTitle">Ver producto</a>
            </li>
            <li class="nameBody navList">
                <a href="/Nosotros" class="nav-link-a textHead nameTitle">Nosotros</a>
            </li>
            <li class="nameBody navList">
                <a href="/Ayuda" class="nav-link-a textHead nameTitle">Atención</a>
            </li>
            <li class="nameBody navList" v-if="!userObj">
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

.nameTitle {
    text-decoration: none !important;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
}

/* .nameTitle:hover,
.nameTitle:focus {
    background-size: 100% 2px;
}

*/
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

    /* ----------- */
    /* .navHeadMain{
background-color: #7EEBCA;
height: 90px;
color: white;
padding: 0 5vw;
z-index: 999;
display: grid;
grid-template-columns: max-content max-content;
grid-template-areas:"logo icono";
align-items: center;
justify-content: space-between;

} */
.navHeadMain{
    display: grid !important;
grid-template-columns: max-content !important;
}
.navOpen{
    background: red !important;
    width:100%;
    padding: 10px;
    /* margin: 10px 323px 23px 3px; */
    margin-right:974px;
    /* margin-right: 90%; */
    /* margin-left: 23px; */
}
.navClose{
    /* position: absolute; */
    /* margin-right:974px !important; */

    margin-left: 280px !important;
    /* margin-left: 220px !important; */
}
    .navOpen,
.navClose{
    grid-area: icono; 
    cursor: pointer;
    transition: opacity .5s;
    z-index: 200;
    /* left: 230px !important; */
}
.navClose{
    opacity: 0;
}
.navBody{
    position: fixed;
    /* opacity: 0; */
    /* 0 significa que ocupe todo  */
    right: 0;
    top: 0;
    left: 0;
    bottom:0;
    width: 80%;
    background-color: rgb(37, 173, 139);
    padding: 100px 5vw;
    list-style: none;
    /* grid-auto-columns: 2 span; */
    display: grid;
    place-content: center;
    gap:3rem;

    /*  esconde  con el opacity 0*/
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s;
    /*  */

}
.navIcon{
    /* font-size: 3px; */
    width: 30px;
    /* right:230px; */
    /* left: 20px; */
    background: slateblue;
    
}
.check{
    opacity: 0;
}
/* chek estee activo  cuando da un click*/
/* se usa el ~ este selector como un if  */
.check:checked ~ .navOpen{
    opacity: 0;
}
.check:checked ~ .navClose{
    opacity: 1;
    
}

/* mostrar el menu */
.check:checked ~ .navBody{
    opacity: 1;
    pointer-events: unset; /* unset == regressa a la normalidad*/
}
}

</style>
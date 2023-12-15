<template>
    <nav class="navHeadMain">
        <div class="navTitle">
          <a href="/">  <h3 class="navTitleText">Agrupec</h3></a>
        </div>
        <ul class="navBody">
            <li class="nameBody">
                <a href="/" class="textHead nameTitle">Home</a>
            </li>
            <li class="nameBody">
                <a href="/Producto-view" class="textHead nameTitle">Ver producto</a>
            </li>
            <li class="nameBody">
                <a href="/Nosotros" class="textHead nameTitle">Nosotros</a>
            </li>
            <li class="nameBody">
                <a href="/Ayuda" class="textHead nameTitle">Atención</a>
            </li>
            <li class="nameBody" v-if="!userObj">
                <a href="#" class="textHead nameTitle">Iniciar Sesión</a>
                <ul class="subMenu">
                    <li class="bas"><a href="#" class="textHead" data-bs-toggle="modal" data-bs-target="#loginUserModal">Usuario</a></li>
                    <li class="bas"><a href="#" class="textHead" data-bs-toggle="modal" data-bs-target="#loginAdminModal">Administrador</a>
                    </li>
                </ul>
            </li>
            <li class="nameBody- cartBox" id="previewCart" v-if="userObj">
                <a href="/Cart" class="cart" id="cartHover" @mouseenter="previewProductModal()" title="Facebook" rel="nofollow">
                    <i class="fas fa-shopping-cart icomCart"></i>
                    <span class="badge numCartPro" id="cartMenu">{{ countProductPreview }}</span>
                </a>
            </li>
            <li class="nameBody- perfilBox" v-if="userObj">
                <img :src="`${avatar}`" class=" icons--login--user" alt="">
                <ul class="subMenuPerfil">
                    <li class="textPerfil">
                        <h5>Usuario</h5>
                    </li>
                    <img :src="`${avatar}`" alt="" class="textPerfil perfil--body--img">
                    <li class="nameText">{{ userName }}</li>
                    <li class="miPerfilText textPerfil"> <a href="/User-Perfil" class="nameTitle">Mi Perfil</a></li>
                    <li class="logoutLinkText textPerfil"><a href="/logout" class="nameTitle" @click="logout()">Cerrar Sesion </a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <nav-app></nav-app>
</template>

<script>
import { previewProductCartModal } from '../js/methods.js';
export default {
    data() {
        return {
            userObj: '',
            userName: '',
            // userToken:'',
            countProductPreview:0,
            previewData:'',
            avatar:'',
        }
    },
    mounted() {
        this.userObj = JSON.parse(localStorage.getItem('userObj'));
        if (this.userObj) {
            this.avatar=this.userObj.user[0].avatar;
        }
        this.userObj ? this.userName = this.userObj.user[0].email : false;
        // this.userObj ? this.userToken = this.userObj : false;
        this.userObj ? this.countPreviewProduct() : false;
        // console.log("-- t ",this.userObj);
    },
    methods: {
        logout() {
            const localStorage = window.localStorage;
            localStorage.removeItem('userObj');
        },
        async countPreviewProduct(){
            const data= await fetch(`/api/user/${this.userObj.user[0].id}/getCart/`, {
                method:'GET',
                headers:{
                    // Authorization: `Bearer ${this.userToken.token}`,
                    Authorization: `Bearer ${this.userObj.token}`,
                }
            });
            this.previewData= await data.json();
            // console.log('json --',this.previewData);
            this.previewData.forEach( element => {
                this.countProductPreview +=element.pivot.cantidad;
                // console.log(element.pivot.cantidad);
            });
        },
        async previewProductModal(){
            // console.log("cantidad", this.countProductPreview);
            previewProductCartModal(this.previewData);
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
.navTitleText {
    color: #198754 !important;
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
.nameTitle:hover,
.nameTitle:focus {
    background-size: 100% 2px;
}

.navHeadMain {
    background: #FFFFFF;
    /* background: orange; */
    display: grid;
    grid-template-columns: auto auto;
    width: 100%;
    position: fixed;
    align-items: center;
    z-index: 999;
    margin-bottom: 30px;
    top: 0;

}

@media(width >=1090px) {
    .navHeadMain {
        /* background:silver; */
        padding: 10px 40px;
    }

    .navTitle {
        max-width: 620px;
        min-width: 2px;
        padding: 20px 90px;
        /* background: skyblue !important; */
    }

    .navBody {
        /* padding: 20px; */
        /* background: salmon !important; */
    }
}

@media(960px <=width <1090px) {
    .navHeadMain {
        padding: 10px 40px;
    }
}

@media(830px <=width < 960px) {
    .navHeadMain {
        grid-column: span 2;
        /* background: palegreen !important; */
    }

    .navTitleText {
        display: none;
        /* background: skyblue !important; */

    }

    .navTitle {
        /* background: sienna !important; */

    }
}

.navBarHome {
    display: none !important;
}

@media(30px <=width <830px) {

    .navHeadMain {
        display: none;
    }

    .navBarHome {
        display: block !important;
    }

}

.navTitle {
    /* background: salmon; */
}

.navBody {
    /* background: slateblue; */
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
    width: 170px;
    right: 20px;

    /* margin-left: 120px !important; */
    text-align: center;
    /* background: rebeccapurple; */
    background-color: rgba(0, 0, 0, .5);
    /* margin: 0;
    box-sizing: border-box; */
}

.bas {
    /* background: orange; */
    margin-left: -33px;
}

.navBody li:hover .subMenu {
    display: block;
}

.subMenu li:hover {
    width: 100%;
    width: 170px;
    margin-left: -32px;
    background-color: black;
}

.subMenu li a {
    display: block;
    color: white;
    text-decoration: none;
    /* padding: 15px 15px 15px 20px; */
    padding: 15px 15px 15px 20px;
}

/* cart */
.cartBox {
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
.perfilBox {
    /* background: #198754; */
    display: grid;
    place-items: center;

    padding: 10px 50px;
}

.subMenuPerfil {
    display: none;
}

.perfilBox:hover {
    /* background:skyblue; */
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
    width: 238px;
    height: 370px;
    padding: 30px 10px;
    border-radius: 6px;
    z-index: 2;
    background: #FFFFFF;
    margin-top: 16px;
    right: 30px;
    /* border: 2px solid black; */
    box-sizing: border-box;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
    /* box-shadow: 12px 12px 12px 12px #198754; */
}

.colorHeadPerfil {
    /* background: orange; */
    opacity: 80%;
    display: flex;
    position: relative;
    height: 94px;
    z-index: 1;
    /* margin-top: -8px;
  border-radius: 4px; */
}

/* #FFB733 */
.nameText {
    margin-bottom: 30px;

}

.textPerfil {
    margin-bottom: 20px;
}

.subMenuPerfil li:hover {
    /* background: salmon; */
}</style>
<template>
    <div class="container boxPromoMain">
        <div class="row row-cols-1 row-cols-lg-1  mb-2 d-flex justify-content-center ">
            <swiper 
            :slidesPerView="1"
      :spaceBetween="28"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
            :modules="modules" 
            class="mySwiper">
            <swiper-slide v-for="itemPro in productos" :key="itemPro.id">
                    <div class=" border-  boxBodySlayMin">
                            <div class="row">
                                <div class="col-6 boxImgSlayMin me-2- d-flex  align-items-center justify-content-center bg-info">
                                    <a :href="`/View-page/${itemPro.id}`"
                                        class="p-2 carrusel-min-pro">
                                        <img :src="`/storage/img/Productos/${itemPro.imagen}`"
                                            class="img-fluid-a imgItemSlayMin" alt="" draggable="false">
                                    </a>
                                </div>
                                <div class="col-6 cuen">
                                    <div class="mb-2 boxTitleSlayMin">
                                        <h5 class="text-dark h6 txtBoxTitle- textBoxHeadTitle-">{{ itemPro.nombre }}
                                        </h5>
                                    </div>
                                    <div class="mb-2 d-flex justify-content-between  ">
                                        <span class="text-dark- txtBoxPreBefore textPrecioProBefore"><del>S/
                                            {{ itemPro.precio }}.00
                                            </del></span>
                                        <span class="text-dark textPrecioProAfter">S/
                                        {{ itemPro.newPrecio }}.00
                                        </span>
                                    </div>
                                    <div class=" align-items-center d-flex mb-2 ">
                                        <span class="h6 mb-0 text-muted fw-normal textCountProDis">
                                            <small class="">{{ itemPro.cantidad }} disponibles</small>
                                        </span>
                                    </div>
                                    <div class="col mb-3">
                                        <h6 class="text-center iconStartSlay">
                                                <!-- <i  class="bi bi-star-fill icons--star"></i> -->
                                                <i v-for="itemStar in getStartNum(3, 5)" :key="itemStar" class="bi bi-star-fill icons--star"></i>
                                        </h6>
                                        <div class=" d-flex justify-content-center">
                                            <a :href="`/View-page/${itemPro.id}`"
                                                class="btn btn-sm  btn--view-add btn-slay-producto-  btnEfectClick">Ver
                                                Producto </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <div>
    </div>
</template>
    
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//   import '../css/style.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },

    data() {
        return {
            productos: [],
        };
    },
    mounted() {
        // this.getStartNum();
        this.producto();
    },
    methods: {
        async producto() {
            const productList = await fetch("/view/productoView",{
                method:'Get'
            });
            if (productList.ok) {
                const productoJson = await productList.json();
                this.productos = productoJson.data.data;
                // Inicializa la propiedad 'numero' en cada objeto 'itemProduct'
        // this.productos.forEach(itemProduct => {
        //     itemProduct.numero = 1;
        // });
                console.log(productoJson.data.data);
            }
            // this.userObj = JSON.parse(localStorage.getItem("userObj"));
        },
        getStartNum(minStar, maxStar){
        // async getStartNum(){
            // return 
            // Math.floor(Math.random() * (max - min + 1) + min);
            // const a =
            return  Math.floor(Math.random() * (maxStar - minStar + 1)) + minStar;
            // return Math.floor(Math.random() * (5 - 3 + 1))+ 3;
            // const a =Math.floor(Math.random() * (maxStar - minStar + 1))+ minStar;
            // Math.random(3, 5);
            // console.log('....',a);
        },
    },
};

</script>
    
<style scoped>


    @media (width > 800px){
    .boxBodySlayMin {
        /* border-radius: 12px;
        margin-left: -10px;
        margin-bottom: 90px; */
        background: slateblue;
        /* width: 362px !important; */
        /* box-shadow: 2px 2px 9px 2px #F1F3F3; */
        /* border: #08c708 !important; */
        /* z-index: 999; */
        /* margin-inline-end: -30px !important; */
        /* margin-right: 590px !important; */
        /* margin-right: 290px !important; */



        /* width: 450px; */
        /* min-width: 40rem; */
        /* border-radius: 12px;
        margin-left: 30rem !important;
        margin-right: 30rem !important;
        box-shadow: 2px 2px 9px 2px #F1F3F3; */
        /* border: #08c708 !important; */
    }

    .boxBodySlayMin:hover {
        /* box-shadow: 5px 5px 10px 0px #dce2e4;
        transition: 0.3s ease; */
    }
}

@media(width <= 700px){

    .boxBodySlayMin {
        background: orange !important;
        width: 450px;
        border-radius: 12px;
        box-shadow: 2px 2px 9px 2px #F1F3F3;
          /* border: #08c708 !important; */
        }

        .boxBodySlayMin:hover {
          box-shadow: 5px 5px 10px 0px #dce2e4;
          transition: 0.3s ease;
        }
    }



@media (width >=700px) {

    /*  box descuentos por horas*/
    .boxPromocionHead {
        display: flex;
        align-items: center !important;
        justify-content: center;
        background: #1ccc86;
        /* background: rebeccapurple; */
        margin-bottom: 20px;
        height: 100px;
        border-radius: 8px;
    }

    .boxPromoText {
        background: red;
        padding: 12px 50px 12px 50px;
        border-radius: 8px;
        margin-right: 40px;
    }

    /* dfa */
    /* eliminar el margin del h2 para centrar bien verticalmente */
    .boxPromocionHead h2 {
        margin: 0;
    }

    .boxPromocionHeadc {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .boxPromoMain {
        /* background: #1ccc86; */
        margin-bottom: 40px;
    }

    .boxPromoTextEnd {
        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
        margin-left: 20px;
    }

    .boxPromoTextCent {
        padding: 12px 20px 12px 20px;
        background: #0D6EFD;
        color: white;
    }

    .boxTextHora {
        background: white;
        padding: 12px 12px 12px 12px;
        border-radius: 4px;
        /* background: orange; */
        /* width: 30rem !important; */
        /* min-width: 290px !important; */
    }

    /* .textSecond{
      background: red;
      width: 230px !important;
    } */
    /* .boxPromocionHead .textSecond {
    width: 230px !important;
  } */

}

@media (width < 700px) {

    /*  box descuentos por horas*/
    .boxPromocionHead {
        display: flex;
        align-items: center !important;
        justify-content: center;
        background: #1ccc86;
        /* background: rebeccapurple; */
        margin-bottom: 20px;
        height: 100px;
        border-radius: 8px;
    }

    .boxPromoText {
        background: red;
        padding: 2px 10px 2px 2px;
        border-radius: 8px;
        margin-right: 8px;
        /* margin-left: -50px; */
    }

    .facter {
        position: absolute;
        margin-top: 40px !important;
        /* margin-right: 20px !important; */
        margin-left: -352px !important;

    }

    .textPromoMain {
        margin-top: -8% !important;
    }

    /* dfa */
    /* eliminar el margin del h2 para centrar bien verticalmente */
    .boxPromocionHead h2 {
        margin: 0;
    }

    .boxPromocionHeadc {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .boxPromoMain {
        /* background: #1ccc86; */
        margin-bottom: 40px;
    }

    .boxPromoTextEnd {
        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
        margin-left: 20px;
    }

    .boxPromoTextCent {
        padding: 12px 20px 12px 20px;
        background: #0D6EFD;
        color: white;
    }

    .textSecond {
        /* color:; */
        /* position: fixed;
    margin-top: 0px !important; */
        /* margin-right: 80px !important; */
    }

    .boxTextHora {
        background: white;
        padding: 4px 4px 4px 4px;
        border-radius: 4px;
    }
}

/* list producto promocion */
.boxListPromo {}

.boxListPromo:hover {
    /* background:black; */
    /* z-index: 1; */
    /* position:absolute; */
    /* background-color: rgba(0, 0, 0, 0); Fondo transparente inicialmente */
    /* transition: background-color 0.3s ease; Transición suave para el fondo */
    opacity: 0.9;
    transition: 0.5s ease;
}

/* slay de vue */
.das {
    /* display: inline; */

    /* background: orange !important; */
    /* display: flex;
       justify-content: center !important; */
}

/* .boxPromoText{
    background: red;
    padding: 12px 60px 12px 40px;
    border-radius: 8px;
    margin-right: 40px;
  } */
@media(width  <400px){
/* body{
    background: #1ccc86 !important;
} */
.swiper{
    background:#1ccc86 !important;
}
}
</style>
  
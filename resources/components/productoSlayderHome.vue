<template>
    <div class="containerSlayHome">
        <div class="widthContainer">
        <swiper :slidesPerView="6" :spaceBetween="22"  
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
:navigation="true" 
:autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules" class="mySwiper">
            <!-- <swiper-slide v-for="itemPro in productos" :key="itemPro.id" class="bg-info-"> -->
            <swiper-slide v-for="itemPro in slayderProductoHome.data" :key="itemPro.id" class="bg-info-">
                <a :href="`/View-page/${itemPro.id}`" class="HeadBoxSlay">
                    <img :src="`/storage/img/Productos/${itemPro.imagen}`" class=" imgHeadBoxSlay" alt="" draggable="false">
                </a>
                <div class="bodyBoxSlay">
                        <h6 class="titleHeadSlay titleHeadSlayLong">{{ itemPro.nombre }}
                        </h6>
                    
                    <div class="cantidadTextBody centerText">
                        <small class="disponibleTextBody textCountProDis">{{ itemPro.cantidad }} disponibles</small>
                    </div>
                    <h6 class="iconStartSlay starIconBody centerText">
                                <i v-for="itemStar in getStartNum(3, 5)" :key="itemStar" class="bi bi-star-fill icons--star"></i>
                        </h6>
                    <div class="precioTextBody">
                        <span class="txtBoxPreBefore precioProBeforeTextLong"><del>S/
                            {{ itemPro.precio }}.00
                            </del></span>
                        <span class="precioProAfterTextLong">S/
                        {{ itemPro.newPrecio }}.00
                        </span>
                    </div>
                        
                        <div class="centerText viewProductoClickBox">
                            <a :href="`/View-page/${itemPro.id}`"
                                class="btn btn-sm  btn--view-add btnEfectClick viewProductoBox">Ver
                                Producto </a>
                        </div>
                </div>

            </swiper-slide>
        </swiper>
    </div>

    </div>
</template>
    
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    props:{
        slayderProductoHome:{
            type:Object,
            required:true,
        }
    },
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
        // console.log("--- = ", this.slayderProductoHome.data);
    },
    methods: {
        async producto() {
            const productList = await fetch("/view/productoView", {
                method: 'Get'
            });
            if (productList.ok) {
                const productoJson = await productList.json();
                this.productos = productoJson.data.data;
                // Inicializa la propiedad 'numero' en cada objeto 'itemProduct'
                // this.productos.forEach(itemProduct => {
                //     itemProduct.numero = 1;
                // });
                // console.log(productoJson.data.data);
            }
            // this.userObj = JSON.parse(localStorage.getItem("userObj"));
        },
        getStartNum(minStar, maxStar) {
            return Math.floor(Math.random() * (maxStar - minStar + 1)) + minStar;
            // return Math.floor(Math.random() * (5 - 3 + 1))+ 3;
        },
    },
};

</script>
    
<style scoped>
@media (width > 400px) {
    .widthContainer{
       width: 90%; 
    }
    .containerSlayHome {
        width: 100%;
        display: flex;
        justify-content: center;
        /* background: wheat; */
        margin-bottom: 110px;
    }

    .swiper-slide {
        /* background: orange; */
        display: grid;
        grid-template-columns: auto auto;
        /* divide dos columnas de igual tamaño response* */
        /* grid-template-columns: max-content max-content; */
        align-items: center;
        justify-content: space-between;
        border: 1px solid #DFDFDF;
        box-shadow: 1px 2px 3px 1px #F4F7F7;

        border-radius: 8px;
    }
    .swiper-slide:hover{
        box-shadow: 2px 2px 12px 2px #eeeeee;
         /* box-shadow: 5px 5px 10px 0px #dce2e4; */
        transition: 0.3s ease;
    }

.titleHeadSlay{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;    
  font-weight: 100;
  margin-bottom: 12px;

}
.titleHeadSlayLong{
    /* background: blueviolet; */
    min-width:198px;
  max-width: 198px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

    .imgHeadBoxSlay {
        /* background: slateblue; */
        /* width: 40%; */
        max-width: 100%;
        /* min-width: 90%; */
        /* width: 60%; */
        height: 100%;
        object-fit: cover;
        padding: 12px;
        /* para que muestre todo la imagen  */
    }

    .HeadBoxSlay {
        /* min-width: 144px; */
        /* max-width: 100%;
        min-width: 90%; */
        /* background: springgreen; */
    }

    .bodyBoxSlay {
        /* background: orangered; */
        padding: 8px;
    }
.precioTextBody{
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
}
.starIconBody{
    margin-bottom: 14px;
}
.disponibleTextBody{
    color: #6c757d;
}
.centerText{
    display: flex;
    justify-content: center;
}
.cantidadTextBody{
    margin-bottom: 12px;

}
.precioProBeforeTextLong{
    /* background: orange; */
    min-width:86px;
  max-width: 86px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.precioProAfterTextLong{
    /* background: orange; */
    min-width:86px;
  max-width: 86px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
}

@media(width <= 400px){
/* body{
    background: #1ccc86 !important;
} */
.swiper{
    /* background:#6c757d !important; */
    /* padding:20px; */
   
    height: 400px;
    /* padding:20px; */
    /* place-content: center; */
}
.containerSlayHome{
    /* background: orange; */
    display:flex;
    justify-content:center;
    margin-bottom:38px;
}
.widthContainer{
    width:70%;
    padding:10px;
    
    /* background: white; */

}

.swiper-slide{
    padding:10px;
    border: 2px solid #F4F5F6;
    border-radius: 8px;
    /* background: #1ccc86; */
    /* background: royalblue; */
    /* width:220px !important; */
    display: grid;
    grid-template-columns: auto auto;
    /* width: 92% !important; */
    /* place-content: center; */
    text-align: center;
    
    /* box-shadow: 3px 2px 3px 3px #F4F5F6; */
    
    /* display: flex;
    justify-content: center; */
    
    /* grid-column: span 2; */
}

.imgHeadBoxSlay{
    width:70%;
}

.bodyBoxSlay{
    grid-column: span 2;
    /* background: salmon; */
}
.HeadBoxSlay{
    grid-column: span 2;
    /* margin-bottom:280px !important; */
    /* padding:90px; */
    /* height:90% !important; */
    /* background: #6c757d; */
    margin-bottom:8px;
}
.viewProductoBox{
    /* background: #6c757d; */
    /* background: #7EEBCA; */
    /* padding: 7px 8px; */
    /* padding-left: 120px; */
    /* top: -120px !important; */
    float: left;
    font-size: 12px;
    box-shadow: 0px 10px 20px -10px #7DCEA0;
    border-radius: 5px;
    text-transform: uppercase;
    margin-left: 60px;
    margin-top: 2px;
}
.titleHeadSlay{
    /* background: #DFDFDF; */
    
}    
.viewProductoClickBox{
    /* background: blue; */
    /* padding-top: 80px; */
    display: flex !important;
    align-content: center !important;
}
.iconStartSlay{
    /* background: orange; */
    margin-bottom: 10px;
}
.precioTextBody{
    display: flex;
    justify-content: space-between;
    /* background: rebeccapurple; */
    margin-bottom: 20px;
}
.cantidadTextBody{
    /* background: blue; */
    margin-bottom: 15px;
}
}
</style>
  
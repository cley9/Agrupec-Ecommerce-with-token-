
<script>
// Componente reusable
const MyComponent = {
  data() {
    return {
      message: '¡Hola desde MyComponent!'
    }
  },
  methods: {
    logMessage() {
      console.log(this.message)
    }
  }
}

export default MyComponent

</script>

.swiper-slide {
  background: orange;
  display: grid;
  grid-template-columns: auto auto; /* Dos columnas de ancho automático */
  align-items: center;
  justify-content: space-between;
}

.column {
  display: grid; /* Utilizamos grid para las columnas internas */
  align-items: center;
  /* justify-content: space-between; */
  background: springgreen;
  padding: 10px;
  border: 1px solid black;
}

.imgHeadBoxSlay {
  background: slateblue;
  max-width: 100%;
  height: auto;
}

.bodyBoxSlay {
  background: orangered;
  margin-top: 10px;
}










/* .swiper-slide {
  background: orange;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-content: space-between;
}

.column {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: springgreen;
  width: 100%;
  padding: 10px;
  border: 1px solid black;
}

.imgHeadBoxSlay {
  background: slateblue;
  max-width: 100%;
  height: auto;
}

.bodyBoxSlay {
  background: orangered;
  margin-top: 10px;
} 
*/








  <!-- <swiper-slide v-for="itemPro in productos" :key="itemPro.id" class="bg-info- swiper-item">
    <div class="column HeadBoxSlay">
        <a :href="`/View-page/${itemPro.id}`" class="">
            <img :src="`/storage/img/Productos/${itemPro.imagen}`" class="imgHeadBoxSlay img-fluid-a- --imgItemSlayMin" alt="" draggable="false">
        </a>
    </div>
    <div class="column bodyBoxSlay">
        <h4>producto dfadfa</h4>
    </div>
</swiper-slide> -->

<!-- <swiper-slide v-for="itemPro in productos" :key="itemPro.id" class="bg-info- swiper-item">
    <div class="column">
        <a :href="`/View-page/${itemPro.id}`" class="HeadBoxSlay">
            <img :src="`/storage/img/Productos/${itemPro.imagen}`" class="imgHeadBoxSlay img-fluid-a- --imgItemSlayMin" alt="" draggable="false">
        </a>
        <div class="column- bg-info">

            <h4 class="bodyBoxSlay">producto dfadfa
                
            </h4>
        </div>
    </div>
</swiper-slide> -->

<!-- <swiper-slide v-for="itemPro in productos" :key="itemPro.id" class="bg-info- swiper-item">
    <div class="column">
        <a :href="`/View-page/${itemPro.id}`" class="HeadBoxSlay">
            <img :src="`/storage/img/Productos/${itemPro.imagen}`" class="imgHeadBoxSlay img-fluid-a- --imgItemSlayMin" alt="" draggable="false">
        </a>
    </div>
    <h4 class=" column bodyBoxSlay- bodyBoxSlay">producto </h4>
</swiper-slide>
 -->







    <!-- <div class=" border  boxBodySlayMin">
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
                        </div> -->
                 
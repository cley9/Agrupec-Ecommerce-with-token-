<template>
    <div class="containerProductoFiltro">
        <div class="rowProductoFiltro">
            <div class="accordion productoFiltroBox" id="accordionPanelsStayOpenExample">
                <button class="accordion-button listCategoryCard mb-3 shadow" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true">
                    Producto
                </button>
                <div class="shadow boxSlayderScrollWeb bg-light" id="panelsStayOpen-collapseOne"
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="vertical-menu">
                        <div class="list-group-item bg-light align-items-center  d-flex bd-highlight"
                            v-for="itemList in listCategory" :key="itemList.id">
                            <input type="checkbox" class="form-check-input p-2 bd-highlight btnFilterSearch"
                                :id="`btnW${itemList.id}`" name="{{ itemList.nombre }}" @click="filtro(itemList.nombre)"
                                value="">
                            <label class="form-check-label p-1 bd-highlight" :for="`btnW${itemList.id}`">{{
                                itemList.nombre }}</label>
                            <label class="badge ms-auto p-2 bd-highlight btn-numbers" :for="`btnW${itemList.id}`">{{
                                itemList.id }}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="productoBody">
                <h3 class="titleProductoFiltro">Lista de Producto</h3>
                <div class="rowFilterPage" id="listCatProduct">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { filterProduct } from '../js/methods.js';
export default {
    props: {
        listCategory: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            data: '',
            // listCategory:{
            //     type:Object,
            //     required:true,
            // },
        }
    },
    created() {

    },
    methods: {
        filtro(nameProduct) {
            filterProduct(nameProduct);
            // console.log('nombre --', nameProduct);
        }
    }
}
</script>

<style scoped>
.containerProductoFiltro {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
}

.rowProductoFiltro {
    width: 96%;
    /* background: orange; */
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    padding: 10px;
}

.productoFiltroBox {
    /* background: rebeccapurple; */
    padding: 25px;
    /* width:20%; */

}

.productoBody {
    /* background: salmon; */
    padding: 26px 40px;
    /* max-width:102rem; */
    /* min-width: 102rem; */
    /* width:380%; */
}

.titleProductoFiltro {
    text-align: center;
    padding: 20px;
    /* background: seagreen; */
    margin-bottom: 28px;
}

.rowFilterPage {
    background: white;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-columns: auto;
    gap: 40px 28px;
    align-content: center;
    justify-content: center;
}

</style>
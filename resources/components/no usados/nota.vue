<!-- <script>
import { ref } from 'vue'
import Modal from '../components/ga.vue'

export default {
  components: {
    Modal
  },
  setup(){
    const isOpen = ref(false)

    const openModal = () => {
      isOpen.value = true
      //HERE OTHER CHANGES

      return isOpen.value
    }

    return{
      isOpen, openModal
    }
  }
}

</script>

<template>
  <button @click="openModal">
    Open Modal
  </button>
  <Modal :open="isOpen" @close="isOpen = !isOpen" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->




open modal
<template>
    <div>
      <button @click="openModal">Abrir Modal</button>
      <modal v-if="showModal" @closeModal="closeModal">
        <!-- Contenido del modal -->
        <h2>Mi Modal</h2>
        <p>Este es el contenido de mi modal.</p>
      </modal>
    </div>
  </template>
  
  <script>
  import Modal from "@/components/ga.vue";
  
  export default {
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
    },
    components: {
      Modal,
    },
  };
  </script>














<style>


<!--  -->
display: grid; 
/* grid-template-columns:max-content max-content; esta propiedad no es conveniente para las comulan sino el auto , auto para que sea dos columnas del mismo tamaño */
  /* .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
} */

place-items: center; pra centrar los item de una columna
text-align:center  es par centrar == equivalente a text-center de bootstraps 
display: grid;
    place-content: center;  /*pra centra los tesxtos sin uso del div */


</style>


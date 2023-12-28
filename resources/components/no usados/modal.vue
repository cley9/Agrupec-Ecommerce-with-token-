<template>
 
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<!--  -->
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



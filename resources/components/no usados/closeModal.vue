<!-- <template>
    <div class="background" v-if="open">
      <div class="card">
        Hello World!!!
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      open: {
        type: Boolean,
        required: true
      },
      setup(props, { emit }){
        const closeModal = () => {
          emit('close', false)
        }
        return {
          closeModal
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .background{
    position: fixed;
    top: -10px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(20,20,20,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999px;
  }
  .card{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: black;
    width: 500px;
    height: 300px;
    padding: 1rem;
    border-radius: 2rem;
    justify-content: space-between;
    z-index: 990;
  }
  </style> -->


  <template>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
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
  };
  </script>
  
  <style scoped>
  /* Estilos para el modal */
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    position: relative;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  </style>
  
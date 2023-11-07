
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

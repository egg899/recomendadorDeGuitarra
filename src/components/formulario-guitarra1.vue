<template>
  <!-- <div class="container animate__animated animate__bounceIn animate__delay-0.3s"> -->
  <div class="container" :class="animationClass">
    <h2>Recomendador De Guitarras</h2>
    <div id="infoPrincipal" class="form">
      <form @submit.prevent="siguientePaso">
        <label for="nombre">Nombre: </label>
        <input
          id="nombre"
          v-model="formData.nombre"
          type="text"
          :class="{ 'error-border': !formData.nombre && formSubmitted }"
          required
        />

        <label for="apellido">Apellido: </label>
        <input id="apellido" v-model="formData.apellido" type="text" required />

        <label for="edad">Edad: </label>
        <input id="edad" v-model="formData.edad" type="number" required />

        <button class="btn btn-dark btn-outline-light" type="submit">Siguiente</button>
      </form>
      <!--form-->
    </div>
    <!-- div form-->
  </div>
  <!--container-->
</template>
<!--template-->

<style>
.siguiente {
  text-decoration: none;
  color: black;
  background-color: #f2f2f2;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid black;
  margin-top: 5px;
}
</style>
<script>
export default {
  name: 'Paso1',
  data() {
    return {
      animationClass: 'animate__animated animate__lightSpeedInRight animate__delay-0.3s',
      formData: {
        nombre: '',
        apellido: '',
        edad: null,
        nivel: '',
        estilo: '',
        genero: '',
        fecha: new Date().getTime()
      }, //formData
      formSubmitted: false,
      submitting: false
    } //return
  }, //data
  mounted() {
    const user = localStorage.getItem('user')
    if (user) {
      this.formData = JSON.parse(user)
    }
  },

  methods: {
    siguientePaso() {
      // this.formSubmitted = true
      if (this.formData.nombre && this.formData.apellido && this.formData.edad) {
        if (this.formData.edad > 5) {
          // this.$emit('formulario-enviado1', this.formData)
          // localStorage.setItem('user', JSON.stringify(this.formData))

          this.animationClass = 'animate__animated animate__fadeOutRight'
          setTimeout(() => {
            this.submitForm()
          }, 500)
        } else {
          alert('Demasiado joven, puede ser de 6 años para arriba')
        }
      } else {
        console.error('Por favor llene')
        // Optionally, show a message to the user
        alert('Please fill out all fields')
      }
    }, //siguientePaso
    submitForm() {
      this.$emit('formulario-enviado1', this.formData)
      localStorage.setItem('user', JSON.stringify(this.formData))
    }
  }, //methods
  emits: ['formulario-enviado1']
}
</script>
<style>
.error-border {
  border: 1px solid red;
}
</style>

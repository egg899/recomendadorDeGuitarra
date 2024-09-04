<template>
  <div class="container container-fluid" :class="animationClass">
    <div class="form">
      <h2>Recomendador De Guitarras</h2>
      <!-- <router-link to="/formulario-guitarra1">Volver al punto 1</router-link> -->

      <div class="row justify-content-center">
        <div class="col-3">
          <button class="btn btn-dark btn-outline-light medio" @click="volver">
            Volver al paso anterior
          </button>
        </div>
        <div class="col-md-auto">
          <img class="puaImg img-fluid" src="../assets/img/pua.png" alt="puaLogo" width="200" />
        </div>
        <div class="col-3">
          <button class="btn btn-dark btn-outline-light medio" @click="resultado">
            Ver el resultado
          </button>
        </div>
      </div>
    </div>
    <!--form-->
  </div>
  <!--container-->
</template>
<!--template-->
<script>
export default {
  name: 'Paso3',
  data() {
    return {
      animationClass: 'animate__animated animate__backInDown'
    }
  },

  methods: {
    resultado() {
      // const user = JSON.parse(localStorage.getItem('user'))
      //console.log('Aqui mismo esta la informacion', user)
      // this.$emit('resultado-enviado')
      this.submitForm()
    },
    submitForm() {
      this.animationClass = 'animate__animated animate__backOutUp'
      setTimeout(() => {
        this.$emit('resultado-enviado')
      }, 500)
    },
    volver() {
      this.animationClass = 'animate__animated  animate__backOutDown'
      setTimeout(() => {
        this.$router.go(-1)
      }, 500)
    } //volver
  }, //methods
  emits: ['resultado-enviado']
}
</script>

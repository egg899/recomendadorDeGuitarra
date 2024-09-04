<template>
  <main>
    <div>
      <Paso2 :formData="datosFormulario" @formulario-enviado2="metodoFormularioEnviado2" />
    </div>
  </main>
</template>

<script>
import Paso2 from '../components/formulario-guitarra2.vue'

export default {
  components: {
    Paso2
  },
  data() {
    return {
      datosFormulario: {} //empezamos un objeto
    }
  },

  methods: {
    metodoFormularioEnviado2(formData) {
      console.log('Formulario enviado desde Paso2:', formData)
      localStorage.setItem('user', JSON.stringify(formData))
      this.$router.push('/formulario-guitarra3')
    } //metodoFormularioEnviado2
  }
}
</script>

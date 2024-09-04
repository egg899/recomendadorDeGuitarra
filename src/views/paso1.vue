<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div>
      <Paso1 @formulario-enviado1="metodoFormularioEnviado" />
    </div>
    <div></div>
  </main>
</template>

<script>
import Paso1 from '../components/formulario-guitarra1.vue'

export default {
  components: {
    Paso1
  },
  data() {
    return {
      datosFormulario: {}
    }
  },
  methods: {
    metodoFormularioEnviado(formData) {
      this.datosFormulario = formData
      console.log('Formulario enviado desde Paso1:', formData)

      this.$router.push({
        name: 'paso2',
        params: {
          nombre: formData.nombre,
          apellido: formData.apellido,
          edad: formData.edad,
          fecha: formData.fecha
        }
      })
      //this.$router.push('/formulario-guitarra2')
    } //metodoformularioEnviado
  }
} //export
</script>

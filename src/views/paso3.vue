<template>
  <main>
    <div>
      <Paso3 @resultado-enviado="mensajeRecibido" />
    </div>
  </main>
</template>

<script>
import Paso3 from '../components/formulario-guitarra3.vue'

export default {
  components: {
    Paso3
  },
  methods: {
    mensajeRecibido() {
      const user = JSON.parse(localStorage.getItem('user'))
      console.log('Aqui mismo esta la informacion', user)
      this.$router.push('/resultado')
    }
  }
}
</script>

<template>
  <!-- <div class="container animate__animated animate__backInLeft animate__delay-0.3s"> -->
  <div class="container" :class="animationClass">
    <div class="form">
      <h2>Recomendador De Guitarras</h2>
      <p>Nombre: {{ this.$route.params.nombre }}</p>
      <p>Apellido: {{ this.$route.params.apellido }}</p>
      <p>Edad:{{ this.$route.params.edad }}</p>

      <form @submit.prevent="siguientePaso">
        <div v-for="(pregunta, index) in preguntas" :key="index">
          <label>{{ pregunta.pregunta }}</label
          ><br />
          <select
            v-model="formDataLocal[pregunta.dato]"
            :required="pregunta.dato !== 'nivel' || formDataLocal.estilo"
          >
            <option disabled value="">Elija una opcion sobre su {{ pregunta.dato }}</option>
            <option v-for="(opcion, idx) in pregunta.opciones" :key="idx" :value="opcion.valor">
              {{ opcion.nombre }}
            </option>
          </select>

          <label v-if="pregunta.dato === 'estilo' && formDataLocal.estilo">Género</label>

          <select
            v-model="formDataLocal.genero"
            v-if="pregunta.dato === 'estilo' && formDataLocal.estilo"
          >
            <option disabled value="">Seleccione un Género</option>

            <option
              v-for="genero in pregunta.opciones.find(
                (opcion) => opcion.valor === formDataLocal.estilo
              ).genero"
              :key="genero"
              :value="genero"
            >
              {{ genero }}
            </option>
          </select>
        </div>

        <!--v-for-->

        <button class="btn btn-dark btn-outline-light" type="button" @click="pasoAnterior">
          Atrás
        </button>

        <button class="btn btn-dark btn-outline-light" type="submit">Siguiente</button>
      </form>
      <!--form-->
      <!-- <router-link to="/formulario-guitarra3">Siguiente</router-link> -->
    </div>
    <!--form div-->
  </div>
  <!--container-->
</template>
<!--template-->
<script>
export default {
  name: 'Paso2',

  data() {
    return {
      animationClass: 'animate__animated animate__backInLeft animate__delay-0.3s',
      preguntas: [
        {
          pregunta: '¿Cual es tu nivel actual?',
          opciones: [
            { nombre: 'Principiante', valor: 'Principiante' },
            { nombre: 'Intermedio', valor: 'Intermedio' },
            { nombre: 'Avanzado', valor: 'Avanzado' }
          ],
          dato: 'nivel'
        },
        {
          pregunta: '¿Qué tipo de estilo de guitarra te gusta?',
          opciones: [
            { nombre: 'Acustico', valor: 'Acustico', genero: ['Blues', 'Country', 'Jazz'] },
            {
              nombre: 'Electrico',
              valor: 'Electrico',
              genero: ['Rock', 'Blues', 'Jazz', 'Heavy Metal']
            }
          ],
          dato: 'estilo'
        }
      ],
      formDataLocal: {
        nombre: this.$route.params.nombre,
        apellido: this.$route.params.apellido,
        edad: this.$route.params.edad,
        nivel: '',
        estilo: '',
        genero: '',
        fecha: +this.$route.params.fecha
      } //formData
    } //return
  }, //data
  mounted() {
    const user = localStorage.getItem('user')
    if (user) {
      const userData = JSON.parse(user)
      this.formDataLocal.nombre = userData.nombre || ''
      this.formDataLocal.apellido = userData.apellido || ''
      this.formDataLocal.edad = userData.edad || null
      this.formDataLocal.nivel = userData.nivel || ''
      this.formDataLocal.estilo = userData.estilo || ''
      this.formDataLocal.genero = userData.genero || ''
    }
  },
  watch: {
    // Watch for changes in formData and update localStorage
    formDataLocal: {
      handler(newValue) {
        localStorage.setItem('user', JSON.stringify(newValue))
      },
      deep: true
    }
  },
  methods: {
    siguientePaso() {
      //localStorage.setItem('user', JSON.stringify(this.formDataLocal))
      // Validate if all required fields are filled
      if (this.formDataLocal.nivel && this.formDataLocal.estilo && this.formDataLocal.genero) {
        //this.$emit('formulario-enviado2', this.formDataLocal)
        // Proceed to paso3
        // this.$router.push('/formulario-guitarra3')
        this.animationClass = 'animate__animated  animate__backOutDown'
        setTimeout(() => {
          this.submitForm()
        }, 500)
      } else {
        // Handle form validation error (optional)
        console.error('Please fill out all required fields')
        // Optionally, show a message to the user
        alert('Please fill out all required fields')
      }
      //   this.$router.push('/formulario-guitarra3')
    }, //proximoPaso

    submitForm() {
      this.$emit('formulario-enviado2', this.formDataLocal)
    },

    pasoAnterior() {
      //this.$router.go(-1)
      this.animationClass = 'animate__animated animate__backOutLeft'
      setTimeout(() => {
        this.$router.push('/')
        localStorage.setItem('user', JSON.stringify(this.formDataLocal))
      }, 500)
    } //pasoAnterior
  }, //methods
  emits: ['formulario-enviado2']
}
</script>

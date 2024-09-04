<template>
  <div class="col d-flex justify-content-center">
    <transition-group
      tag="div"
      class="col d-flex justify-content-center"
      enter-active-class="animate__animated animate__fadeInUp "
      leave-active-class="animate__animated animate__fadeOutDown"
      name="fade"
    >
      <div v-for="guitarra in guitarras" :key="guitarra.id">
        <!-- Check conditions for displaying different sections -->

        <div class="articulos card" style="width: 18rem">
          <br />
          <h3>{{ guitarra.titulo }}</h3>

          <div>
            <img class="card-img-top" :src="guitarra.img" :alt="guitarra.alt" width="300" />

            <br />
            <p class="card-text">{{ guitarra.texto }}</p>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'GuitarraRecomendada',
  props: {
    guitarras: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
.d-flex {
  flex-wrap: wrap !important;
}
</style>

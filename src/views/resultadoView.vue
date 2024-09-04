<template>
  <main>
    <div class="ver container container-fluid" :class="animationClass">
      <h1>Datos ingresados en la fecha:</h1>
      <h3>{{ this.fecha }}</h3>
      <p>
        <br />
        <b>Nombre:</b> {{ nombre }}<br />
        <b>Apellido:</b> {{ apellido }}<br />
        <b>Nivel:</b>{{ nivel }}<br />
        <b>Estilo:</b>{{ estilo }}<br />
        <b>Género:</b> {{ genero }}<br />
        <b>Edad:</b> {{ edad }}<br />
      </p>
      <button class="btn btn-dark btn-outline-light volver" @click="volver">
        Volver al paso anterior
      </button>
      <GuitarristasRecomendados :nombre="nombre" :genero="genero" :estilo="estilo" :nivel="nivel" />
      <div class="row">
        <GuitarraRecomendada :guitarras="guitarraRecomendada" />
      </div>
    </div>
    <button class="btn btn-dark btn-outline-light volver" @click="volver">
      Volver al paso anterior
    </button>
  </main>
</template>

<script>
import guitarras from '../components/guitarrasData.js'
import GuitarristasRecomendados from '../components/guitarristasRecomendados.vue'
import GuitarraRecomendada from '../components/guitarraLista.vue'
export default {
  name: 'Resultado',
  components: {
    GuitarristasRecomendados,
    GuitarraRecomendada
  },
  data() {
    return {
      nombre: '',
      apellido: '',
      edad: '',
      nivel: '',
      estilo: '',
      genero: '',
      fecha: '',
      guitarraRecomendada: [],
      animationClass: 'animate__animated animate__fadeInUp'
    }
  }, //data

  mounted() {
    //console.log(guitarras)
    const user = JSON.parse(localStorage.getItem('user'))
    // console.log('Desde el resultado', user)
    this.nombre = user.nombre
    this.apellido = user.apellido
    this.edad = user.edad
    this.nivel = user.nivel
    this.estilo = user.estilo
    this.genero = user.genero
    this.fecha = this.fechaActual()

    this.handleLogic(user)
  },

  methods: {
    fechaActual() {
      const user = JSON.parse(localStorage.getItem('user'))

      const fecha = new Date(user.fecha)
      const dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado']
      const meses = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
      ]

      const diaSemana = dias[fecha.getDay()]
      const dia = fecha.getDate()
      const mes = meses[fecha.getMonth()]
      const año = fecha.getFullYear()
      this.fechaExacta = `${diaSemana[0].toUpperCase() + diaSemana.slice(1)} ${dia} de ${mes} del año ${año}`
      return this.fechaExacta
    }, // fechaActual

    handleLogic(dato) {
      //Resetear las recomendacioens previas
      this.guitarraRecomendada = []
      this.guitarristasRecomendados = []
      this.imagenesDeGuitarras = []
      //console.log(dato.edad, dato.edad >= 18)
      //Determinar recomendaciones basadados en los datos del ususario
      if (dato.edad >= 18) {
        if (dato.estilo === 'Acustico') {
          if (dato.genero === 'Blues') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitarra) => {
                if (
                  guitarra.titulo === 'Yamaha FG800' ||
                  guitarra.titulo === 'Fender CD-60S' ||
                  guitarra.titulo === 'Epiphone DR-100' ||
                  guitarra.titulo === 'Seagull S6 Original' ||
                  guitarra.titulo === 'Ibanez AW54OPN'
                ) {
                  this.guitarraRecomendada.push(guitarra)
                }
              }) //guitarras.forEach
            } //dato.nivel PRINCIPIANTE
            else if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitarra) => {
                if (
                  guitarra.titulo === 'Martin 000-15M' ||
                  guitarra.titulo === 'Gibson J-15' ||
                  guitarra.titulo === 'Taylor 314ce' ||
                  guitarra.titulo === 'Breedlove Oregon Concert CE' ||
                  guitarra.titulo === 'Blueridge BR-140'
                ) {
                  this.guitarraRecomendada.push(guitarra)
                }
              })
            } //INTERMEDIO
            else if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitarra) => {
                if (
                  guitarra.titulo === 'Martin D-28' ||
                  guitarra.titulo === 'Taylor 814ce' ||
                  guitarra.titulo === 'Gibson J-45' ||
                  guitarra.titulo === 'Collings D2H' ||
                  guitarra.titulo === 'Guild D-55'
                ) {
                  this.guitarraRecomendada.push(guitarra)
                }
              })
            } //AVANZADO
          } //dato.genero BLUES

          if (dato.genero === 'Country') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Yamaha FG800' ||
                  guitar.titulo === 'Fender CD-60S' ||
                  guitar.titulo === 'Epiphone DR-100' ||
                  guitar.titulo === 'Taylor Big Baby Taylor' ||
                  guitar.titulo === 'Ibanez AW54OPN'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Martin D-28' ||
                  guitar.titulo === 'Gibson J-45' ||
                  guitar.titulo === 'Taylor 814ce' ||
                  guitar.titulo === 'Breedlove Oregon Concert E' ||
                  guitar.titulo === 'Blueridge BR-160'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Martin D-28' ||
                  guitar.titulo === 'Gibson SJ-200' ||
                  guitar.titulo === 'Taylor 814ce DLX' ||
                  guitar.titulo === 'Collings D2H' ||
                  guitar.titulo === 'Santa Cruz D/PW'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Country

          if (dato.genero === 'Jazz') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Yamaha FG800' ||
                  guitar.titulo === 'Epiphone AJ-220S' ||
                  guitar.titulo === 'Fender CD-60S' ||
                  guitar.titulo === 'Seagull S6 Original' ||
                  guitar.titulo === 'Epiphone Hummingbird Pro'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Ibanez Artwood AW54CE' ||
                  guitar.titulo === 'Gretsch G5022CE Rancher' ||
                  guitar.titulo === 'Gretsch G9500 Jim Dandy' ||
                  guitar.titulo === 'Takamine GD20-NS' ||
                  guitar.titulo === 'Washburn WD10SCE'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Collings OM1' ||
                  guitar.titulo === 'Gibson L-5 CES' ||
                  guitar.titulo === 'Santa Cruz Vintage Artist' ||
                  guitar.titulo === 'Taylor 314ce' ||
                  guitar.titulo === 'Martin 000-28EC'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Jazz
        } //dato.estilo ACUSTICO

        if (dato.estilo === 'Electrico') {
          if (dato.genero === 'Rock') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Squier Affinity Stratocaster' ||
                  guitar.titulo === 'Epiphone Les Paul Special II' ||
                  guitar.titulo === 'Yamaha Pacifica 112V' ||
                  guitar.titulo === 'Ibanez GRX70QA' ||
                  guitar.titulo === 'Jackson JS Series Dinky Arch Top JS22'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Fender Player Stratocaster' ||
                  guitar.titulo === 'Gretsch G2622 Streamliner' ||
                  guitar.titulo === 'Epiphone Les Paul Standard' ||
                  guitar.titulo === 'PRS SE Standard 24' ||
                  guitar.titulo === 'ESP LTD EC-256'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Gibson Les Paul Standard' ||
                  guitar.titulo === 'Fender American Professional Stratocaster' ||
                  guitar.titulo === 'PRS Custom 24' ||
                  guitar.titulo === 'Ibanez Prestige RG652' ||
                  guitar.titulo === 'Gretsch G6120T Players Edition Nashville'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Rock

          if (dato.genero === 'Blues') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Epiphone Les Paul Special II' ||
                  guitar.titulo === "Squier Classic Vibe '50s Stratocaster" ||
                  guitar.titulo === 'Yamaha Revstar RS320' ||
                  guitar.titulo === 'Ibanez Artcore AS53' ||
                  guitar.titulo === 'Fender Player Telecaster'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Epiphone Casino Coupe' ||
                  guitar.titulo === "Fender Vintera '60s Stratocaster" ||
                  guitar.titulo === 'Gibson Les Paul Studio' ||
                  guitar.titulo === 'PRS SE Custom 22' ||
                  guitar.titulo === 'Gretsch G5420T Electromatic Hollow Body'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Fender American Professional Telecaster' ||
                  guitar.titulo === 'Gibson ES-335' ||
                  guitar.titulo === 'PRS McCarty 594' ||
                  guitar.titulo === "D'Angelico Premier DC" ||
                  guitar.titulo === 'Suhr Classic S'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Blues

          if (dato.genero === 'Jazz') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Epiphone ES-339 P90 PRO' ||
                  guitar.titulo === "Squier Classic Vibe '60s Jazzmaster" ||
                  guitar.titulo === 'Ibanez Artcore AF55' ||
                  guitar.titulo === 'Yamaha SA2200' ||
                  guitar.titulo === 'Gretsch G5420T Electromatic Hollow Body'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Fender Player Jazzmaster' ||
                  guitar.titulo === 'Epiphone Emperor Swingster' ||
                  guitar.titulo === 'Ibanez Artcore Expressionist AS93' ||
                  guitar.titulo === 'Gibson ES-175' ||
                  guitar.titulo === 'PRS SE Hollowbody II'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Gibson L-5 CES' ||
                  guitar.titulo === 'Heritage H-575' ||
                  guitar.titulo === "D'Angelico Excel EXL-1" ||
                  guitar.titulo === 'PRS Private Stock Hollowbody II' ||
                  guitar.titulo === 'Collings I-35 LC'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Jazz

          if (dato.genero === 'Heavy Metal') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Epiphone Les Paul Special II' ||
                  guitar.titulo === 'ESP LTD EC-10' ||
                  guitar.titulo === 'Ibanez GRX70QA' ||
                  guitar.titulo === 'Schecter Omen-6' ||
                  guitar.titulo === 'Jackson JS Series Dinky JS11'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Epiphone Les Paul Standard' ||
                  guitar.titulo === 'Jackson Pro Series Soloist SL2' ||
                  guitar.titulo === 'ESP LTD MH-1000' ||
                  guitar.titulo === 'Ibanez RG550' ||
                  guitar.titulo === 'Schecter Hellraiser C-1'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Gibson Les Paul Standard' ||
                  guitar.titulo === 'Fender Jim Root Stratocaster' ||
                  guitar.titulo === 'ESP E-II M-II' ||
                  guitar.titulo === 'Jackson USA Soloist SL2H' ||
                  guitar.titulo === 'Ibanez Prestige RG652AHM'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Heavy Metal
        } //Electrico
      } //dato.edad //dato.edad > 18

      if (dato.edad >= 5 && dato.edad < 18) {
        if (dato.estilo === 'Acustico') {
          if (dato.genero === 'Blues') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Fender CD-60S' ||
                  guitar.titulo === 'Epiphone DR-100' ||
                  guitar.titulo === 'Yamaha FG800'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Gibson J-15' ||
                  guitar.titulo === 'Taylor 314ce' ||
                  guitar.titulo === 'Blueridge BR-140'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Martin D-28' ||
                  guitar.titulo === 'Taylor 814ce' ||
                  guitar.titulo === 'Gibson J-45'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Blues

          if (dato.genero === 'Country') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Yamaha FG800' ||
                  guitar.titulo === 'Fender CD-60S' ||
                  guitar.titulo === 'Epiphone DR-100' ||
                  guitar.titulo === 'Taylor Big Baby Taylor' ||
                  guitar.titulo === 'Ibanez AW54OPN'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Martin D-28' ||
                  guitar.titulo === 'Gibson J-45' ||
                  guitar.titulo === 'Taylor 814ce' ||
                  guitar.titulo === 'Breedlove Oregon Concert E' ||
                  guitar.titulo === 'Blueridge BR-160'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Martin D-28' ||
                  guitar.titulo === 'Gibson SJ-200' ||
                  guitar.titulo === 'Taylor 814ce DLX' ||
                  guitar.titulo === 'Collings D2H' ||
                  guitar.titulo === 'Santa Cruz D/PW'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Country

          if (dato.genero === 'Jazz') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Yamaha FG800' ||
                  guitar.titulo === 'Epiphone AJ-220S' ||
                  guitar.titulo === 'Fender CD-60S' ||
                  guitar.titulo === 'Seagull S6 Original' ||
                  guitar.titulo === 'Epiphone Hummingbird Pro'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Ibanez Artwood AW54CE' ||
                  guitar.titulo === 'Gretsch G5022CE Rancher' ||
                  guitar.titulo === 'Gretsch G9500 Jim Dandy' ||
                  guitar.titulo === 'Takamine GD20-NS' ||
                  guitar.titulo === 'Washburn WD10SCE'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Collings OM1' ||
                  guitar.titulo === 'Gibson L-5 CES' ||
                  guitar.titulo === 'Santa Cruz Vintage Artist' ||
                  guitar.titulo === 'Taylor 314ce' ||
                  guitar.titulo === 'Martin 000-28EC'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Jazz
        } //'Acustico'
        if (dato.estilo === 'Electrico') {
          if (dato.genero === 'Rock') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Squier Affinity Stratocaster' ||
                  guitar.titulo === 'Yamaha Pacifica 112V' ||
                  guitar.titulo === 'Ibanez GRX70QA'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Fender Player Stratocaster' ||
                  guitar.titulo === 'Epiphone Les Paul Standard' ||
                  guitar.titulo === 'ESP LTD EC-256'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Fender American Professional Stratocaster' ||
                  guitar.titulo === 'PRS Custom 24' ||
                  guitar.titulo === 'Gretsch G6120T Players Edition Nashville'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Rock
          if (dato.genero === 'Blues') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === "Squier Classic Vibe '50s Stratocaster" ||
                  guitar.titulo === 'Yamaha Revstar RS320' ||
                  guitar.titulo === 'Fender Player Telecaster'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === "Fender Vintera '60s Stratocaster" ||
                  guitar.titulo === 'Gibson Les Paul Studio' ||
                  guitar.titulo === 'PRS SE Custom 22'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Fender American Professional Telecaster' ||
                  guitar.titulo === 'Gibson ES-335' ||
                  guitar.titulo === 'PRS McCarty 594'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Blues

          if (dato.genero === 'Jazz') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Epiphone ES-339 P90 PRO' ||
                  guitar.titulo === 'Ibanez Artcore AF55' ||
                  guitar.titulo === 'Yamaha SA2200'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Fender Player Jazzmaster' ||
                  guitar.titulo === 'Ibanez Artcore Expressionist AS93' ||
                  guitar.titulo === 'Gibson ES-175'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Gibson L-5 CES' ||
                  guitar.titulo === 'Heritage H-575' ||
                  guitar.titulo === 'PRS Private Stock Hollowbody II'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Jazz

          if (dato.genero === 'Heavy Metal') {
            if (dato.nivel === 'Principiante') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'ESP LTD EC-10' ||
                  guitar.titulo === 'Ibanez GRX70QA' ||
                  guitar.titulo === 'Jackson JS Series Dinky JS11'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Intermedio') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Epiphone Les Paul Standard' ||
                  guitar.titulo === 'Jackson Pro Series Soloist SL2' ||
                  guitar.titulo === 'Ibanez RG550'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }

            if (dato.nivel === 'Avanzado') {
              guitarras.forEach((guitar) => {
                if (
                  guitar.titulo === 'Gibson Les Paul Standard' ||
                  guitar.titulo === 'Fender Jim Root Stratocaster' ||
                  guitar.titulo === 'Ibanez Prestige RG652AHM'
                ) {
                  this.guitarraRecomendada.push(guitar)
                }
              })
            }
          } //Heavy Metal
        } //Electrico
      } //dato.edad >= 5 && dato.edad < 18)
      console.log(this.guitarraRecomendada)
    }, //handleLogic
    volver() {
      this.$router.go(-1)
    } //volver
  },

  beforeRouteLeave(to, from, next) {
    this.animationClass = 'animate__animated animate__fadeOutDown'
    setTimeout(() => {
      next()
    }, 1000)
  }
}
</script>

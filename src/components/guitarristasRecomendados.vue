<template>
  <div class="ver">
    <div v-if="genero === 'Blues' && estilo === 'Acustico' && nivel === 'Principiante'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Robert Johnson</strong>
        <br />
        <strong>Lightnin' Hopkins</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Blues' && estilo === 'Acustico' && nivel === 'Intermedio'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Mississippi John Hurt</strong>
        <br />
        <strong>Taj Mahal</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Blues' && estilo === 'Acustico' && nivel === 'Avanzado'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Son House</strong>
        <br />
        <strong>Skip James</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Jazz' && estilo === 'Acustico' && nivel === 'Principiante'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Django Reinhardt</strong>
        <br />
        <strong>Joe Pass</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Jazz' && estilo === 'Acustico' && nivel === 'Intermedio'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Wes Montgomery</strong>
        <br />
        <strong>Charlie Christian</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Jazz' && estilo === 'Acustico' && nivel === 'Avanzado'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Pat Metheny</strong>
        <br />
        <strong>Bill Frisell</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Country' && estilo === 'Acustico' && nivel === 'Principiante'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Willie Nelson</strong>
        <br />
        <strong>Chet Atkins</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Country' && estilo === 'Acustico' && nivel === 'Intermedio'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Merle Travis</strong>
        <br />
        <strong>Jerry Reed</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Country' && estilo === 'Acustico' && nivel === 'Avanzado'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Doc Watson</strong>
        <br />
        <strong>Tommy Emmanuel</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Blues' && estilo === 'Electrico' && nivel === 'Principiante'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>B.B. King</strong>
        <br />
        <strong>Stevie Ray Vaughan</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Blues' && estilo === 'Electrico' && nivel === 'Intermedio'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Eric Clapton</strong>
        <br />
        <strong>Buddy Guy</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Blues' && estilo === 'Electrico' && nivel === 'Avanzado'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Albert King</strong>
        <br />
        <strong>Freddie King</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Rock' && estilo === 'Electrico' && nivel === 'Principiante'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Chuck Berry</strong>
        <br />
        <strong>Keith Richards</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Rock' && estilo === 'Electrico' && nivel === 'Intermedio'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Jimmy Page (Led Zeppelin)</strong>
        <br />
        <strong>Angus Young (AC/DC)</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Rock' && estilo === 'Electrico' && nivel === 'Avanzado'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>David Gilmour (Pink Floyd)</strong>
        <br />
        <strong>Eddie Van Halen</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Jazz' && estilo === 'Electrico' && nivel === 'Principiante'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Grant Green</strong>
        <br />
        <strong>John Scofield</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Jazz' && estilo === 'Electrico' && nivel === 'Intermedio'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>John McLaughlin</strong>
        <br />
        <strong>Pat Martino</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Jazz' && estilo === 'Electrico' && nivel === 'Avanzado'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Allan Holdsworth</strong>
        <br />
        <strong>Kurt Rosenwinkel</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Heavy Metal' && estilo === 'Electrico' && nivel === 'Principiante'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Tony Iommi (Black Sabbath)</strong>
        <br />
        <strong>Dave Mustaine (Megadeth)</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Heavy Metal' && estilo === 'Electrico' && nivel === 'Intermedio'">
      <br />
      <h2>{{ mayusculas(nombre) }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Kirk Hammett (Metallica)</strong>
        <br />
        <strong>Dimebag Darrell (Pantera)</strong>
      </p>
    </div>

    <div v-else-if="genero === 'Heavy Metal' && estilo === 'Electrico' && nivel === 'Avanzado'">
      <br />
      <h2>{{ nombre }}</h2>
      <p>
        Veo que te gusta el <strong>{{ genero }}</strong> de estilo <strong>{{ estilo }}</strong> y
        eres de nivel <strong>{{ nivel }}</strong
        >, estos son los guitarristas que deberias de escuchar:
      </p>

      <p>
        <strong>Steve Vai</strong>
        <br />
        <strong>Yngwie Malmsteen</strong>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuitarristasRecomendados',
  props: {
    nombre: String,
    genero: String,
    estilo: String,
    nivel: String,
    required: true
  },
  methods: {
    mayusculas(texto) {
      return texto.toUpperCase()
    }
  }
}
</script>

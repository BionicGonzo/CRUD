<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container>
      <template>
        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Nombre:" label-for="input-1" description="Ingrese nombre">
              <b-form-input id="input-1" v-model="usuario.nombre" type="text" placeholder="Ingrese nombre" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Correo:" label-for="input-2">
              <b-form-input id="input-2" v-model="usuario.correo" type="email" placeholder="Ingrese correo" required></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="success">Guardar</b-button>
            <b-button type="reset" variant="danger">Reiniciar</b-button>
          </b-form>
          <b-card class="mt-3" header="Resultado">
            <pre class="m-0">{{ usuario }}</pre>
          </b-card>
        </div>
      </template>
    </b-container>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export default {
  name: 'Insertar',
  props: {
    msg: String
  },
  data:() => {
    return {
      show: true,
      usuario: {
        nombre: '',
        correo: null,
      },
    }
  }, // fin Data
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.usuario));
      const db = getFirestore();
      const { usuario } = this;
      await addDoc(collection(db,"usuarios"), usuario);
      console.log('Usuario almacenado exitosamente.');
      this.limpiar();
    },
    onReset(event) {
      event.preventDefault()
      this.limpiar();
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    limpiar() {
      // Reset our form values
      this.usuario.nombre = '';
      this.usuario.correo = '';
    }
  }, //fin methods
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

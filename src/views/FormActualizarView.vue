<template>
  <div>
    <h1>Formulario de Actualización</h1>
    <template>
      <div>
        <!-- Tabla con data estática
        <b-table striped hover :items="items"></b-table> -->
        <div v-if="this.items[0] != null">
          <table border="1">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
            </tr>
            <tr>
              <td>{{ items[0].id }}</td>
              <td><input type="text" v-model="items[0].nombre"></td>
              <td><input type="text" v-model="items[0].correo"></td>
            </tr>
              <tr>
                <td></td>
                <td>
                  <b-button variant="warning text-white" v-on:click="updateUser()">Actualizar</b-button>
                </td>
                <td></td>
              </tr>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { getFirestore, collection, onSnapshot, query, doc, updateDoc, } from 'firebase/firestore'

export default {
  name:'FormActualizarView',
  data: () => {
    return {
    items: [],
    }
  }, // fin data
  methods:{
    async getUser() {
      console.log('Llama a getUser.');
      const db = getFirestore();
      let unid = this.$route.params.id;
      console.log('ID recibido: ', unid);
      const q = await query(collection(db, 'usuarios'));
      onSnapshot(q, (querySnapshot) => {
          const items = [];
          this.items = [];
          querySnapshot.forEach((doc) => {
            if( doc.id == unid){
              items.push({id: doc.id, nombre: doc.data().nombre, correo: doc.data().correo});
            }
          });
          this.items = items;
          console.log(this.items);
      });
    },
    async updateUser(){
      console.log('Llama a updateUser.')
      const db = getFirestore();
      let elid = this.items[0].id;
      const userRef = doc(db, 'usuarios', elid);
      console.log(userRef);
      console.log(this.items[0].nombre);
      await updateDoc(userRef, {
        nombre: this.items[0].nombre,
        correo: this.items[0].correo,
      });
      console.log('Usuario actualizado exitosamente.');
      this.limpiar();
    },
    limpiar() {
      // Reset our form values
      this.items[0].nombre = '';
      this.items[0].correo = '';
      this.items[0].id = '';
    }
  },
  mounted() {
    console.log('Invoca a mounted.');
    this.getUser();
  },
}
</script>

<style scoped>
table {
  display: inline-block;
  text-align: center;
}
</style>

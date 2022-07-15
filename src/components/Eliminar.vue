<template>
  <div>
    <h1>Eliminar Datos de Firestore</h1>
    <table border="1">
      <tr>
        <th>Datos</th>
        <th>Correo</th>
        <th>Operación</th>
      </tr>
      <tr v-for="elementos in usuarios" :key="elementos">
          <td>{{elementos.data.nombre}}</td>
          <td>{{elementos.data.correo}}</td>
          <td>
            <b-button variant="danger" v-on:click="deleteUser(elementos.id)">Eliminar</b-button>
          </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getFirestore, collection, onSnapshot, query, doc, deleteDoc  } from 'firebase/firestore'
export default {
  name: 'Eliminar',
  data:() => {
  return{
    usuarios:[],
  }
  },
  methods:{
  async getUsers() {
    console.log('Llama a getUsers.');
    const db = getFirestore();
    const q = query(collection(db, "usuarios"));
    onSnapshot(q, (querySnapshot) => {
    const usuarios = [];
    this.usuarios = [];

    querySnapshot.forEach((doc) => {
      usuarios.push({id: doc.id, data: doc.data()});
    });
    this.usuarios = usuarios;
    });
  },
  async deleteUser(elid) {
    console.log(elid);
    const db = getFirestore();
    await deleteDoc(doc(db, "usuarios", elid));
    }
  },
  mounted() {
    console.log('Invoca a mounted.');
    this.getUsers();
  },
}
</script>

<style scoped>
table {
  display: inline-block;
  text-align: center;
}
</style>
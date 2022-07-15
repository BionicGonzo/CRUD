<template>
  <div>
    <h1>Consultar Datos de Firestore</h1>
    <ul>
      <li v-for="elementos in usuarios">
          <span>{{ elementos.data.nombre }}</span> - <span> {{ elementos.data.correo}} </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore'
export default{
  name: 'Consultar',
  data:()=>{
    return{
        usuarios:[],
    }
  },
  methods:{
    async getUsers(){
      console.log('llama a getUsers');
      const db=getFirestore();
      const q = query(collection(db, "usuarios"));
      onSnapshot(q, (querySnapshot)=>{
          const usuarios = [];
          this.usuarios = [];

          querySnapshot.forEach((doc)=>{
              usuarios.push({id: doc.id, data: doc.data() });
          });
          this.usuarios= usuarios;
      });
    }
  },
  mounted(){
      console.log('invoca mounted');
      this.getUsers();
  },
}
</script>

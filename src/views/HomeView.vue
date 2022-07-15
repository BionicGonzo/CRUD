<template>
  <div class="home">
    <Insertar msg="Formulario de Inserción"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Insertar from '@/components/Insertar.vue'

export default {
  name: 'HomeView',
  components: {
    Insertar
  }
}
</script>

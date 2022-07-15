<template>
  <div id="app">
    <nav>
      <router-link to="/">Formulario</router-link> |
      <router-link to="/consultar">Consultar</router-link> |
      <router-link to="/eliminar">Eliminar</router-link> |
      <router-link to="/actualizar">Actualizar</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #000;
}

nav a.router-link-exact-active {
  color: orange;
}
</style>

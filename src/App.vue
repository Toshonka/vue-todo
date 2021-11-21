<template>
  <div id="app">
    <router-link to="/"> Домой </router-link> 
    <a> | </a>
    <router-link to="/info"> Инфо </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f1820;
  margin-top: 60px;
}
.cards {
  display: flex;
  flex-direction: row;
}
</style> 

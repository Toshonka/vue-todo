<template>
  <div id="app">
    <InfoPage/>
  </div>
</template>

<script>
import InfoPage from './pages/InfoPage.vue'

export default {
  name: 'App',
  components: {
    InfoPage
  }
}
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

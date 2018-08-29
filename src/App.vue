<template>
  <div id="app">
    <top-header></top-header>
    <top-navigation-panel></top-navigation-panel>
  </div>
</template>

<script>
import topHeader from './components/topHeader.vue'
import topNavigationPanel from './components/TopNavigationPanel.vue'

export default {
  components: {
    topHeader,
    topNavigationPanel
  }
}
</script>

<style>
  body, *, *:before, *:after {
    box-sizing: border-box;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

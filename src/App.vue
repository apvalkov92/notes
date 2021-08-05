<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <notes />
      </div>
    </div>
  </div>
</template>

<script>
import Notes from './components/Notes'

export default {
  name: 'App',
  components: {
    Notes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

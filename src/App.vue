<template>
  <div id="app">
    <h1 class="title">table</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  transition: all .2s;
}
html {
  color: rgb(222, 222, 222);
  background: rgb(0, 43, 54);
  perspective: 1000px;
}
.title {
  color: #ddd;
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

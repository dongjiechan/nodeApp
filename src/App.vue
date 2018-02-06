<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
// import store from '../src/vuex/store'

export default {
  name: 'App'
}
</script>

<style lang="less">
@import url("//unpkg.com/mint-ui/lib/style.css");
@import url("./assets/style.css");

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>

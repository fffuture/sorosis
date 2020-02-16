<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    A UI FrameWork!!!
    <so-button></so-button>
    <so-list v-for="(item,index) in 3" :key="index"></so-list>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import RButton from '../node_modules/rainbow-candy/package'
export default {
  name: "app",
  components: {
    // HelloWorld
  },
  created: function() {
    // window.console.log("app this:", this);
    // console.log("object keys", Object.keys(this));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

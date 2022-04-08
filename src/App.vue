<template>
  <!-- <Header/> -->
  <div>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// 1 componet a muốn xài component b thì phải import và đăng ký
// import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
// import Product from './components/Product.vue'

export default {
  name: 'App',
  //dang ký
  components: {
    // HelloWorld
    // Header,
    Home,
    Footer
    
    // Product
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

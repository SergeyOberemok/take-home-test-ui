<template>
  <div id="app">
    <Search class="mb-3" />

    <div class="container px-4">
      <ProductList />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Search from './components/Search.vue';
import ProductList from './components/products/ProductList.vue';

@Component({
  components: {
    Search,
    ProductList
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

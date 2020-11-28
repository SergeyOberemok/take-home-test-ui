<template>
  <div id="app">
    <search-component class="mb-3" v-on:search-changed="applySearch" />

    <div class="container px-4">
      <product-list-component />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchComponent from './components/SearchComponent.vue';
import ProductListComponent from './components/products/ProductListComponent.vue';

@Component({
  components: {
    SearchComponent,
    ProductListComponent
  }
})
export default class App extends Vue {
  applySearch(criteria: string): void {
    this.$store.commit('changeSearch', criteria);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

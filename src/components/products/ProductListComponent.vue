<template>
  <div class="product-list--wrapper flex sm:flex-col md:flex-row">
    <product-component
      v-for="product in products"
      :key="product.id"
      v-bind:product="product"
      class="md:mr-4 sm:mb-4"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductComponent from './ProductComponent.vue';
import { Product } from '@/BL/models/index';

@Component({
  components: { ProductComponent }
})
export default class ProductListComponent extends Vue {
  created(): void {
    this.$store.commit('fetchProducts');
  }

  get products(): Product[] {
    return this.$store.getters.filteredProducts;
  }

  get criteria(): string {
    return this.$store.state.searchCriteria;
  }
}
</script>

<style lang="scss"></style>

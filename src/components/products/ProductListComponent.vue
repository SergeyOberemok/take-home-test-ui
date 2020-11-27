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
import axios from 'axios';
import { Product, ProductDto } from '@/BL/models/index';

@Component({
  components: { ProductComponent }
})
export default class ProductListComponent extends Vue {
  products: Product[] = [];

  created(): void {
    axios
      .get<ProductDto[]>('http://localhost:9000/products')
      .then(
        ({ data }) =>
          (this.products = data.map((product) =>
            Object.assign(new Product(), product)
          ))
      );
  }
}
</script>

<style lang="scss"></style>

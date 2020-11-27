<template>
  <div class="product-list-wrapper flex sm:flex-col md:flex-row">
    <Product />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Product from './Product.vue';

@Component({
  components: { Product }
})
export default class ProductList extends Vue {}
</script>

<style lang="scss"></style>

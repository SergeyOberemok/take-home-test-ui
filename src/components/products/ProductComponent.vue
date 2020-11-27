<template>
  <div class="product--wrapper">
    <div class="card border rounded-md shadow bg-white overflow-hidden">
      <div class="title bg-gray-50 p-2 border-b-2 border-gray-200">
        {{ product.name }}
      </div>

      <div class="content">
        <customer-list-component v-bind:product-id="product.id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Product from '../customers/CustomerComponent.vue';
import CustomerListComponent from '../customers/CustomerListComponent.vue';

@Component({
  components: { CustomerListComponent }
})
export default class ProductComponent extends Vue {
  @Prop({ required: true })
  product!: Product;
}
</script>

<style lang="scss"></style>

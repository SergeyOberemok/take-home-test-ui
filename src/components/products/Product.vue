<template>
  <div class="product-wrapper">
    <div class="card border rounded-md shadow bg-white overflow-hidden">
      <div class="title bg-gray-50 p-2 border-b-2 border-gray-200">Product</div>

      <div class="content">
        <CustomerList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomerList from '../customers/CustomerList.vue';

@Component({
  components: { CustomerList }
})
export default class Product extends Vue {}
</script>

<style lang="scss"></style>

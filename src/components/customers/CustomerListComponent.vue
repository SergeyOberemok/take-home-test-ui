<template>
  <div class="customer-list--wrapper flex flex-col pt-2">
    <customer-component
      v-for="(customer, i) in customers"
      :key="customer.id"
      v-bind:customer="customer"
      class="border-b border-gray-200"
      v-bind:class="{ 'mb-2': i < customers.length - 1 }"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CustomerComponent from './CustomerComponent.vue';
import axios from 'axios';
import { Customer, CustomerDto } from '@/BL/models';

@Component({
  components: {
    CustomerComponent
  }
})
export default class CustomerList extends Vue {
  @Prop({ required: true })
  productId!: string;

  customers: Customer[] = [];

  created(): void {
    axios
      .get<{ id: string; name: string; customers: CustomerDto[] }>(
        `http://localhost:9000/products/${this.productId}`
      )
      .then(
        ({ data }) =>
          (this.customers = data.customers.map((customer) =>
            Object.assign(new Customer(), customer)
          ))
      );
  }
}
</script>

<style lang="scss"></style>

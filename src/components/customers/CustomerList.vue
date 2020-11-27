<template>
  <div class="customer-list-wrapper flex flex-col pt-2">
    <Customer class="border-b border-gray-200 mb-2" />

    <Customer class="border-b border-gray-200" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Customer from './Customer.vue';

@Component({
  components: {
    Customer
  }
})
export default class CustomerList extends Vue {}
</script>

<style lang="scss"></style>

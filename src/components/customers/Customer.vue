<template>
  <div class="customer-wrapper">
    <div class="container p-2 flex flex-col">
      <div class="flex flex-row mb-2">
        <div class="customer-avatar w-10 h-10 bg-black rounded-full"></div>
        <div class="flex flex-col mx-3">
          <div class="customer-fio text-lg">
            <span>First and LastName</span>
          </div>
          <div class="flex flex-row text-sm">
            <div class="customer-role">Role</div>
            <div class="customer-nickname text-gray-500">@ Name</div>
          </div>
        </div>
      </div>
      <div class="customer-quotes border-l-4 border-gray-300 italic text-gray-700 pl-5">
        Quotes
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Product extends Vue {}
</script>

<style lang="scss"></style>

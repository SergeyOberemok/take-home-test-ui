<template>
  <div class="search-wrapper flex shadow-lg">
    <input
      type="text"
      placeholder="Search"
      class="appearance-none w-full p-3"
      v-model="value"
      v-on:input="$emit('search-changed', value)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SearchComponent extends Vue {
  value = '';
}
</script>

<style lang="scss"></style>

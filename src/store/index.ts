import Vue from 'vue';
import Vuex from 'vuex';
import { customerList, filteredProducts, product } from './getters';
import { changeSearch, fetchCustomers, fetchProducts } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchCriteria: '',
    products: []
  },
  getters: {
    filteredProducts,
    product,
    customerList
  },
  mutations: {
    changeSearch,
    fetchProducts,
    fetchCustomers
  },
  actions: {},
  modules: {}
});

import Vue from "vue";
import Vuex from "vuex";
import products from "@/assets/json/bikerentals.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: products.products
  },
  mutations: {},
  actions: {}
});

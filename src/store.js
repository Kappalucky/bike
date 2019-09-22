import Vue from "vue";
import Vuex from "vuex";
import products from "@/assets/json/bikerentals.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: products.products,
    cart: []
  },
  mutations: {},
  actions: {},
  getters: {
    getProductById: state => id => {
      return state.products.find(product => product.id === id);
    },
    getProductByGroup: state => group => {
      if (group === "Kids") {
        return state.products.filter(product => product.name.includes(group));
      } else {
        return state.products.filter(
          product =>
            product.name.includes(group) ||
            product.name.includes("Adult Unisex")
        );
      }
    }
  }
});

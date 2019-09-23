import Vue from "vue";
import Vuex from "vuex";
import products from "@/assets/json/bikerentals.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: products.products,
    cart: [
      {
        product: {
          id: 1,
          image: "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
          name: "Adult Male Bike",
          price: 20.5,
          product_type: "bike"
        },
        quantity: 2
      }
    ]
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

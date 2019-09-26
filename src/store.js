import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/assets/json/bikerentals.json';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: products.products,
    cart: [],
  },
  mutations: {
    ADD_CART_ITEM(state, item) {
      state.cart.push(item);
    },
    UPDATE_QUANTITY(state, payload) {
      state.cart[payload.id].quantity = payload.amount;
    },
    DELETE_CART_ITEM(state, id) {
      const newObject = state.cart.filter(item => item.id !== id);
      state.cart = newObject;
    },
    EMPTY_CART(state) {
      state.cart = [];
    },
  },
  actions: {
    addToCart({ commit, state }, item) {
      return new Promise(resolve => {
        if (state.cart.length === 0) {
          // No items exist
          commit('ADD_CART_ITEM', item);
        } else {
          // Check if item is in array
          const itemExist = state.cart.some(
            cartItem => cartItem.id === item.id,
          );

          if (itemExist === true) {
            for (const i in state.cart) {
              if (state.cart[i].id === item.id) {
                // Item exist so add amount to quantity
                const newAmount = state.cart[i].quantity + item.quantity;

                commit({
                  type: 'UPDATE_QUANTITY',
                  id: i,
                  amount: newAmount,
                });

                return;
              }
            }
          } else {
            // Items in array but not the particular one
            commit('ADD_CART_ITEM', item);
          }
        }
        resolve();
      });
    },
  },
  getters: {
    getProductById: state => id =>
      state.products.find(product => product.id === id),
    getProductByGroup: state => group => {
      if (group === 'Kids') {
        return state.products.filter(product => product.name.includes(group));
      }
      return state.products.filter(
        product =>
          product.name.includes(group) || product.name.includes('Adult Unisex'),
      );
    },
    getCartTotal: state =>
      state.cart.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0,
      ),
    getCartLength: state => state.cart.length,
  },
});

export default store;

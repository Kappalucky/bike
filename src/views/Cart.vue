<template>
  <div class="container mx-auto">
    <div class="Checkout-wrapper">
      <div class="cart-return float-left mt-10 pb-4 text-center">
        <button class="text-sm" type="button" v-on:click="$router.go(-1)">
          <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-black pr-1" />Continue Shopping
        </button>
      </div>
      <h1
        class="py-10 pr-32 text-center text-3xl font-semibold font-mono uppercase text-black"
      >Shopping Bag</h1>
      <div class="summary-container">
        <template v-if="cart.length === 0">
          <h1>Cart is Empty</h1>
        </template>
        <template v-else>
          <form>
            <fieldset>
              <table class="table-auto w-full mb-4">
                <thead>
                  <tr class="border-b-2 border-solid">
                    <th
                      class="text-left text-gray-600 uppercase font-mono text-sm"
                      colspan="2"
                    >Product</th>
                    <th class="text-center text-gray-600 uppercase font-mono text-sm">Qty</th>
                    <th class="text-center text-gray-600 uppercase font-mono text-sm">Price</th>
                    <th class="text-right text-gray-600 uppercase font-mono text-sm pr-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(item, index) in cart">
                    <tr class="border-b border-solid" :key="item.id">
                      <td class="item-image w-24 py-4">
                        <img style="height:auto; width:110px;" :src="item.product.image" />
                      </td>
                      <td class="item-details px-3">
                        <div class="detail">
                          <div
                            class="name font-bold leading-none text-left capitalize"
                          >{{item.product.name}}</div>
                          <div
                            class="type text-sm leading-tight text-gray-600 text-left mb-2 capitalize"
                          >{{item.product.product_type}}</div>
                        </div>
                      </td>
                      <td class="item-quantity text-black">
                        <div class="qty-wrapper">
                          <font-awesome-icon
                            v-on:click="deleteItem(item.id)"
                            :icon="['fas', 'trash-alt']"
                            class="text-black pr-1 mr-3 text-lg"
                          />
                          <input
                            class="bg-white text-center text-black border border-gray-400 w-10 hover:border-gray-500 py-2 rounded shadow focus:outline-none focus:shadow-outline"
                            type="number"
                            min="1"
                            :id="index"
                            :value="item.quantity"
                            oninput="this.value = Math.abs(this.value)"
                            v-on:change="updateQty(index)"
                            placeholder="Amount"
                          />
                        </div>
                      </td>
                      <td class="item-price text-black">${{item.product.price.toFixed(2)}}</td>
                      <td
                        class="item-total text-black text-right pr-3"
                      >${{(item.product.price * item.quantity).toFixed(2)}}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
              <div class="cart-footer">
                <div class="subtotal">
                  <span>Subtotal</span>
                  <span>$cartTotalReduce</span>
                </div>
                <br />
                <button>Checkout</button>
              </div>
            </fieldset>
          </form>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'Cart',
	data() {
		return {};
	},
	computed: {
		...mapState(['cart']),
	},
	methods: {
		...mapMutations(['UPDATE_QUANTITY', 'DELETE_CART_ITEM']),
		updateQty(id) {
			let amount = parseInt(document.getElementById(id).value, 10);

			const item = {
				id: id,
				amount: amount,
			};
			this.UPDATE_QUANTITY(item);
		},
		deleteItem(id) {
			if (confirm(`You're about to delete an item, are you sure?`)) {
				this.DELETE_CART_ITEM(id);
			}
		},
	},
};
</script>

<style scoped>
</style>
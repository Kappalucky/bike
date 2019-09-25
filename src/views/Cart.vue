<template>
  <div class="container">
    <div class="Checkout-wrapper">
      <div class="cart-return"></div>
      <h1>Shopping Bag</h1>
      <div class="summary-container">
        <template v-if="cart.length === 0">
          <h1>Cart is Empty</h1>
        </template>
        <template v-else>
          <form>
            <fieldset>
              <table class="table-auto w-full">
                <thead>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </thead>
                <tbody>
                  <template v-for="item in cart">
                    <tr :key="item.id">
                      <td class="item-image">
                        <img :src="item.product.image" />
                      </td>
                      <td class="item-details">{{item.product.product_type}}</td>
                      <td class="item-quantity">{{item.quantity}}</td>
                      <td class="item-price">{{item.product.price.toFixed(2)}}</td>
                      <td class="item-total">{{(item.product.price * item.quantity).toFixed(2)}}</td>
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
import { mapState } from 'vuex';

export default {
	name: 'Cart',
	data() {
		return {};
	},
	computed: {
		...mapState(['cart']),
	},
};
</script>

<style scoped>
</style>
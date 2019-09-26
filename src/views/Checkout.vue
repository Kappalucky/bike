<template>
  <section class="container py-4 mx-auto">
    <section class="container w-1/2 text-center mx-auto">
      <ul class="flex justify-between text-black uppercase">
        <li class="mr-3">
          <span>1. Shipping</span>
        </li>
        <li class="mr-3 text-gray-400">
          <span>2. Billing</span>
        </li>
        <li class="mr-3 text-gray-400">
          <span>3. Review</span>
        </li>
      </ul>
    </section>
    <section class="summary w-2/3 float-left">
      <div></div>
    </section>
    <section class="summary-aside w-1/3 float-right">
      <aside class="aside-section">
        <div class="table-wrapper">
          <table class="table-auto w-full mb-4">
            <thead>
              <tr class="border-b-2 border-solid">
                <th class="text-left text-gray-600 uppercase font-mono text-sm" colspan="2">Product</th>
                <th class="text-center text-gray-600 uppercase font-mono text-sm">Qty</th>
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
                        class="name text-sm font-bold leading-none text-left capitalize"
                      >{{item.product.name}}</div>
                      <div
                        class="type text-xs leading-tight text-gray-600 text-left mb-2 capitalize"
                      >{{item.product.product_type}}</div>
                    </div>
                  </td>
                  <td class="item-quantity text-xs text-black">{{item.quantity}}</td>
                  <td
                    class="item-total text-black text-xs font-bold text-right pr-0 md:pr-3"
                  >${{(item.product.price * item.quantity).toFixed(2)}}</td>
                </tr>
              </template>
            </tbody>
          </table>
          <div class="cart-footer text-black">
            <div class="summary float-right w-48 mb-4 pb-10">
              <table class="table-auto mt-3">
                <tbody>
                  <tr class="font-bold text-xs">
                    <td class="w-3/4 pl-0 text-left pr-12 py-2">Bag Subtotal</td>
                    <td class="w-1/4 pl-0 text-right pr-8 py-2">${{this.getCartTotal.toFixed(2)}}</td>
                  </tr>
                  <tr class="font-bold text-xs">
                    <td class="w-3/4 pl-0 text-left pr-12 py-2">Shipping</td>
                    <td class="w-1/4 pl-0 text-right pr-8 py-2">$0.00</td>
                  </tr>
                  <tr class="font-bold text-xs">
                    <td class="w-3/4 pl-0 text-left pr-12 py-2">Tax</td>
                    <td class="w-1/4 pl-0 text-right pr-8 py-2">-</td>
                  </tr>
                  <tr class="cart-total font-bold text-xs border-t border-dashed border-gray-800">
                    <td class="w-3/4 pl-0 text-left pr-12 py-2">Estimated Total</td>
                    <td class="w-1/4 pl-0 text-right pr-8 py-2">${{this.getCartTotal.toFixed(2)}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
          </div>
        </div>
        <div class="form-actions mx-auto mb-4 w-2/3 text-center">
          <button
            class="bg-gray-400 text-xs hover:bg-black w-full text-white font-bold py-2 uppercase"
            type="submit"
          >Checkout</button>
        </div>
      </aside>
    </section>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
	name: 'Checkout',
	data() {
		return {};
	},
	computed: {
		...mapState(['cart', 'products']),
		...mapGetters(['getCartTotal']),
	},
	methods: {},
};
</script>

<style scoped>
</style>
<template>
  <div class="container py-4 mx-auto">
    <template v-if="!complete">
      <section class="tabs mt-4 w-1/2 text-center mx-auto">
        <ul class="flex justify-between text-black uppercase">
          <li class="mr-3" :class="[ isShipping ? 'text-gray-400' : '' ]">
            <span>1. Shipping</span>
          </li>
          <li class="mr-3" :class="[ !isShipping ? 'text-gray-400' : '' ]">
            <span>2. Billing</span>
          </li>
        </ul>
      </section>
      <section class="mt-4 mx-4">
        <div class="w-full md:w-2/3 float-left">
          <section class="shipping-form mr-2">
            <form id="form1" v-show="!isShipping" class="w-full">
              <h1
                class="text-left uppercase font-mono font-semibold text-lg mb-2 tracking-wider"
              >Shipping</h1>
              <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="First Name*"
                    id="first-name"
                    v-model="shipping.firstName"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Last Name*"
                    id="last-name"
                    v-model="shipping.lastName"
                  />
                </div>
              </div>
              <div class="flex flex-wrap mt-4">
                <div class="w-full px-3 mb-6 md:mb-0">
                  <input
                    class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Street Address*"
                    id="address"
                    v-model="shipping.address"
                  />
                </div>
              </div>
              <div class="flex flex-wrap mt-4">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="City*"
                    id="city"
                    v-model="shipping.city"
                  />
                </div>
                <div class="flex flex-wrap w-full md:w-1/2">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="State*"
                      id="state"
                      v-model="shipping.state"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Zip*"
                      id="zip"
                      type="number"
                      v-model="shipping.zip"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mt-4">
                <div class="w-full px-3 mb-6 md:mb-0">
                  <input
                    class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Phone Number*"
                    id="phone"
                    type="number"
                    v-model="shipping.phone"
                  />
                </div>
              </div>
              <div class="mt-4">
                <fieldset>
                  <legend
                    class="text-left mt-4 uppercase font-mono font-semibold text-lg tracking-wider"
                  >Delivery Method</legend>
                  <p
                    class="text-sm text-gray-600 text-left mb-4"
                  >After 5 P.M orders are processed overnight to ensure delivery in the morning. You may pick-up anytime during business hours.</p>
                  <div class="text-left">
                    <input type="radio" name="shipping" value="ground" id="ground" />
                    <label class="px-2" for="ground">Next Day</label>
                  </div>
                  <div class="text-left">
                    <input type="radio" name="shipping" value="pick-up" id="pick-up" />
                    <label class="px-2" for="pick-up">Pick-up</label>
                  </div>
                </fieldset>
              </div>
            </form>
            <form id="form2" v-show="isShipping" class="w-full">
              <div class="flex justify-between">
                <h1
                  class="text-left uppercase font-mono font-semibold text-lg mb-2 tracking-wider"
                >Billing</h1>
                <div class="checkbox-wrapper">
                  <input type="checkbox" v-model="sameBilling" />
                  <span class="text-sm text-gray-600 tracking-wide pl-2">Same as shipping</span>
                </div>
              </div>
              <template v-if="sameBilling">
                <div class="p-4 text-sm bg-gray-200">
                  <div class="edit float-right">
                    <div class="text-blue-600" v-on:click="!isShipping">Edit</div>
                  </div>
                  <div class="details text-left">
                    <div>{{shipping.firstName}} {{shipping.lastName}}</div>
                    <br />
                    <div>{{shipping.address}}</div>
                    <div>{{shipping.city}}, {{shipping.state}} {{shipping.zip}}</div>
                    <br />
                    <div>{{shipping.phone}}</div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="flex flex-wrap">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="First Name*"
                      id="first-name"
                      v-model="billing.firstName"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Last Name*"
                      id="last-name"
                      v-model="billing.lastName"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap mt-4">
                  <div class="w-full px-3 mb-6 md:mb-0">
                    <input
                      class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Street Address*"
                      id="address"
                      v-model="billing.address"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap mt-4">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="City*"
                      id="city"
                      v-model="billing.city"
                    />
                  </div>
                  <div class="flex flex-wrap w-full md:w-1/2">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <input
                        class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="State*"
                        id="state"
                        v-model="billing.state"
                      />
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <input
                        class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="Zip*"
                        id="zip"
                        type="number"
                        v-model="billing.zip"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap mt-4">
                  <div class="w-full px-3 mb-6 md:mb-0">
                    <input
                      class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Phone Number*"
                      id="phone"
                      type="number"
                      v-model="billing.phone"
                    />
                  </div>
                </div>
              </template>
              <div class="mt-4">
                <h1
                  class="text-left mt-4 uppercase font-mono font-semibold text-lg tracking-wider"
                >Payment Method</h1>
                <div class="flex flex-wrap mt-4">
                  <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                    <input
                      class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Card Number*"
                      type="number"
                      id="card-number"
                      v-model="card.number"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <input
                      class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="CVV*"
                      type="number"
                      id="cvv"
                      v-model="card.cvv"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap mt-4">
                  <div class="w-full px-3 mb-6 md:mb-0">
                    <input
                      class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Name on card*"
                      id="card-name"
                      v-model="card.name"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap mt-4">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Month*"
                      min="1"
                      max="12"
                      type="number"
                      id="card-month"
                      v-model="card.month"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="apperance-none block w-full text-sm bg-white text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Year*"
                      :min="new Date().getFullYear()"
                      :max="new Date().getFullYear() + 8"
                      type="number"
                      id="card-year"
                      v-model="card.year"
                    />
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
        <section class="summary-aside mt-4 w-full md:w-1/3 float-right">
          <aside class="aside-section">
            <div class="table-wrapper">
              <div class="flex justify-between">
                <h1
                  class="text-left uppercase font-mono font-semibold text-lg mb-2 tracking-wider"
                >Bag Summary</h1>
                <router-link to="/cart">
                  <span class="text-sm text-blue-600">Edit</span>
                </router-link>
              </div>
              <table class="table-auto w-full mb-4">
                <thead>
                  <tr class="border-b-2 border-solid">
                    <th
                      class="text-left text-gray-600 uppercase font-mono text-xs"
                      colspan="2"
                    >Product</th>
                    <th class="text-center text-gray-600 uppercase font-mono text-xs">Qty</th>
                    <th class="text-right text-gray-600 uppercase font-mono text-xs pr-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="item in cart">
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
                        <td
                          class="w-1/4 pl-0 text-right pr-8 py-2"
                        >${{this.getCartTotal.toFixed(2)}}</td>
                      </tr>
                      <tr class="font-bold text-xs">
                        <td class="w-3/4 pl-0 text-right pr-12 py-2">Shipping</td>
                        <td class="w-1/4 pl-0 text-right pr-8 py-2">$0.00</td>
                      </tr>
                      <template v-if="!isShipping">
                        <tr class="font-bold text-xs">
                          <td class="w-3/4 pl-0 text-right pr-12 py-2">Tax</td>
                          <td class="w-1/4 pl-0 text-right pr-8 py-2">-</td>
                        </tr>
                        <tr
                          class="cart-total font-bold text-xs border-t border-dashed border-gray-800"
                        >
                          <td class="w-3/4 pl-0 text-left pr-12 py-2">Estimated Total</td>
                          <td
                            class="w-1/4 pl-0 text-right pr-8 py-2"
                          >${{this.getCartTotal.toFixed(2)}}</td>
                        </tr>
                      </template>
                      <template v-else>
                        <tr class="font-bold text-xs">
                          <td class="w-3/4 pl-0 text-right pr-12 py-2">Tax</td>
                          <td class="w-1/4 pl-0 text-right pr-8 py-2">$0.00</td>
                        </tr>
                        <tr
                          class="cart-total font-bold text-xs border-t border-dashed border-gray-800"
                        >
                          <td class="w-3/4 pl-0 text-right pr-12 py-2">Total</td>
                          <td
                            class="w-1/4 pl-0 text-right pr-8 py-2"
                          >${{this.getCartTotal.toFixed(2)}}</td>
                        </tr>
                      </template>
                    </tbody>
                  </table>
                </div>
                <br />
              </div>
            </div>
            <div class="form-actions mx-auto mb-4 w-2/3 text-center">
              <template v-if="!isShipping">
                <button
                  class="bg-gray-400 text-xs hover:bg-black w-full text-white font-bold py-2 uppercase"
                  type="button"
                  v-on:click="validate"
                >Continue to Billing</button>
              </template>
              <template v-else>
                <button
                  class="bg-gray-400 text-xs hover:bg-black w-full text-white font-bold py-2 uppercase"
                  type="button"
                  v-on:click="order"
                >Order</button>
              </template>
            </div>
          </aside>
        </section>
      </section>
    </template>
    <template v-else>
      <section class="m-4 px-4">
        <div class="p4 text-center">
          <h1 class="text-xl text-mono tracking-widest">Thank You For Your Order!</h1>
          <p class="mt-2">Your order will be processed as soon as possible</p>
          <br />
          <p class="text-sm text-left text-gray-800">
            Order Date:
            <strong class="text-black pl-2">{{new Date().toLocaleString()}}</strong>
          </p>
          <p class="text-sm mt-2 text-left text-gray-800">
            Order #:
            <strong class="text-black pl-2">{{Math.floor(Math.random() * 30000000)}}</strong>
          </p>
        </div>
        <router-link to="/">
          <button
            class="bg-gray-400 text-xs mt-4 hover:bg-black w-1/2 text-white font-bold py-2 uppercase"
            type="button"
          >Return To Home</button>
        </router-link>
      </section>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
	name: 'Checkout',
	data() {
		return {
			isShipping: false,
			sameBilling: true,
			complete: false,
			shipping: {
				firstName: '',
				lastName: '',
				address: '',
				city: '',
				state: '',
				zip: '',
				phone: '',
			},
			billing: {
				firstName: '',
				lastName: '',
				address: '',
				city: '',
				state: '',
				zip: '',
				phone: '',
			},
			card: {
				number: '',
				name: '',
				cvv: '',
				month: '',
				year: '',
			},
		};
	},
	computed: {
		...mapState(['cart', 'products']),
		...mapGetters(['getCartTotal']),
	},
	methods: {
		...mapMutations(['EMPTY_CART']),
		validate() {
			if (
				this.shipping.firstName !== '' &&
				this.shipping.lastName !== '' &&
				this.shipping.address !== '' &&
				this.shipping.city !== '' &&
				this.shipping.state !== '' &&
				this.shipping.zip !== '' &&
				this.shipping.phone !== ''
			) {
				this.isShipping = true;
			} else {
				return;
			}
		},
		order() {
			if (
				this.sameBilling ||
				(this.billing.firstName !== '' &&
					this.billing.lastName !== '' &&
					this.billing.address !== '' &&
					this.billing.city !== '' &&
					this.billing.state !== '' &&
					this.billing.zip !== '' &&
					this.billing.phone !== '')
			) {
				if (
					this.card.number !== '' &&
					this.card.name !== '' &&
					this.card.cvv !== '' &&
					this.card.month !== '' &&
					this.card.year !== ''
				) {
					this.complete = true;
					this.EMPTY_CART();
					this.shipping = {
						firstName: '',
						lastName: '',
						address: '',
						city: '',
						state: '',
						zip: '',
						phone: '',
					};
					this.billing = {
						firstName: '',
						lastName: '',
						address: '',
						city: '',
						state: '',
						zip: '',
						phone: '',
					};
					this.card = {
						number: '',
						name: '',
						cvv: '',
						month: '',
						year: '',
					};
				}
			} else {
				return;
			}
		},
	},
};
</script>

<style scoped>
</style>
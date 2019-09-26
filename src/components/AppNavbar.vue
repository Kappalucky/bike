<template>
  <nav class="flex items-center justify-between flex-wrap bg-white p-6 shadow-lg">
    <div class="block lg:hidden">
      <button
        type="button"
        class="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-black hover:border-white"
        v-on:click="isActive = !isActive"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="flex items-center flex-shrink-0 text-black mr-6">
      <router-link to="/">
        <span class="font-semibold text-xl tracking-tight">Bike Shop</span>
      </router-link>
      <div :class="[isActive ? 'block' : 'hidden']">
        <router-link to="/cart">
          <button type="button" class="flex align-items px-3 py-2">
            <font-awesome-icon :icon="['fas', 'shopping-bag']" class="text-black" />
            <span class="mx-1 text-black">{{ cart.length }}</span>
          </button>
        </router-link>
      </div>
    </div>
    <div class="order-last" :class="[isActive ? 'hidden' : 'block']">
      <router-link to="/cart">
        <button type="button" class="flex align-items px-3 py-2">
          <font-awesome-icon :icon="['fas', 'shopping-bag']" class="text-black" />
          <span class="mx-1 text-black">{{ cart.length }}</span>
        </button>
      </router-link>
    </div>
    <!--Mobile Menu-->
    <div
      class="w-full block lg:hidden flex-grow lg:flex lg:items-center lg:w-auto"
      v-show="isActive"
    >
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/women"
          class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-200 mr-4"
        >Women</router-link>
        <router-link
          to="/men"
          class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-200 mr-4"
        >Men</router-link>
        <router-link
          to="/kids"
          class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-200 mr-4"
        >Kids</router-link>
      </div>
    </div>
    <!--End Mobile Menu-->
    <div class="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/women"
          class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-200 mr-4"
        >Women</router-link>
        <router-link
          to="/men"
          class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-200 mr-4"
        >Men</router-link>
        <router-link
          to="/kids"
          class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-200 mr-4"
        >Kids</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			isActive: false,
		};
	},
	computed: {
		...mapState(['cart']),
	},
};
</script>

<style scoped>
</style>
<template>
  <div class="home container mx-auto px-1">
    <section>
      <h1
        class="py-10 text-center text-3xl font-semibold font-mono uppercase text-black"
      >Shop All Products</h1>
    </section>
    <router-link to="/women">
      <div class="mt-4 mb-4 bg-black flex items-center justify-center w-full text-center h-20">
        <h1 class="text-center text-xl font-bold text-white">Women</h1>
      </div>
    </router-link>
    <router-link to="/men">
      <div class="mt-4 mb-4 bg-black flex items-center justify-center w-full text-center h-20">
        <h1 class="text-center text-xl font-bold text-white">Men</h1>
      </div>
    </router-link>
    <router-link to="/kids">
      <div class="mt-4 mb-4 bg-black flex items-center justify-center w-full text-center h-20">
        <h1 class="text-center text-xl font-bold text-white">Kids</h1>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'home',
	components: {},
};
</script>

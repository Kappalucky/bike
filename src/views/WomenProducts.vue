<template>
	<div class="home container mx-auto px-1">
		<section>
			<h1>Women</h1>
		</section>
		<!--Grid-->
		<div class="flex flex-wrap mt-4 mb-4">
			<template v-for="product in products">
				<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2 my-4" :key="product.id">
					<!-- Card -->
					<div class="max-w-sm rounded overflow-hidden shadow-lg">
						<img class="w-full" :src="product.image" />
						<div class="px-6 py-4">
							<div class="font-bold text-lg mb-2">{{ product.name }}</div>
							<small class="text-gray-700 text-base">${{ product.price.toFixed(2) }}</small>
						</div>
					</div>
					<!-- End Card -->
				</div>
			</template>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "WomenProducts",
	data() {
		return {
			products: []
		};
	},
	created() {
		this.products = this.getProductByGroup("Female");
	},
	computed: {
		...mapGetters(["getProductByGroup"])
	}
};
</script>

<style scoped>
</style>
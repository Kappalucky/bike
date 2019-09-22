<template>
	<div class="product container mx-auto px-1">
		<section class="p-10">
			<article class="pb-16">
				<nav class="pb-8">
					<div class="tracking-wide text-left capitalize flex">
                        <template v-if="this.$route.fullPath.includes('kids')">
                            <a href="/kids">
							    <span>Kids</span>
						    </a>
                        </template>
                        <template v-else-if="this.$route.fullPath.includes('women')">
                            <a href="/women">
							    <span>Women</span>
						    </a>
                        </template>
                        <template v-else>
                            <a href="/men">
							    <span>Men</span>
						    </a>
                        </template>
						<span class="mx-1">></span>
						<a :href="this.$route.fullPath">
							<span>{{product.name}}</span>
						</a>
					</div>
				</nav>
				<section class="flex align-items-center flex-wrap md:flex-no-wrap lg:flex-no-wrap xl:flex-no-wrap">
					<figure class="float-left">
						<div class="w-full object-center">
							<img class="max-w-sm" style="height:300px; width:300px;" :src="product.image" />
						</div>
					</figure>
					<section class="text-left sm:pl-0 md:pl-10 sm:mt-3 md:mt-0">
						<h1 class="text-4xl mb-3">{{product.name}}</h1>
						<div class="block">
							<div class="text-gray-500 text-lg mb-3">${{product.price.toFixed(2)}}</div>
                            <template v-if="product_type == bike">
                                <div class="mb-3">
								    <p>A lovely bike that will last a long time. The ride is smooth, assembly takes a few minutes!</p>
							    </div>
                            </template>
                            <template v-else-if="product_type == accessory">
                                <div class="mb-3">
								    <p>The perfect item to compliment the ride with your bike!</p>
							    </div>
                            </template>
							<div class="inline-block relative w-64 m-3">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Size:</label>
								<select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    <option>SM</option>
                                    <option>MD</option>
                                    <option>LG</option>
                                </select>
                                <div class="pointer-events-none absolute top-auto bottom-0 right-0 py-4 align-center flex items-center px-2 text-gray-700">
                                    <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-black" />
                                </div>
							</div>
							<div class="inline-block relative w-64 m-3">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
								<input class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Amount" v-model.number="quantity" />
							</div>
							<div class="block mt-3 w-auto flex justify-center">
								<button class="bg-gray-400 hover:bg-gray-700 w-full text-white font-bold py-2 px-4 rounded uppercase">Add To Cart</button>
							</div>
						</div>
					</section>
				</section>
			</article>
		</section>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "ProductPage",
	data() {
		return {
			product: {}
		};
	},
	created() {
		this.product = this.getProductById(3);
	},
	computed: {
		...mapGetters(["getProductById"])
	}
};
</script>
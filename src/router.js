import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import MenProducts from './views/MenProducts.vue';
import WomenProducts from './views/WomenProducts.vue';
import KidsProducts from './views/KidsProducts.vue';
import ProductPage from './views/ProductPage.vue';
import ProductGrid from './views/ProductGrid.vue';
import Cart from './views/Cart.vue';
import Checkout from './views/Checkout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/men',
      name: 'menProducts',
      component: ProductGrid,
    },
    {
      path: '/men/:id',
      component: ProductPage,
      props: true,
    },
    {
      path: '/women',
      name: 'womenProducts',
      component: ProductGrid,
    },
    {
      path: '/women/:id',
      component: ProductPage,
      props: true,
    },
    {
      path: '/kids/',
      name: 'kidsProducts',
      component: ProductGrid,
    },
    {
      path: '/kids/:id',
      component: ProductPage,
      props: true,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
  ],
});

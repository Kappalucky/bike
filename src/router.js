import Vue from 'vue';
import Router from 'vue-router';
import { mapState } from 'vuex';
import store from './store';
import Home from './views/Home.vue';
import ProductPage from './views/ProductPage.vue';
import ProductGrid from './views/ProductGrid.vue';
import Cart from './views/Cart.vue';
import Checkout from './views/Checkout.vue';
import Error404 from './views/Error404.vue';

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
      beforeEnter: (to, from, next) => {
        const cart = store.getters.getCartLength;
        if (cart === 0) {
          next('/');
        } else {
          next();
        }
      },
    },
    {
      path: '*',
      name: 'error404',
      component: Error404,
    },
  ],
});

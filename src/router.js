import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import MenProducts from "./views/MenProducts.vue";
import WomenProducts from "./views/WomenProducts.vue";
import KidsProducts from "./views/KidsProducts.vue";
import ProductPage from "./views/ProductPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/men",
      name: "menProducts",
      component: MenProducts,
    },
    {
      path: "/men/:id",
      component: ProductPage
    },
    {
      path: "/women",
      name: "womenProducts",
      component: WomenProducts,
    },
    {
      path: "/women/:id",
      component: ProductPage
    },
    {
      path: "/kids/",
      name: "kidsProducts",
      component: KidsProducts
    },
    {
      path: "/kids/:id",
      component: ProductPage
    }
  ]
});

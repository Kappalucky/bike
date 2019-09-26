import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingBag,
  faChevronDown,
  faArrowLeft,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';

library.add(faShoppingBag, faChevronDown, faArrowLeft, faTrashAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

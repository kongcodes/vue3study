import { createStore } from 'vuex';
import count from './modules/count.js';
import cart from './modules/cart.js';

export const store = createStore({
  modules: {
    count,
    cart,
  },
});

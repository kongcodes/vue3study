import { createStore } from 'vuex';
import count from './modules/count.js';

export const store = createStore({
  modules: {
    count,
  },
});

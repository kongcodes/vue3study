import { createApp } from 'vue';
import App from './App.vue';

import router from './router/index';

import element3 from '@/plugins/element3.js';

import { store } from './store/index.js';

import minstore from './minstore/minstore.js';

import './permission.js';

import '@/styles/index.scss';

createApp(App).use(router).use(store).use(element3).use(minstore).mount('#app');

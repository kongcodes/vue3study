import { createApp } from 'vue';
import App from './App.vue';

import router from './router/index';

import ElementPlus from '@/plugins/element-plus.js';
// import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/display.css'

import { store } from './store/index.js';

import minstore from './minstore/minstore.js';

import './permission.js';

import '@/styles/index.scss';

const app = createApp(App);

import loading from "./directives/loading.js";
app.directive("loading",loading);

app.use(router).use(store).use(ElementPlus).use(minstore).mount('#app');

import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

import element3 from '@/plugins/element3.js'

import '@/styles/index.scss'

createApp(App).use(router).use(element3).mount('#app')

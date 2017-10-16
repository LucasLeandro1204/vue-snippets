import Vue from 'vue';
import App from './components/App.vue';

import './core/filters.js';

window.app = new Vue(App).$mount('#app');

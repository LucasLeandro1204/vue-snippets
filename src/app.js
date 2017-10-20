import Moment from 'moment';

Moment.defaultFormat = 'YYYY-MM-DD HH:mm:ss';
Moment.defaultFormatUtc = 'YYYY-MM-DD HH:mm:ss';

import Vue from 'vue';
import App from './components/App.vue';

import './core/filters.js';

// eslint-disable-next-line
window.app = new Vue(App).$mount('#app');

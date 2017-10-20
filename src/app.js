import Moment from 'moment';

import Vue from 'vue';
import App from './components/App.vue';

import './core/filters';

Moment.defaultFormat = 'YYYY-MM-DD HH:mm:ss';
Moment.defaultFormatUtc = 'YYYY-MM-DD HH:mm:ss';

// eslint-disable-next-line
window.app = new Vue(App).$mount('#app');

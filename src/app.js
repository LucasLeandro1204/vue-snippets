import Vue from 'vue';
import Moment from 'moment';
import App from './components/App.vue';

import './core/filters';

Moment.defaultFormat = 'YYYY-MM-DD HH:mm:ss';
Moment.defaultFormatUtc = 'YYYY-MM-DD HH:mm:ss';

window.app = new Vue(App).$mount('#app');

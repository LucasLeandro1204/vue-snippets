import Vue from 'vue';
import Moment from 'moment';
import Components from './core/components';
import './core/filters';

Object.keys(Components).forEach((name) => {
  Vue.component(`Snippet${name}`, Components[name]);
});

Moment.defaultFormat = 'YYYY-MM-DD HH:mm:ss';
Moment.defaultFormatUtc = 'YYYY-MM-DD HH:mm:ss';

window.Vue = Vue;

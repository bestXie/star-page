/**
 * Created by bestxie on 2017/6/6.
 */
import Vue from 'vue';
import FastClick from 'fastclick'

import '../../../lib/rem'

import App from '../container/App.vue';
import Router from '../container/router.js';
import Store from '../store/index.js';
import Components  from '../util/modules.js'


const {store} = Store(Vue);
const {router} = Router(Vue);

Components(Vue);

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

router.beforeEach(function (to, from, next) {
    store.commit('updateLoadingStatus', true);
    store.commit('confirm', {
        show: false
    });
    next()
});

router.afterEach(function (to) {

    store.commit('updateLoadingStatus', false);
});


new Vue(Vue.util.extend({
    el: '#app',
    router,
    store
}, App));

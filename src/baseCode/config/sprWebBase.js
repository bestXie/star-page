/**
 * Created by alan on 2017-3-10.
 */
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import VueTap from 'v-tap';
//import vueTap from '../lib/v-tap';
import '../index.less';
import httpProvide from '../commonUtil/httpProvide'
import DateProvide from '../commonUtil/DateProvide'
window.Vue = Vue;
const errcode = 'errcode';
const successCode = 0;

class sprWebBase extends Vue {
    constructor(config) {
        super();
        this.init(config);
    }

    /*
     * 继承初始化必要组件
     * */
    extendsPlugins() {
        Vue.use(Router);
        Vue.use(VueResource);
        Vue.use(VueTap);
    }

    /*
     * 初始化Vue
     * */
    init(config) {
        return new Vue(config);
    }

    /*
     * 初始化路由
     * */
    initRouter(routesConfig) {
        return new Router(routesConfig);
    }

    /*
     * http封装
     * */
    sprHttpProvide(baseUrl) {
        function sprHttpProvide(baseUrl) {
            this.httpProvide = new httpProvide(baseUrl, sprWebBase)
        }

        /*
         * sprWeb to post method
         * */
        sprHttpProvide.prototype.post = function (url, params) {
            return this.httpProvide.post(url, params);
        }

        /*
         * sprWeb to get method
         * */
        sprHttpProvide.prototype.get = function (url, params) {
            return this.httpProvide.get(url, params);
        }

        return sprHttpProvide
    }


    router(_this, url) {
        _this.$router.push(url);
    }

}

window.sprWebBase = sprWebBase;
export default window.sprWebBase;



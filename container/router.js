/**
 * Created by bestxie on 2017/6/28.
 */
import VueRouter from 'vue-router';
// import {routes} from '../config/router.conf.js'

/*主页 start*/
const home = r => require.ensure([], () => r(require('../pages/home/index')), 'pages_home');
/*主页 end*/

/*编辑 start*/
const edit = r => require.ensure([], () => r(require('../pages/edit/boot/index')), 'pages_edit');

//我的模板
const common_routerWarpper = r => require.ensure([], () => r(require('../pages/edit/common/index')), 'common_router_warpper');

//编辑-首页-我的星主页
const myStar = r => require.ensure([], () => r(require('../pages/edit/myStar/index')), 'pages_myStar');

//我的模板-首页-模板和最近
const editMyTpl_myTemplet = r => require.ensure([], () => r(require('../pages/edit/myTpl/myTemplet.vue')), 'pages_editMyTpl_myTemplet');
//我的模板-我的收藏
const editMyTpl_myCollection = r => require.ensure([], () => r(require('../pages/edit/myTpl/myCollection.vue')), 'pages_editMyTpl_myCollection');
//我的模板-历史模板
const editMyTpl_myHistory = r => require.ensure([], () => r(require('../pages/edit/myTpl/myHistory.vue')), 'pages_editMyTpl_myHistory');
//我的模板-快照
const editMyTpl_mySnapshot = r => require.ensure([], () => r(require('../pages/edit/myTpl/mySnapshot.vue')), 'pages_editMyTpl_mySnapshot');

//管理企业应用-我的企业应用
const editApp_myCmpanyApp = r => require.ensure([], () => r(require('../pages/edit/cmpanyApp/myCmpanyApp.vue')), 'pages_editApp_myCmpanyApp');
//管理企业应用-添加企业应用
const editApp_addCmpanyApp = r => require.ensure([], () => r(require('../pages/edit/cmpanyApp/addCmpanyApp.vue')), 'pages_editApp_addCmpanyApp');

//模板编辑-试用和编辑
const editTpl_trialoredit = r => require.ensure([], () => r(require('../pages/edit/tpl/trialoredit.vue')), 'pages_editTpl_trialoredit');
//模板编辑-试用和编辑
const editTpl_addModular = r => require.ensure([], () => r(require('../pages/edit/tpl/addModular.vue')), 'pages_editTpl_addModular');

//模块演示
const editModule_showHow = r => require.ensure([], () => r(require('../pages/edit/module/show-how/index.vue')), 'pages_editModule_showHow');
//模块编辑-banner
const editModule_banner = r => require.ensure([], () => r(require('../pages/edit/module/banner/index.vue')), 'pages_editModule_banner');


//showHow
//还原-还原钉钉默认布局
const restore_dd_default = r => require.ensure([], () => r(require('../pages/edit/restore/dd_default.vue')), 'pages_restore_dd_default');

/*编辑 end*/

const modify = r => require.ensure([], () => r(require('../pages/dome/modify/index')), 'pages_dome_modify');
const dome = r => require.ensure([], () => r(require('../pages/dome/dome/index')), 'pages_dome_dome');
const sortable = r => require.ensure([], () => r(require('../pages/dome/sortable/index')), 'pages_dome_sortable');
const banner = r => require.ensure([], () => r(require('../pages/dome/banner/index')), 'pages_dome_banner');

//edit
const routes = [
    {
        path: '/',
        name: '',
        component: home
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/edit',
        component: edit,
        children: [
            {
                path: '',
                name: '',
                component: myStar
            },
            {
                path: '/myStar',
                name: 'myStar',
                component: myStar
            },
            {
                path: '/modify',
                name: 'modify',
                component: modify
            },
            {
                path: '/dome',
                name: 'dome',
                component: dome
            },
            {
                path: '/sortable',
                name: 'sortable',
                component: sortable
            },
            {
                path: '/banner',
                name: 'banner',
                component: banner
            },
            {
                path: '/restore',
                name: 'restore',
                component: common_routerWarpper,
                children: [{
                    path: 'restore_dd_default',
                    name: 'restore_dd_default',
                    component: restore_dd_default
                }]
            },
            {
                path: '/editMyTpl',
                name: 'editMyTpl',
                component: common_routerWarpper,
                children: [
                    {
                        path: '/editMyTpl_myTemplet',
                        name: 'editMyTpl_myTemplet',
                        component: editMyTpl_myTemplet
                    },
                    {
                        path: '/editMyTpl_myCollection',
                        name: 'editMyTpl_myCollection',
                        component: editMyTpl_myCollection
                    },
                    {
                        path: '/editMyTpl_mySnapshot',
                        name: 'editMyTpl_mySnapshot',
                        component: editMyTpl_mySnapshot
                    },
                    {
                        path: '/editMyTpl_myHistory',
                        name: 'editMyTpl_myHistory',
                        component: editMyTpl_myHistory
                    }]
            },
            {
                path: '/editApp',
                name: 'editApp',
                component: common_routerWarpper,
                children: [
                    {
                        path: '/editApp_myCmpanyApp',
                        name: 'editApp_myCmpanyApp',
                        component: editApp_myCmpanyApp
                    },
                    {
                        path: '/editApp_addCmpanyApp',
                        name: 'editApp_addCmpanyApp',
                        component: editApp_addCmpanyApp
                    }]
            },
            {
                path: '/editTpl',
                name: 'editTpl',
                component: common_routerWarpper,
                children: [
                    {
                        path: '/editTpl_trialoredit',
                        name: 'editTpl_trialoredit',
                        component: editTpl_trialoredit
                    },
                    {
                        path: '/editTpl_addModular',
                        name: 'editTpl_addModular',
                        component: editTpl_addModular
                    }]
            },
            {
                path: '/editModule',
                name: 'editModule',
                component: common_routerWarpper,
                children: [
                    {
                        path: '/editModule_showHow',
                        name: 'editModule_showHow',
                        component: editModule_showHow
                    },
                    {
                        path: '/editModule_banner',
                        name: 'editModule_banner',
                        component: editModule_banner
                    }
                ]
            }
            //
        ]
    },

];

export default function Router(Vue) {
    Vue.use(VueRouter);
    const router = new VueRouter({
        routes: routes
    });
    return {
        router
    }
}

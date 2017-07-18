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

// 设置  全局设置
const editGlobal_global = r => require.ensure([], () => r(require('../pages/edit/global/global.vue')), 'pages_editGlobal_global');
// 设置 颜色设置
const editGlobal_color = r => require.ensure([], () => r(require('../pages/edit/global/color.vue')), 'pages_editGlobal_color');


//模块编辑 模块列表
const editModule_aaddModule = r => require.ensure([], () => r(require('../pages/edit-module/base-addModule/index.vue')), 'pages_editModule_addModule');
//模块编辑 模块演示
const editModule_showHow = r => require.ensure([], () => r(require('../pages/edit-module/base-showHow/index.vue')), 'pages_editModule_showHow');

//模块编辑 banner banner广告
const editModule_banner = r => require.ensure([], () => r(require('../pages/edit-module/banner/index.vue')), 'pages_editModule_banner');
const editModule_banner_edit = r => require.ensure([], () => r(require('../pages/edit-module/banner/edit.vue')), 'pages_editModule_banner_edit');
const editModule_banner_style = r => require.ensure([], () => r(require('../pages/edit-module/banner/style.vue')), 'pages_editModule_banner_style');
const editModule_banner_addormodify = r => require.ensure([], () => r(require('../pages/edit-module/banner/addormodify.vue')), 'pages_editModule_banner_addormodify');

//模块编辑 dingtalkISV 钉钉应用
const editModule_dingtalkISV = r => require.ensure([], () => r(require('../pages/edit-module/dingtalkISV/index.vue')), 'pages_editModule_dingtalkISV');
const editModule_dingtalkISV_edit = r => require.ensure([], () => r(require('../pages/edit-module/dingtalkISV/edit.vue')), 'pages_editModule_dingtalkISV_edit');
const editModule_dingtalkISV_style = r => require.ensure([], () => r(require('../pages/edit-module/dingtalkISV/style.vue')), 'pages_editModule_dingtalkISV_style');
const editModule_dingtalkISV_addormodify = r => require.ensure([], () => r(require('../pages/edit-module/dingtalkISV/addormodify.vue')), 'pages_editModule_dingtalkISV_addormodify');

//模块编辑 doMyself 自定义
const editModule_doMyself= r => require.ensure([], () => r(require('../pages/edit-module/doMyself/index.vue')), 'pages_editModule_doMyself');
const editModule_doMyself_edit = r => require.ensure([], () => r(require('../pages/edit-module/doMyself/edit.vue')), 'pages_editModule_doMyself_edit');
const editModule_doMyself_style = r => require.ensure([], () => r(require('../pages/edit-module/doMyself/style.vue')), 'pages_editModule_doMyself_style');
const editModule_doMyself_addormodify = r => require.ensure([], () => r(require('../pages/edit-module/doMyself/addormodify.vue')), 'pages_editModule_doMyself_addormodify');

//模块编辑 stationGuide 企业地图
const editModule_stationGuide= r => require.ensure([], () => r(require('../pages/edit-module/stationGuide/index.vue')), 'pages_editModule_stationGuide');
const editModule_stationGuide_edit = r => require.ensure([], () => r(require('../pages/edit-module/stationGuide/edit.vue')), 'pages_editModule_stationGuide_edit');
const editModule_stationGuide_style = r => require.ensure([], () => r(require('../pages/edit-module/stationGuide/style.vue')), 'pages_editModule_stationGuide_style');
const editModule_stationGuide_addormodify = r => require.ensure([], () => r(require('../pages/edit-module/stationGuide/addormodify.vue')), 'pages_editModule_stationGuide_addormodify');

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
                    }]
            },
            {
                path: '/global',
                name: 'global',
                component: common_routerWarpper,
                children: [
                    {
                        path: '/editGlobal_global',
                        name: 'editGlobal_global',
                        component: editGlobal_global
                    },
                    {
                        path: '/editGlobal_color',
                        name: 'editGlobal_color',
                        component: editGlobal_color
                    }
                ]
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
                        path: '/editModule_aaddModule',
                        name: 'editModule_aaddModule',
                        component: editModule_aaddModule
                    },
                    /*banner 广告*/
                    {
                        path: '/editModule_banner',
                        name: 'editModule_banner',
                        component: editModule_banner
                    },
                    {
                        path: '/editModule_banner_edit',
                        name: 'editModule_banner_edit',
                        component: editModule_banner_edit
                    },
                    {
                        path: '/editModule_banner_style',
                        name: 'editModule_banner_style',
                        component: editModule_banner_style
                    },
                    {
                        path: '/editModule_banner_addormodify',
                        name: 'editModule_banner_addormodify',
                        component: editModule_banner_addormodify
                    },
                    /*dingtalkISV 钉钉应用*/

                    {
                        path: '/editModule_dingtalkISV',
                        name: 'editModule_dingtalkISV',
                        component: editModule_dingtalkISV
                    },
                    {
                        path: '/editModule_dingtalkISV_edit',
                        name: 'editModule_dingtalkISV_edit',
                        component: editModule_dingtalkISV_edit
                    },
                    {
                        path: '/editModule_dingtalkISV_style',
                        name: 'editModule_dingtalkISV_style',
                        component: editModule_dingtalkISV_style
                    },
                    {
                        path: '/editModule_dingtalkISV_addormodify',
                        name: 'editModule_dingtalkISV_addormodify',
                        component: editModule_dingtalkISV_addormodify
                    },
                    /*自定义应用*/

                    {
                        path: '/editModule_doMyself',
                        name: 'editModule_doMyself',
                        component: editModule_doMyself
                    },
                    {
                        path: '/editModule_doMyself_edit',
                        name: 'editModule_doMyself_edit',
                        component: editModule_doMyself_edit
                    },
                    {
                        path: '/editModule_doMyself_style',
                        name: 'editModule_doMyself_style',
                        component: editModule_doMyself_style
                    },
                    {
                        path: '/editModule_doMyself_addormodify',
                        name: 'editModule_doMyself_addormodify',
                        component: editModule_doMyself_addormodify
                    },

                    /*企业地图*/
                    {
                        path: '/editModule_stationGuide',
                        name: 'editModule_stationGuide',
                        component: editModule_stationGuide
                    },
                    {
                        path: '/editModule_stationGuide_edit',
                        name: 'editModule_stationGuide_edit',
                        component: editModule_stationGuide_edit
                    },
                    {
                        path: '/editModule_stationGuide_style',
                        name: 'editModule_stationGuide_style',
                        component: editModule_stationGuide_style
                    },
                    {
                        path: '/editModule_stationGuide_addormodify',
                        name: 'editModule_stationGuide_addormodify',
                        component: editModule_stationGuide_addormodify
                    }
                ]
            }
            //editGlobal_color
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

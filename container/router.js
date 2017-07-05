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
const editMyTemplet_myTemplet = r => require.ensure([], () => r(require('../pages/edit/editMyTemplet/myTemplet.vue')), 'pages_editMyTemplet_myTemplet');
//我的模板-我的收藏
const editMyTemplet_myCollection = r => require.ensure([], () => r(require('../pages/edit/editMyTemplet/myCollection.vue')), 'pages_editMyTemplet_myCollection');
//我的模板-历史模板
const editMyTemplet_myHistory = r => require.ensure([], () => r(require('../pages/edit/editMyTemplet/myHistory.vue')), 'pages_editMyTemplet_myHistory');
//我的模板-快照
const editMyTemplet_mySnapshot = r => require.ensure([], () => r(require('../pages/edit/editMyTemplet/mySnapshot.vue')), 'pages_editMyTemplet_mySnapshot');

//管理企业应用-我的企业应用
const editApplication_myCmpanyApp = r => require.ensure([], () => r(require('../pages/edit/editApplication/myCmpanyApp.vue')), 'pages_editApplication_myCmpanyApp');
//管理企业应用-添加企业应用
const editApplication_addCmpanyApp = r => require.ensure([], () => r(require('../pages/edit/editApplication/addCmpanyApp.vue')), 'pages_editApplication_addCmpanyApp');

//模板编辑-试用和编辑
const editTemplet_trialoredit = r => require.ensure([], () => r(require('../pages/edit/editTemplet/trialoredit.vue')), 'pages_editTemplet_trialoredit');

//
//还原-还原钉钉默认布局
const restore_dd_default = r => require.ensure([], () => r(require('../pages/edit/restore/dd_default.vue')), 'pages_restore_dd_default');

/*编辑 end*/

const modify = r => require.ensure([], () => r(require('../pages/edit/modify/index')), 'pages_modify');
const dome = r => require.ensure([], () => r(require('../pages/edit/dome/index')), 'pages_dome');
const sortable = r => require.ensure([], () => r(require('../pages/edit/sortable/index')), 'pages_sortable');
const banner = r => require.ensure([], () => r(require('../pages/edit/banner/index')), 'pages_banner');

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
                path: '/editMyTemplet',
                name: 'editMyTemplet',
                component: common_routerWarpper,
                children: [
                    {
                        path: '/editMyTemplet_myTemplet',
                        name: 'editMyTemplet_myTemplet',
                        component: editMyTemplet_myTemplet
                    },
                    {
                        path: '/editMyTemplet_myCollection',
                        name: 'editMyTemplet_myCollection',
                        component: editMyTemplet_myCollection
                    },
                    {
                        path: '/editMyTemplet_mySnapshot',
                        name: 'editMyTemplet_mySnapshot',
                        component: editMyTemplet_mySnapshot
                    },
                    {
                        path: '/editMyTemplet_myHistory',
                        name: 'editMyTemplet_myHistory',
                        component: editMyTemplet_myHistory
                    }]
            },
            {
                path: '/editApplication',
                name: 'editApplication',
                component: common_routerWarpper,
                children: [
                    {
                        path: '/editApplication_myCmpanyApp',
                        name: 'editApplication_myCmpanyApp',
                        component: editApplication_myCmpanyApp
                    },
                    {
                        path: '/editApplication_addCmpanyApp',
                        name: 'editApplication_addCmpanyApp',
                        component: editApplication_addCmpanyApp
                    }]
            },
            {
                path: '/editTemplet',
                name: 'editTemplet',
                component: common_routerWarpper,
                children: [
                    {
                        path: '/editTemplet_trialoredit',
                        name: 'editTemplet_trialoredit',
                        component: editTemplet_trialoredit
                    }]
            }
            /**/
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

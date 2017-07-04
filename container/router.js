import VueRouter from 'vue-router';
// import {routes} from '../config/router.conf.js'

const home = r => require.ensure([], () => r(require('../pages/home/index')), 'pages_home');

const edit = r => require.ensure([], () => r(require('../pages/edit/index')), 'pages_edit');

const myStar = r => require.ensure([], () => r(require('../pages/edit/myStar/index')), 'pages_myStar');

const eitTemplet = r => require.ensure([], () => r(require('../pages/edit/eitTemplet/index')), 'pages_eitTemplet');
const eitTemplet_myTemplet = r => require.ensure([], () => r(require('../pages/edit/eitTemplet/children/myTemplet.vue')), 'pages_eitTemplet_myTemplet');
const eitTemplet_myCollection = r => require.ensure([], () => r(require('../pages/edit/eitTemplet/children/myCollection.vue')), 'pages_eitTemplet_myCollection');


const modify = r => require.ensure([], () => r(require('../pages/edit/modify/index')), 'pages_modify');
const dome = r => require.ensure([], () => r(require('../pages/edit/dome/index')), 'pages_dome');
const sortable = r => require.ensure([], () => r(require('../pages/edit/sortable/index')), 'pages_sortable');
const banner = r => require.ensure([], () => r(require('../pages/edit/banner/index')), 'pages_banner');


const restore = r => require.ensure([], () => r(require('../pages/edit/restore/index')), 'pages_restore');
const restore_dd_default = r => require.ensure([], () => r(require('../pages/edit/restore/children/dd_default.vue')), 'pages_restore_dd_default');

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
                component: restore,
                children: [{
                    path: 'restore_dd_default',
                    name: 'restore_dd_default',
                    component: restore_dd_default
                }]
            },
            {
                path: '/eitTemplet',
                name: 'eitTemplet',
                component: eitTemplet,
                children: [
                    {
                        path: '/eitTemplet_myTemplet',
                        name: 'eitTemplet_myTemplet',
                        component: eitTemplet_myTemplet
                    },
                    {
                        path: '/eitTemplet_myCollection',
                        name: 'eitTemplet_myCollection',
                        component: eitTemplet_myCollection
                    }]
            }
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

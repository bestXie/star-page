/**
 * Created by bestXie on 2017/6/20.
 */


export const modulesBanner = r => require.ensure([], () => r(require('../components/banner/banner.vue')), 'modules_banner');
export const modulesApplication = r => require.ensure([], () => r(require('../components/application/application.vue')), 'modules_application');
/**
 * Created by bestXie on 2017/6/20.
 */
export const modulesApplication01 = r => require.ensure([], () => r(require('./application.vue')), 'modules_application_01');

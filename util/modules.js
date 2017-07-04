/**
 * Created by bestXie on 2017/6/20.
 */

import {modulesBanner, modulesApplication} from './modules-types.js'

export default Vue => {
    Vue.component('modulesBanner', modulesBanner);
    Vue.component('modulesApplication', modulesApplication);
};
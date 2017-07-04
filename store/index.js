/**
 * Created by bestXie on 2017/6/14.
 */
import Vuex from 'vuex';

import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';


export default function Store(Vue) {
    Vue.use(Vuex);
    return {
        store: new Vuex.Store({
            state,
            getters,
            mutations
        })
    }

};

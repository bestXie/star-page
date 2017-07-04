/**
 * Created by bestXie on 2017/6/19.
 */

import {modulesBanner,modulesApplication} from '../modules.js'
export default {
    components: {
        modulesBanner,
        modulesApplication
    },
    name: 'starList',
    data: function () {
        return {}
    },
    props: {
        propData: Array,
    },
    computed: {},
    mounted: function () {
        console.log(111);
    },
    methods: {
        starClick(data){
            this.$emit('starClick', data)
        }
    }
}
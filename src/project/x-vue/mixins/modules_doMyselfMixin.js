/**
 * Created by bestXie on 2017/7/7.
 */
/*bannerMixin*/
const doMyselfMixin = {
    data: function () {
        return {
            link: ', author: icepy'
        }
    },
    props: {
        propData: {default: {}},
    },
    computed: {},
    mounted: function () {
    },
    methods: {
        starClick(){
            this.$emit('starClick', '2222')
        }
    },
    components: {}
};

export {
    doMyselfMixin
}

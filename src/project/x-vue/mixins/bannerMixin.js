/*bannerMixin*/
// 默认图片

const bannerMixin = {
    props: {
        propData: {default: {}},
    },
    computed: {},
    mounted: function () {
    },
    methods: {
        starClick(data){
            this.$emit('starClick', data)
        }
    },
    components: {}
};

export {
    bannerMixin
}

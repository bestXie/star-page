
/*bannerMixin*/
const stationGuideMixin = {
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
    stationGuideMixin
}

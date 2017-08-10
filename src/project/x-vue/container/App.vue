<template>
    <div class="app-wrapper">
        <xloading :loading="loading"></xloading>
        <router-view style="flex:1;"></router-view>
    </div>
</template>
<script>
    import xloading from '../plugins/loading/index.vue';
    import {mapGetters} from 'vuex';
    export default {
        name: 'app',
        components: {
            xloading
        },
        mounted () {
           /* let a = 1;
            let _this = this;
            setInterval(function () {
                a++;
                a=a>100?0:a;
                _this.$store.commit('updateLoadingStatus', {state: a+'%', show: true, tips: '上传中 请稍后'});
            }, 100)*/
        },
        computed: {
            ...mapGetters([
                'loading',
            ])
        }
    }
</script>

<style lang="less">

    @import '../../../lib/styleTheme/const/reset.less';

    img[ lazy = loading ] {
        background: #f2f2f2 url("../images/svg/loading-spin.svg") center no-repeat;
        background-size: auto 33%;
    }
    .imgerror-w{
        background: #f2f2f2 url("../images/common/none_image_defult.png") center no-repeat;
        background-size: auto 100%;
    }
    .imgerror-h{
        background: #f2f2f2 url("../images/common/none_image_defult.png") center no-repeat;
        background-size:  100% auto;
    }
    img[ lazy = error ] {
        background: #f2f2f2 url("../images/common/none_image_defult.png") center no-repeat;
        background-size: auto 100%;
    }

    img[ lazy = loaded ] {
    }

</style>

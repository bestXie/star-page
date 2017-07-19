<template>
    <div class="app-wrapper">
        <loading :show="loadingShow"></loading>
        <router-view style="flex:1;"></router-view>
    </div>
</template>
<script>
    import loading from '../plugins/loading/index.vue';
    import {mapGetters} from 'vuex';
    export default {
        name: 'app',
        components: {
            loading
        },
        mounted () {
        },
        computed: {
            ...mapGetters([
                'loadingShow',
            ])
        }
    }
</script>

<style lang="less">
    @import '../../../lib/styleTheme/const/reset.less';
    @import '../theme/style/style.less';

    /*common start*/
    .wrapper {
        width: 100%;
        height: 100%;
    }
    //star-flex
    .star-flex {
        display: -webkit-flex;
        display: flex;
    }
    //页面背景定义
    .app-wrapper {
        background-color: #F2F2F2;
        width: 100%;
        height: 100%;
        max-width: 750px;
        margin: 0 auto;
    }
    //定义内容高度
    .app-container {
        width: 100%;
        height: 100%;
    }
    /*common end*/

</style>

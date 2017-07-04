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

    .star-flex {
        display: -webkit-flex; /* Safari */
        display: flex;
    }

    .app-wrapper {
        background-color: #f8f8f8;
        width: 100%;
        height: 100%;
    }

    .app-container {
        width: 100%;
        height: 100%;
    }

    .filter {
        -webkit-filter: blur(3px);
        -moz-filter: blur(3px);
        -ms-filter: blur(3px);
        filter: blur(3px);
        filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false);
        /* IE6~IE9 */
    }

    .vux-1px-t {
        position: relative;
    }

    .vux-1px-t:before {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        color: #c7c7c7;
    }

    .vux-1px-t:before {
        top: 0;
        border-top: 1px solid #c7c7c7;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }

    .vux-swipeout {
        width: 100%;
        overflow: hidden;
    }

    .vux-swipeout-item {
        position: relative;
    }

    .vux-swipeout-button-box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        font-size: 0;
        text-align: right;
    }

    .vux-swipeout-button-box-left {
        text-align: left;
    }

    .vux-swipeout-content {
        position: relative;
        background: #FFF;
    }

    .demo-content {
        padding: 10px 10px;
    }

    .vux-swipeout-button-box > div {
        height: 100%;
    }

    .vux-swipeout-button {
        height: 100%;
        text-align: center;
        font-size: 14px;
        color: #FFF;
        border: none;
    }
</style>

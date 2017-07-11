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


</style>

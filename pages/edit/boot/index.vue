<template>
    <div class="wrapper" >
        <confirm :confirm="confirm"></confirm>
        <toast :propData="toast"></toast>
        <router-view style="flex:1;" :class="{'x-filter':confirm.show}"></router-view>
    </div>
</template>
<script>
    import confirm from '../../../plugins/confirm/index.vue';
    import toast from '../../../plugins/toast/index.vue'

    import {mapGetters} from 'vuex';
    export default {
        name: 'edit',
        components: {
            confirm,
            toast
        },
        mounted () {
        },
        computed: {
            ...mapGetters([
                'confirm',
                'toast'
            ])
        }
    }
</script>

<style lang="less">
    .wrapper {
        width: 100%;
        height: 100%;
    }
    .edit-container {
        width: 100%;
        height: 100%;
    }

    .x-tips-color {
        color: #0076ff;
    }
    .x-border-1px-bottom {
        border-bottom: 1px #c8c8c8 solid;
    }
    .x-border-1px{
        border: solid 1px #ccc;
    }

    .x-h-common{
        width: 100%;
        height: 30px;
    }


    .x-title-box {
        box-sizing: border-box;
        padding-left: 20px;
        max-width: 100%;
        padding-right: 40px;
    }
    .x-title-box .title {
        font-size: 34px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        color: #4a4a4a;
        font-weight: 300;
    }
    .x-title-box .title-tips {
        font-size: 24px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #9b9b9b;

    }
    .x-r-icon {
        width: 16px;
        height: 26px;
    }
    .x-icon-star{
        width: 40px;
        height: 40px;
        margin-right: 32px;
        background: #ccc;
    }
    .x-text-overflow{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .x-flex-center{
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }


    .x-filter {
        -webkit-filter: blur(3px);
        -moz-filter: blur(3px);
        -ms-filter: blur(3px);
        filter: blur(3px);
        filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false);
        /* IE6~IE9 */
    }
</style>

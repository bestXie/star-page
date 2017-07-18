<template>
    <transition name="vux-mask">
        <vMask :show="show" @maskClick="maskClick" >
            <div class="loader" v-show="show"></div>
        </vMask>
    </transition>
</template>
<script>
    import vMask from '../mask/index.vue';
    export default {
        components: {
            vMask
        },
        name: 'v-loading',
        props: {
            show: {
                type: true
            }
        },
        methods: {
            maskClick(data){
                console.log(data)
            }
        },
    };
</script>

<style lang="less" scoped>
    @import '../../theme/style/weui_mask.less';
    @import '../../theme/style/loading.less';
</style>

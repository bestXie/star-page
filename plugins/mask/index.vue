<template>
    <transition name="modal">
        <div class="v-mask" v-show="show" @click="maskClick" :style="{background:stylebg }">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'v-mask',
        props: {
            show: {
                type: true
            },
            stylebg: ''
        },
        mounted: function () {
            console.log(this.show,this.stylebg);

        },
        methods: {
            maskClick(){
                this.$emit('maskClick', 'maskClick')
            }
        },
    };
</script>

<style lang="less" scoped>
    @import '../../theme/style/weui_mask.less';

    .v-mask {
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.4);
        display: table;
        width: 100%;
        height: 100%;
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>

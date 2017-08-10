<template>
    <transition name="modal">
        <div class="v-mask" v-show="show" @click="starClick" :style="{background:stylebg,position :position}">
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
            stylebg: '',
            position: ''
        },
        mounted: function () {
        },
        methods: {
            starClick(){
                this.$emit('starClick', 'starClick')
            }
        },
    };
</script>

<style lang="less" scoped>
    .v-mask {
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
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

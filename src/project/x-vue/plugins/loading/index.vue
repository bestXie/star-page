<template>
    <transition name="vux-mask">
        <vMask :show="show" @maskClick="maskClick">
            <div class="loader" v-show="show">
                <div class="loader-inner line-spin-fade-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
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

<style scoped>
    @import '../../theme/style/weui_mask.less';
    /*@import '../../theme/style/loading.less';*/

    .loader {
        box-sizing: border-box;
        display: flex;
        flex: 0 1 auto;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 25%;
        max-width: 25%;
        height: 100px;
        width: 100px;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 50px);

    }

    .line-spin-fade-loader {
        position: relative;
        top: -10px;
        left: -4px;
    }

    .line-spin-fade-loader > div:nth-child(1) {
        top: 20px;
        left: 0;
        -webkit-animation: line-spin-fade-loader 1.2s -0.84s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.84s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(2) {
        top: 13.63636px;
        left: 13.63636px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: line-spin-fade-loader 1.2s -0.72s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.72s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(3) {
        top: 0;
        left: 20px;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-animation: line-spin-fade-loader 1.2s -0.6s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.6s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(4) {
        top: -13.63636px;
        left: 13.63636px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-animation: line-spin-fade-loader 1.2s -0.48s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.48s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(5) {
        top: -20px;
        left: 0;
        -webkit-animation: line-spin-fade-loader 1.2s -0.36s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.36s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(6) {
        top: -13.63636px;
        left: -13.63636px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: line-spin-fade-loader 1.2s -0.24s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.24s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(7) {
        top: 0;
        left: -20px;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-animation: line-spin-fade-loader 1.2s -0.12s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.12s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(8) {
        top: 13.63636px;
        left: -13.63636px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-animation: line-spin-fade-loader 1.2s 0s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s 0s infinite ease-in-out;
    }

    .line-spin-fade-loader > div {
        background-color: rgba(15,70,228,.8);
        border-radius: 5px;
        margin: 2px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        position: absolute;
        width: 5px;
        height: 15px;
    }

    @-webkit-keyframes line-spin-fade-loader {
        50% {
            opacity: 0.3; }
        100% {
            opacity: 1; } }

    @keyframes line-spin-fade-loader {
        50% {
            opacity: 0.3; }
        100% {
            opacity: 1; } }
</style>

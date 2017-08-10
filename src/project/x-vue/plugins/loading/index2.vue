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
        height: .8rem;
        width: .8rem;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: calc(50% - .4rem);
        left: calc(50% - .4rem);

    }

    .line-spin-fade-loader {
        position: relative;
        top: 0;
        left: 0;
        height: .8rem;
        width: .8rem;
        background: #ccc;
    }

    .line-spin-fade-loader > div:nth-child(1) {
        top:.4rem;
        left: .4rem;
        -webkit-animation: line-spin-fade-loader 1.2s -0.84s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.84s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(2) {
        top: .3363636rem;
        left: .5363636rem;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: line-spin-fade-loader 1.2s -0.72s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.72s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(3) {
        top: .2rem;
        left: .6rem;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-animation: line-spin-fade-loader 1.2s -0.6s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.6s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(4) {
        top:.0636364rem;
        left: .5363636rem;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-animation: line-spin-fade-loader 1.2s -0.48s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.48s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(5) {
        top: 0rem;
        left: .4rem;
        -webkit-animation: line-spin-fade-loader 1.2s -0.36s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.36s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(6) {
        top: .0636364rem;
        left: .2636364rem;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: line-spin-fade-loader 1.2s -0.24s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.24s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(7) {
        top: .2rem;
        left: .2rem;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-animation: line-spin-fade-loader 1.2s -0.12s infinite ease-in-out;
        animation: line-spin-fade-loader 1.2s -0.12s infinite ease-in-out;
    }

    .line-spin-fade-loader > div:nth-child(8) {
        top: .3363636rem;
        left: .2636364rem;
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
        width: .06rem;
        height: .2rem;
    }

    @-webkit-keyframes circular-loader {
        50% {
            opacity: 0.3; }
        100% {
            opacity: 1; } }

    @keyframes circular-loader {
        50% {
            opacity: 0.3; }
        100% {
            opacity: 1; } }
</style>

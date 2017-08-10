<template>
    <div class="loader">
        <div class="loader-inner line-spin-fade-loader">
            <div :style="{ 'borderBottomColor': '#d2d2d2','borderTopColor': '#d2d2d2','borderLeftColor': '#d2d2d2'}"></div>
            <div :style="{ 'borderBottomColor': '#d2d2d2','borderTopColor': '#d2d2d2','borderRightColor': '#d2d2d2'}"></div>
        </div>
        <div class="loader-tips-box" v-if="loading.tips||loading.state">
            <p v-if="loading.state">{{loading.state}}</p>
            <p v-if="loading.tips">{{loading.tips}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        components: {},
        name: 'loader',
        props: {
            loading: {
                default: {
                    show: {default: false},
                    tips: {default: String},
                    state: {default: String},
                }
            }
        },
        mounted () {
        },
        methods: {
            maskClick(data){
                console.log(data)
            }
        },
    };
</script>

<style scoped>

    .loader-tips-box {
        color: #d2d2d2;
        font-size: .18rem;
        text-align: center;
        padding-top: .1rem;
    }

    .loader-tips-box p {
        padding-top: .05rem;
    }

    .loader {
        box-sizing: border-box;
        display: flex;
        flex: 0 1 auto;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 25%;
        align-items: center;
        justify-content: center;

    }

    .line-spin-fade-loader {
        position: relative;
        top: 0;
        left: 0;
        height: .6rem;
        width: .6rem;
    }

    .line-spin-fade-loader > div:nth-child(1) {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        box-sizing: border-box;
        /*   border-bottom-color: #d2d2d2;
           border-top-color: #d2d2d2;
           border-left-color: #d2d2d2;*/
        -webkit-animation: line-spin-fade-loader .6s 0s infinite linear;
        animation: line-spin-fade-loader .6s 0s infinite linear;
    }

    .line-spin-fade-loader > div:nth-child(2) {
        width: 50%;
        height: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        box-sizing: border-box;
        /* border-bottom-color: #d2d2d2;
         border-top-color: #d2d2d2;
         border-right-color: #d2d2d2;*/
        -webkit-animation: line-spin-fade-loader2 .6s 0s infinite linear;
        animation: line-spin-fade-loader2 .6s 0s infinite linear;
    }

    .line-spin-fade-loader > div {
        border-radius: 50%;
        border: .04rem solid transparent;
    }

    @-webkit-keyframes line-spin-fade-loader {
        0% {

            -webkit-transform: translate(-50%, -50%) rotate(0deg);
            -moz-transform: translate(-50%, -50%) rotate(0deg);
            -o-transform: translate(-50%, -50%) rotate(0deg);
            -ms-transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            -webkit-transform: translate(-50%, -50%) rotate(360deg);
            -moz-transform: translate(-50%, -50%) rotate(360deg);
            -o-transform: translate(-50%, -50%) rotate(360deg);
            -ms-transform: translate(-50%, -50%) rotate(360deg);
        }
    }

    @keyframes line-spin-fade-loader {
        0% {
            -webkit-transform: translate(-50%, -50%) rotate(0deg);
            -moz-transform: translate(-50%, -50%) rotate(0deg);
            -o-transform: translate(-50%, -50%) rotate(0deg);
            -ms-transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            -webkit-transform: translate(-50%, -50%) rotate(360deg);
            -moz-transform: translate(-50%, -50%) rotate(360deg);
            -o-transform: translate(-50%, -50%) rotate(360deg);
            -ms-transform: translate(-50%, -50%) rotate(360deg);
        }
    }

    @-webkit-keyframes line-spin-fade-loader2 {
        0% {
            -webkit-transform: translate(-50%, -50%) rotate(0deg);
            -moz-transform: translate(-50%, -50%) rotate(0deg);
            -o-transform: translate(-50%, -50%) rotate(0deg);
            -ms-transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            -webkit-transform: translate(-50%, -50%) rotate(-360deg);
            -moz-transform: translate(-50%, -50%) rotate(-360deg);
            -o-transform: translate(-50%, -50%) rotate(-360deg);
            -ms-transform: translate(-50%, -50%) rotate(-360deg);
        }
    }

    @keyframes line-spin-fade-loader2 {
        0% {
            -webkit-transform: translate(-50%, -50%) rotate(0deg);
            -moz-transform: translate(-50%, -50%) rotate(0deg);
            -o-transform: translate(-50%, -50%) rotate(0deg);
            -ms-transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            -webkit-transform: translate(-50%, -50%) rotate(-360deg);
            -moz-transform: translate(-50%, -50%) rotate(-360deg);
            -o-transform: translate(-50%, -50%) rotate(-360deg);
            -ms-transform: translate(-50%, -50%) rotate(-360deg);
        }
    }
</style>

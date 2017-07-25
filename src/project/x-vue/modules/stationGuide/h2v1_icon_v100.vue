<style scoped>
    .app-item-wrapper {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        background: #fff;
    }

    .app-item-box {
        width: 100%;
        height: 1.8rem;
        position: relative;
        /*border-right: 1px #c7c7c7 solid;*/
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
    }
    .app-item-box:after {
        border-right: 1px solid #ccc;
        content: ' ';
        display: block;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: 0;

    }
    .app-item-box:after {
        transform-origin: left bottom;
        -moz-transform-origin: left bottom;
        -webkit-transform-origin: left bottom;
        -moz-transform: scaleX(0.33333334);
        -webkit-transform: scaleX(0.33333334);
        transform: scaleX(0.33333334);
    }

    .app-item-wrapper .app-item-box:last-child:after {
        border-right: 0;
    }

    .app-item-box img {
        width: 100%;
        height: 180px;
    }
    .app-item{
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
        width: 100%;

    }
    .app-item-icon{
        width: .8rem;
        height: .8rem;
        background: #ccc;
        border-radius: 6px;
    }
    .app-item-name{
        color: #989898;
        font-size: .24rem;
        height: .5rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
        padding: 0 .1rem;
        overflow: hidden;
        width: 100%;
    }
</style>

<template>
    <div class="app-item-wrapper" :style="propData.style">
        <div class="app-item-box">
            <div class="app-item">
                <div class="app-item-icon"></div>
                <div class="app-item-name">
                    <p class="x-text-overflow">天猫企业购天猫企业购天猫企业购天猫企业购</p>
                </div>
            </div>
        </div>
        <div class="app-item-box">
            <div class="app-item">
                <div class="app-item-icon"></div>
                <div class="app-item-name">
                    <p class="x-text-overflow">营改赠信息</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {doMyselfMixin} from '../../mixins/modules_doMyselfMixin'
    export default {
        data: function () {
            return {
                link: ', author: icepy'
            }
        },
        props: {
            propData: {default: []},
        },
        computed: {},
        mounted: function () {
        },
        methods: {
            starClick(){
                this.$emit('starClick', '2222')
            }
        },
        components: {}
    }
</script>

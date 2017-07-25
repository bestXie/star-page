<style scoped>
    .app-item-wrapper {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        background: #fff;
    }

    .app-item-box {
        width: 25%;
        position: relative;
        /*border-bottom: 1px #ccc solid;*/
        box-sizing: border-box;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
    }

    .app-item-box:before {
        border-bottom: 1px solid #ccc;
        content: ' ';
        display: block;
        width: 100%;
        position: absolute;
        left: 0;
        top: 100%;
        display: none;
    }

    .app-item-box:before {
        transform-origin: left top;
        -moz-transform-origin: left top;
        -webkit-transform-origin: left top;
        -moz-transform: scaleY(-0.33333334);
        -webkit-transform: scaleY(-0.33333334);
        transform: scaleY(-0.33333334);
    }

    .app-item-box:after {
        border-right: 1px solid #ccc;
        content: ' ';
        display: block;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
        display: none;
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
        /*border-right: 0;*/
    }

    .app-item-box img {
        width: 100%;
        height: 100%;
    }

    .app-item {
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

    .app-item-icon {
        width: .8rem;
        height: .8rem;
        background: #ccc;
        border-radius: 6px;
    }

    .app-item-name {
        color: #929292;
        font-size: .28rem;
        padding: .2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
        overflow: hidden;
        width: 100%;
    }
   .p-t-40{
       padding-top: .40rem;
   }
    .p-b-40{
        padding-bottom: .40rem;
    }

</style>

<template>
    <div class="dingtalkISV-wrapper">

        <div class="app-item-wrapper" :style="propData.style">
            <div class="app-item-box p-t-40">
                <div class="app-item">
                    <div class="app-item-name">
                        <p class="x-text-overflow">天猫企业购</p>
                    </div>
                </div>
            </div>
            <div class="app-item-box p-t-40">
                <div class="app-item">
                    <div class="app-item-name">
                        <p class="x-text-overflow">天猫企业购</p>
                    </div>
                </div>
            </div>
            <div class="app-item-box p-t-40">
                <div class="app-item">
                    <div class="app-item-name">
                        <p class="x-text-overflow">天猫企业购</p>
                    </div>
                </div>
            </div>
            <div class="app-item-box p-t-40">
                <div class="app-item">
                    <div class="app-item-name">
                        <p class="x-text-overflow">天猫企业购</p>
                    </div>
                </div>
            </div>
            <div class="app-item-box p-b-40">
                <div class="app-item">
                    <div class="app-item-name">
                        <p class="x-text-overflow">天猫企业购</p>
                    </div>
                </div>
            </div>
            <div class="app-item-box p-b-40">
                <div class="app-item">
                    <div class="app-item-name">
                        <p class="x-text-overflow">天猫企业购</p>
                    </div>
                </div>
            </div>
            <div class="app-item-box p-b-40" >
                <div class="app-item">
                    <div class="app-item-name">
                        <p class="x-text-overflow">天猫企业购</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'module_dingtalkISV_h3v3_v100',
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

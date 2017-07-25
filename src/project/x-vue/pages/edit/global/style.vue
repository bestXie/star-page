<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        padding-top: .7rem;
        height: 100%;
        box-sizing: border-box;
    }

    .banner-style-wrapper {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
    }

    .banner-style-box {
        padding-top: .2rem;

    }

    .empty-color {
        background: url("../../../images/common/icon_common_noColor.png") center no-repeat;
        background-size: 100%;
    }

</style>

<template>
    <div class="wrapper">
        <toast :propData="toastData" @starClick="toastCLick"></toast>
        <section class="banner-style-wrapper">
            <scroller>
                <section class="banner-style-box">
                    <div class="bar-container-wrapper">
                        <div class=" bar-container-img x-border-1px-bottom">
                            <div class="bar-container-item-l ">
                                <div class="bar-container-img-title">模板背景色</div>
                                <div class="bar-container-img-tips ">#f2f2f2</div>
                            </div>
                            <div class="bar-container-item-r">
                                <div class="bar-container-img-input x-border-1px-df"
                                     :style="{'backgroundColor':'#f2f2f2'}"></div>
                            </div>
                        </div>
                    </div>

                    <div class="h-60"></div>
                    <div class="bar-title-wrapper x-border-1px-bottom">
                        <p>背景图片</p>
                    </div>
                    <div class="bar-container-wrapper">

                        <div class=" bar-container-img x-border-1px-bottom">
                            <div class="bar-container-item-l ">
                                <div class="bar-container-img-title">模块名称文字颜色</div>
                                <div class="bar-container-img-tips">#无色</div>
                            </div>
                            <div class="bar-container-item-r">
                                <div class="bar-container-img-input x-border-1px-df empty-color"></div>
                            </div>
                        </div>

                        <div class="x-switch-item-box x-border-1px-bottom">
                            <div class="x-switch-item-l">
                                <div class="x-switch-label">布局方式</div>
                            </div>
                            <div class="x-switch-item-r">
                                <input type="checkbox" class="x-switch" checked="checked">
                            </div>
                        </div>
                        <div class="x-switch-item-box x-border-1px-bottom">
                            <div class="x-switch-item-l">
                                <div class="x-switch-label">对其方式</div>
                            </div>
                            <div class="x-switch-item-r">
                                <input type="checkbox" class="x-switch" checked="checked">
                            </div>
                        </div>
                    </div>

                    <div class="h-60"></div>
                    <div class="bar-title-wrapper x-border-1px-bottom">
                        <p>标题设置</p>
                    </div>
                    <div class="bar-container-wrapper">
                        <div class=" bar-container-img x-border-1px-bottom">
                            <div class="bar-container-item-l ">
                                <div class="bar-container-img-title">应用名称文字颜色</div>
                                <div class="bar-container-img-tips">#f2f2f2</div>
                            </div>
                            <div class="bar-container-item-r">
                                <div class="bar-container-img-input x-border-1px-df"
                                     :style="{'backgroundColor':'#f2f2f2'}"></div>
                            </div>
                        </div>
                        <div class="x-switch-item-box x-border-1px-bottom">
                            <div class="x-switch-item-l">
                                <div class="x-switch-label">覆盖</div>
                                <div class="x-switch-label-tips">覆盖所有自定义模块标题文字颜色</div>
                            </div>
                            <div class="x-switch-item-r">
                                <input type="checkbox" class="x-switch" checked="checked">
                            </div>
                        </div>

                        <div class=" bar-container-img x-border-1px-bottom">
                            <div class="bar-container-item-l ">
                                <div class="bar-container-img-title">标题框背景色</div>
                                <div class="bar-container-img-tips">#f2f2f2</div>
                            </div>
                            <div class="bar-container-item-r">
                                <div class="bar-container-img-input x-border-1px-df"
                                     :style="{'backgroundColor':'#f2f2f2'}"></div>
                            </div>
                        </div>

                        <div class="x-switch-item-box x-border-1px-bottom">
                            <div class="x-switch-item-l">
                                <div class="x-switch-label">覆盖</div>
                                <div class="x-switch-label-tips">覆盖所有自定义模块标题标题框背景色</div>
                            </div>
                            <div class="x-switch-item-r">
                                <input type="checkbox" class="x-switch" checked="checked">
                            </div>
                        </div>
                    </div>

                    <div class="h-60"></div>
                    <div class="bar-container-wrapper">
                        <div class="x-switch-item-box x-border-1px-bottom">
                            <div class="x-switch-item-l">
                                <div class="x-switch-label">模块内边距</div>
                                <div class="x-switch-label-tips">5px</div>
                            </div>
                            <div class="x-switch-item-r">
                                <input type="checkbox" class="x-switch">
                            </div>
                        </div>
                    </div>
                    <div class="h-60"></div>
                    <div class="h-60"></div>
                    <div class="h-60"></div>
                </section>
            </scroller>
        </section>
    </div>
</template>

<script>
    import {getStore, setStore} from '../../../util/index';
    import toast from '../../../plugins/toast/index.vue'
    export default {
        name: 'page_banner_index',
        components: {toast},
        data () {
            return {
                moduleList: [],
                toastData: {
                    show: true,
                    content: '点击查看快照预览',
                    type: 'snapshot'
                },

            }
        },
        mounted () {
        },
        computed: {},
        methods: {
            toastCLick(){

            }
        }
    }
</script>


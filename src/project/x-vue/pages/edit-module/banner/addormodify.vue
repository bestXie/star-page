<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    .banner-addormodify-wrapper {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
    }

    .banner-addormodify-box {
        padding-top: .2rem;

    }

    .bar-add-img-wrapper {
        width: 100%;
        height: 1.8rem;
        background: #fff;
    }
    .bar-add-img-tips-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .bar-add-img-tips-box{
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        flex-direction: column;
    }
    .bar-add-img-tips-icon{
        width: .74rem;
        height: .74rem;
        background: url("../../../images/common/icon_common_addImage_white.png") center no-repeat;
        background-size: 100%;
    }
    .bar-add-img-tips{
        margin-top: .15rem;
        font-size: .24rem;
        color: #8f8e94;
    }


</style>

<template>
    <div class="wrapper">
        <section class="banner-addormodify-wrapper">
            <scroller>
                <section class="banner-addormodify-box">
                    <div class="h-30"></div>
                    <div class="bar-container-wrapper">

                        <div class="bar-container-item-box x-border-1px-bottom">
                            <div class="bar-container-item-l">
                                <div class="input-label">图片标题</div>
                            </div>
                            <div class="bar-container-item-r">
                                <input class="input" autocomplete="off" autocapitalize="off" autocorrect="off"
                                       spellcheck="false"
                                       type="text" placeholder="选填 （15个以内）" maxlength="15">
                            </div>
                        </div>
                        <div class="bar-container-item-box x-border-1px-bottom">
                            <div class="bar-container-item-l">
                                <div class="input-label">图片链接</div>
                            </div>
                            <div class="bar-container-item-r">
                                <input class="input" autocomplete="off" autocapitalize="off" autocorrect="off"
                                       spellcheck="false"
                                       type="text" placeholder="请填写链接地址" maxlength="100">
                            </div>
                        </div>
                    </div>
                    <div class="h-20"></div>
                    <div class="bar-add-img-wrapper">
                        <div class="bar-add-img-tips-wrapper x-flex-center">
                            <div class="bar-add-img-tips-box">
                                <div class="bar-add-img-tips-icon"></div>
                                <div class="bar-add-img-tips">上传图图片　宽375高90的模块</div>
                            </div>
                        </div>
                    </div>
                </section>
            </scroller>
        </section>
    </div>
</template>

<script>
    import {getStore, setStore} from '../../../util/index';
    export default {
        name: 'page_banner_index',
        components: {},
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

